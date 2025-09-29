import { createBrowserRouter, createMemoryRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      }
    ]
  }
];

export const createRouter = (initialEntries) => {
  if (typeof window === 'undefined') {
    return createMemoryRouter(routes, { initialEntries });
  }
  return createBrowserRouter(routes);
};