import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { RouterProvider } from 'react-router-dom';
import { createRouter } from './router';

export async function render(url) {
  // Import react-helmet-async dynamically
  const { HelmetProvider } = await import('react-helmet-async');
  
  const router = createRouter([url]);
  const helmetContext = {};
  
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <HelmetProvider context={helmetContext}>
        <RouterProvider router={router} />
      </HelmetProvider>
    </React.StrictMode>
  );
  
  const { helmet } = helmetContext;
  
  return { html, helmet };
}