// TODO: remove eslint disable
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Intro from '../components/Intro';
import Work from '../components/Work';
import About from '../components/About';
import Menu from '../components/Menu';

class App extends Component {
  render() {
    return (
      <Grid fluid>
        <Row>
          <Col smOffset={4} xs={12} lg={4}>
            <Intro />
            <Work />
            <About />
          </Col>
        </Row>
        <Menu />
      </Grid>
    );
  }
}

export default App;
