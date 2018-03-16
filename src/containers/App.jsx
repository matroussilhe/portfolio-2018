import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Intro from '../components/Intro';
import Work from '../components/Work';
import About from '../components/About';
import Menu from '../components/Menu';

function App() {
  return (
    <Grid fluid>
      <Row>
        <Col smOffset={3} xs={12} lg={6}>
          <Intro />
          <Work />
          <About />
        </Col>
      </Row>
      <Menu />
    </Grid>
  );
}

export default App;
