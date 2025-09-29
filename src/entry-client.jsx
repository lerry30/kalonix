import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { createRouter } from './router';
import './index.css';

// Dynamic import for client-side
async function startApp() {
  const { HelmetProvider } = await import('react-helmet-async');
  const router = createRouter();

  ReactDOM.hydrateRoot(
    document.getElementById('root'),
    <React.StrictMode>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </React.StrictMode>
  );
}

startApp();