import React, { Fragment } from 'react';
import { Router } from '@reach/router';

//import pages
import About from './about';
import Portfolio from './portfolio';
import Blog from './blog';
import Contact from './contact';

export default function PagesDesktop() {
  return (
    <Router primary={false} component={Fragment}>
      <About path="/" />
      <Portfolio path="/portfolio" />
      <Blog path="/blog" />
      <Contact path="/contact" />
    </Router>
  );
}