import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Grid, Row, Col } from '../components/overrides/Grid';

import Intro from '../components/Intro';
import Work from '../components/Work';
import About from '../components/About';
import Menu from '../components/Menu';
import Background from '../components/Background';

const theme = {
  color: {
    primary: '#000000',
    secondary: 'palevioletred',
  },
  opacity: {
    dark: 0.8,
    grey: 0.44,
    light: 0.06,
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid fluid>
        <Background />
        <Row>
          <Col xs={12}>
            <Intro />
            <Work />
            <About />
          </Col>
        </Row>
        <Menu />
      </Grid>
    </ThemeProvider>
  );
}

export default App;
