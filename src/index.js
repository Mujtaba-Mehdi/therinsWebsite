import React from 'react';
import ReactDOM from 'react-dom';
import { layoutGenerator } from 'react-break';

//import different routers for different pages
import PagesDesktop from './pages/desktop';

//determine screen size for app
const layout = layoutGenerator({
  mobile: 0,
  tablet: 481,
  desktop: 769,
});

const OnMobile = layout.is('mobile');
const OnTablet = layout.is('tablet');
const OnDesktop = layout.is('desktop');

ReactDOM.render(
  <React.StrictMode>
    <OnMobile>
      Displayed on Mobile
    </OnMobile>

    <OnTablet>
      Displayed on Tablet
    </OnTablet>

    <OnDesktop>
      <PagesDesktop />
    </OnDesktop>
    
  </React.StrictMode>,
  document.getElementById('root')
);

