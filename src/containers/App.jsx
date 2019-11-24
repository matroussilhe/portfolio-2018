import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { Flex, Box } from 'grid-styled';

import Intro from '../components/Intro/Intro';
import Work from '../components/Work/Work';
import About from '../components/About/About';
import AboutMenu from '../components/About/AboutMenu';
import Menu from '../components/Menu';
import Background from '../components/Background';
import AboutLink from '../components/About/AboutLink';

const theme = {
  color: {
    primary: '#000000',
    secondary: '#f7b731',
    contrast: '#ffffff',
  },
  opacity: {
    dark: 0.8,
    grey: 0.44,
    light: 0.05,
  },
  typography: {
    title: {
      fontFamily: 'Neuzeit Bold',
    },
    subtitle: {
      fontFamily: 'Playfair Display Italic',
    },
    heading: {
      fontFamily: 'Neuzeit Bold',
    },
    body: {
      fontFamily: 'Neuzeit Regular',
    },
  },
  breakpoint: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      breakpoint: {
        xsAndUp: false,
        smAndUp: false,
        mdAndUp: false,
        lgAndUp: false,
        xlAndUp: false,
      },
      showAbout: false,
    };

    this.handleResize = this.handleResize.bind(this);
    this.handleShowAboutChange = this.handleShowAboutChange.bind(this);
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    const width = window.innerWidth;
    const breakpoint = {
      xsAndUp: width >= theme.breakpoint.xs,
      smAndUp: width >= theme.breakpoint.md,
      mdAndUp: width >= theme.breakpoint.md,
      lgAndUp: width >= theme.breakpoint.lg,
      xlAndUp: width >= theme.breakpoint.xl,
    };

    this.setState({
      breakpoint,
    });
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
            <AboutLink onShowAboutChange={this.handleShowAboutChange} />
          </Box>
          <About show={this.state.showAbout} breakpoint={this.state.breakpoint} />
          <AboutMenu showAbout={this.state.showAbout} onShowAboutChange={this.handleShowAboutChange} />
          <Menu contrast={this.state.showAbout} />
          <Background breakpoint={this.state.breakpoint} />
        </Flex>
      </ThemeProvider>
    );
  }
}

export default App;
