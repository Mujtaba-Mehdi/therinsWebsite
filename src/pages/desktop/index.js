import React, { Fragment } from 'react';
import { Router } from '@reach/router';

//import pages
import About from './about'

export default function PagesDesktop() {
  return (
    <Router primary={false} component={Fragment}>
      <About path="/" />
    </Router>
  );
}