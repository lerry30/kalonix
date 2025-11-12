import { createBrowserRouter, createMemoryRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import PrivacyContent from './pages/PrivacyContent';
import TermsAndConditions from './pages/TermsAndConditions';
import AffiliateDisclosure from './pages/AffiliateDisclosure';
import TopEarbuds from './pages/TopEarbuds';
import NotFoundPage from './pages/NotFoundPage';

import JBLVibeBuds from './pages/products/JBLVibeBuds';
import SoundcoreP30ibyAnker from './pages/products/SoundcoreP30ibyAnker';
import SonyWFC700NNoise from './pages/products/SonyWFC700NNoise';
import CMFBuds2a from './pages/products/CMFBuds2a';
import SonyWFC510 from './pages/products/SonyWFC510';
import BaseusBassBP1Pro from './pages/products/BaseusBassBP1Pro';
import QCYMeloBudsPro from './pages/products/QCYMeloBudsPro';
import TOZOOpenEarRingOpen from './pages/products/TOZOOpenEarRingOpen';
import TAGRY from './pages/products/TAGRY';
import OneMOREQ21 from './pages/products/OneMOREQ21';
import SoundPEATSAir5Lite from './pages/products/SoundPEATSAir5Lite';
import JLabGoAirPop from './pages/products/JLabGoAirPop';
import SkullcandyDime2 from './pages/products/SkullcandyDime2';
import SoundcoreA20i from './pages/products/SoundcoreA20i';
import TOZOT10 from './pages/products/TOZOT10';


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
        element: <PrivacyContent />
      },
      {
        path: 'terms-and-conditions',
        element: <TermsAndConditions />
      },
      {
        path: 'affiliate-disclosure',
        element: <AffiliateDisclosure />
      },
      {
        path: 'top-earbuds',
        element: <TopEarbuds />
      },
      {
        path: 'jbl-vibe-buds',
        element: <JBLVibeBuds/>
      },
      {
        path: 'soundcore-p30i-by-anker',
        element: <SoundcoreP30ibyAnker />
      },
      {
        path: 'sony-wf-c700n-noise',
        element: <SonyWFC700NNoise />
      },
      {
        path: 'cmf-buds-2a',
        element: <CMFBuds2a />
      },
      {
        path: 'sony-wf-c510',
        element: <SonyWFC510 />
      },
      {
        path: 'baseus-bass-bp1-pro',
        element: <BaseusBassBP1Pro />
      },
      {
        path: 'qcy-melobuds-pro',
        element: <QCYMeloBudsPro />
      },
      {
        path: 'tozo-openearring-open',
        element: <TOZOOpenEarRingOpen />
      },
      {
        path: 'tagry',
        element: <TAGRY />
      },
      {
        path: '1more-q21',
        element: <OneMOREQ21 />
      },
      {
        path: 'soundpeats-air5-lite',
        element: <SoundPEATSAir5Lite />
      },
      {
        path: 'jlab-go-air-pop',
        element: <JLabGoAirPop />
      },
      {
        path: 'skullcandy-dime-2',
        element: <SkullcandyDime2 />
      },
      {
        path: 'soundcore-a20i',
        element: <SoundcoreA20i />
      },
      {
        path: 'tozo-t10',
        element: <TOZOT10 />
      },
      {
        path: "/.well-known/*",
        element: null
      },
      {
        path: "*",
        element: <NotFoundPage />
      },
    ]
  }
];

export const createRouter = (initialEntries) => {
  if (typeof window === 'undefined') {
    return createMemoryRouter(routes, { initialEntries });
  }
  return createBrowserRouter(routes);
};
