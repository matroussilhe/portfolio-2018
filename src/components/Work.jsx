// TODO: remove eslint disable
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import Project from '../components/Project';

class Work extends Component {
  render() {
    return (
      <div>
        <Project />
        <Project />
        <Project />
      </div>
    );
  }
}

export default Work;
