import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { Grid, Row, Col } from '../utils/Grid';

import Intro from '../components/Intro/Intro';
import Work from '../components/Work/Work';
import About from '../components/About/About';
import AboutMenu from '../components/About/AboutMenu';
import Menu from '../components/Menu';
import Background from '../components/Background';

const theme = {
  color: {
    primary: '#000000',
    secondary: 'palevioletred',
    contrast: '#ffffff',
  },
  opacity: {
    dark: 0.8,
    grey: 0.44,
    light: 0.05,
  },
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showAbout: false,
    };

    this.handleShowAboutChange = this.handleShowAboutChange.bind(this);
  }

  handleShowAboutChange(showAbout) {
    this.setState({
      showAbout,
    });
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Grid fluid>
          <Background contrast={this.state.showAbout} />
          <Row>
            <Col xs={12}>
              <Intro />
              <Work />
            </Col>
          </Row>
          <About show={this.state.showAbout} />
          <AboutMenu
            showAbout={this.state.showAbout}
            onShowAboutChange={this.handleShowAboutChange}
          />
          <Menu />
        </Grid>
      </ThemeProvider>
    );
  }
}

export default App;
