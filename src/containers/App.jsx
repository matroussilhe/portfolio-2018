import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { Flex, Box } from 'grid-styled';

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
        <Flex>
          <Box width={1}>
            <Intro />
            <Work />
          </Box>
          <About show={this.state.showAbout} />
          <AboutMenu
            showAbout={this.state.showAbout}
            onShowAboutChange={this.handleShowAboutChange}
          />
          <Menu />
          <Background contrast={this.state.showAbout} />
        </Flex>
      </ThemeProvider>
    );
  }
}

export default App;
