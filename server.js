import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import compression from 'compression';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === 'production';
const isVercel = process.env.VERCEL === '1';

// Only import Vite in development
let createViteServer;
if (!isProduction) {
  const viteModule = await import('vite');
  createViteServer = viteModule.createServer;
}

// Suppress useLayoutEffect warning on server side
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
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom'
    });
    
    app.use(vite.middlewares);
  } else {
    const clientPath = path.resolve(__dirname, 'dist/client');
    
    app.use('/assets', express.static(path.join(clientPath, 'assets'), {
      maxAge: '1y',
      immutable: true
    }));
    app.use('/', express.static(clientPath, { index: false }));
  }
  
  app.use(async (req, res, next) => {
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
        template = fs.readFileSync(
          path.resolve(__dirname, 'index.html'),
          'utf-8'
        );
        template = await vite.transformIndexHtml(url, template);
        
        const { render: serverRender } = await vite.ssrLoadModule('/src/entry-server.jsx');
        render = serverRender;
      } else {
        const templatePath = path.resolve(__dirname, 'dist/client/index.html');
        template = fs.readFileSync(templatePath, 'utf-8');
        
        const serverPath = path.resolve(__dirname, 'dist/server/entry-server.js');
        const { render: serverRender } = await import(serverPath);
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

// Handle Vercel serverless vs regular Node server
let app;

if (isVercel) {
  // For Vercel serverless functions
  app = await createServer();
} else {
  // For regular Node.js server
  createServer().then(appInstance => {
    const port = process.env.PORT || 5173;
    appInstance.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  }).catch(err => {
    console.error('Error starting server:', err);
  });
}

// Export for Vercel (only used when isVercel is true)
export default app;