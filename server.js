import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import { createServer as createViteServer } from 'vite';
import compression from 'compression';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === 'production';

// Just to remove the error of using useLayoutEffect on server side
const originalError = console.error;
console.error = (...args) => {
  if (typeof args[0] === 'string' && args[0].includes('useLayoutEffect does nothing on the server')) {
    return;
  }
  originalError(...args);
};

async function createServer() {
  const app = express();

  app.use(compression());

  let vite;
  if (!isProduction) {
    // Create Vite server in middleware mode
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom'
    });
    
    // Use vite's connect instance as middleware
    app.use(vite.middlewares);
  } else {
    app.use('/assets', express.static(path.resolve(__dirname, 'dist/client/assets')));
    app.use('/', express.static(path.resolve(__dirname, 'dist/client'), { index: false }));
  }

  // Handle all routes for SSR - use a catch-all middleware instead
  app.use(async (req, res, next) => {
    // Skip API routes or static assets
    if (req.originalUrl.startsWith('/api') || 
        req.originalUrl.includes('.') ||
        req.originalUrl.startsWith('/assets')) {
      return next();
    }

    const url = req.originalUrl;

    try {
      let template;
      let render;

      if (!isProduction) {
        // Always read fresh template in dev
        template = fs.readFileSync(
          path.resolve(__dirname, 'index.html'),
          'utf-8'
        );
        template = await vite.transformIndexHtml(url, template);
        
        // Import the server entry
        const { render: serverRender } = await vite.ssrLoadModule('/src/entry-server.jsx');
        render = serverRender;
      } else {
        template = fs.readFileSync(
          path.resolve(__dirname, 'dist/client/index.html'),
          'utf-8'
        );
        const { render: serverRender } = await import('./dist/server/entry-server.js');
        render = serverRender;
      }

      const { html, helmet } = await render(url);

      const finalHtml = template
        .replace('<!--ssr-outlet-->', html)
        .replace(
          '<head>',
          `<head>
            ${helmet?.title?.toString() || ''}
            ${helmet?.meta?.toString() || ''}
            ${helmet?.link?.toString() || ''}
            ${helmet?.script?.toString() || ''}`
        );

      res.status(200).set({ 'Content-Type': 'text/html' }).end(finalHtml);
    } catch (e) {
      console.error('SSR Error:', e);
      if (!isProduction && vite) {
        vite.ssrFixStacktrace(e);
      }
      res.status(500).end('Internal Server Error');
    }
  });

  return app;
}

createServer().then(app => {
  const port = process.env.PORT || 5173;
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}).catch(err => {
  console.error('Error starting server:', err);
});