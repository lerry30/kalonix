import { createBrowserRouter, createMemoryRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';

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
      },
      {
        path: 'privacy-policy',
        element: <PrivacyPolicy />
      },
      {
        path: 'terms-and-conditions',
        element: <TermsAndConditions />
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