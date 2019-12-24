import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { Flex, Box } from 'grid-styled';

import data from '../api/projects.json';

import Intro from '../components/Intro/Intro';
import Work from '../components/Work/Work';
import About from '../components/About/About';
import CaseStudy from '../components/Work/CaseStudy';
import LeftMenu from '../components/LeftMenu';
import RightMenu from '../components/RightMenu';
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

function getProjectById(id) {
  return data.projects.find(project => project.id === id);
}

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
      showCaseStudy: false,
      projectId: null,
    };

    this.handleResize = this.handleResize.bind(this);
    this.handleShowAboutChange = this.handleShowAboutChange.bind(this);
    this.handleShowCaseStudyChange = this.handleShowCaseStudyChange.bind(this);
    this.handleShowAboutAndCaseStudyChange = this.handleShowAboutAndCaseStudyChange.bind(this);
    this.handleProjectIdChange = this.handleProjectIdChange.bind(this);
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

  handleShowAboutChange(value) {
    this.setState({
      showAbout: value,
    });
  }

  handleShowCaseStudyChange(value) {
    console.log('handleShowCaseStudyChange: ', value);
    this.setState({
      showCaseStudy: value,
    });
  }

  handleShowAboutAndCaseStudyChange(value) {
    console.log('handleShowAboutAndCaseStudyChange: ', value);
    if (this.state.showCaseStudy === true) {
      this.setState({
        showCaseStudy: value,
      });
    } else {
      this.setState({
        showAbout: value,
      });
    }
  }

  handleProjectIdChange(value) {
    console.log('handleProjectIdChange: ', value);
    this.setState({
      projectId: value,
    });
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Flex>
          <Box width={1}>
            <Intro />
            <Work onShowChange={this.handleShowCaseStudyChange} onProjectIdChange={this.handleProjectIdChange} />
            <AboutLink onShowChange={this.handleShowAboutChange} />
          </Box>
          <About show={this.state.showAbout} onShowChange={this.handleShowAboutChange} breakpoint={this.state.breakpoint} />
          <CaseStudy show={this.state.showCaseStudy} onShowChange={this.handleShowCaseStudyChange} breakpoint={this.state.breakpoint} project={getProjectById(this.state.projectId)} />
          <LeftMenu show={this.state.showAbout || this.state.showCaseStudy} onShowChange={this.handleShowAboutAndCaseStudyChange} />
          <RightMenu contrast={this.state.showAbout || this.state.showCaseStudy} />
          <Background breakpoint={this.state.breakpoint} />
        </Flex>
      </ThemeProvider>
    );
  }
}

export default App;
