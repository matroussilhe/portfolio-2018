// TODO: remove eslint disable
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import Intro from '../components/Intro';
import Work from '../components/Work';
import About from '../components/About';
import Menu from '../components/Menu';

class App extends Component {
  render() {
    return (
      <div>
        <Intro />
        <Work />
        <About />
        <Menu />
      </div>
    );
  }
}

export default App;
