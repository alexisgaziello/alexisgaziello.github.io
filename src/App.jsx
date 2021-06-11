import React, { useRef, useEffect } from 'react';
import { useLocation, Switch, Route } from 'react-router-dom';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';

// Views 
import HomepageLayout from './components/HomepageLayout.jsx';

// Initialize Google Analytics
ReactGA.initialize(process.env.GOOGLE_ANALYTICS_TRACKING_ID);
const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {


  return (
    <HomepageLayout/>
  );
}

export default App;