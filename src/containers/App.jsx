import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { Flex, Box } from 'grid-styled';
import debounce from 'lodash.debounce';

import projects from '../api/project.json';
import caseStudies from '../api/case-study.json';

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
    solid: 1,
    high: 0.87,
    medium: 0.72,
    low: 0.60,
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
  // custom breakpoints
  breakpoint: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
  // grid-styled breakpoints (value and below)
  breakpoints: [
    600, // xs (<= 600)
    960, // sm (<= 960)
    1280, // md (<= 1280)
    1920, // lg (<= 1920)
  ],
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      breakpoints: {
        xsAndUp: false,
        smAndUp: false,
        mdAndUp: false,
        lgAndUp: false,
        xlAndUp: false,
      },
      showAbout: false,
      showCaseStudy: false,
      caseStudy: undefined,
    };

    this.handleResize = this.handleResize.bind(this);
    this.debouncedHandleResize = debounce(this.handleResize, 300);
    this.handleShowAboutChange = this.handleShowAboutChange.bind(this);
    this.handleShowCaseStudyChange = this.handleShowCaseStudyChange.bind(this);
    this.handleShowAboutAndCaseStudyChange = this.handleShowAboutAndCaseStudyChange.bind(this);
    this.handleProjectChange = this.handleProjectChange.bind(this);
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.debouncedHandleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.debouncedHandleResize);
  }

  handleResize() {
    const width = window.innerWidth;
    const breakpoints = {
      xsAndUp: width >= theme.breakpoint.xs,
      smAndUp: width >= theme.breakpoint.sm,
      mdAndUp: width >= theme.breakpoint.md,
      lgAndUp: width >= theme.breakpoint.lg,
      xlAndUp: width >= theme.breakpoint.xl,
    };

    this.setState({
      breakpoints,
    });
  }

  handleShowAboutChange(value) {
    this.setState({
      showAbout: value,
    });
  }

  handleShowCaseStudyChange(value) {
    this.setState({
      showCaseStudy: value,
    });
  }

  handleShowAboutAndCaseStudyChange(value) {
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

  handleProjectChange(projectId) {
    const foundProject = projects.find(project => project.id === projectId);

    const { caseStudyId } = foundProject || {};
    if (caseStudyId) {
      const foundCaseStudy = caseStudies.find(caseStudy => caseStudy.id === caseStudyId);

      this.setState({
        caseStudy: foundCaseStudy,
      });
    }
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Flex>
          <Box width={1}>
            <Intro />
            <Work onShowChange={this.handleShowCaseStudyChange} onProjectChange={this.handleProjectChange} />
            <AboutLink onShowChange={this.handleShowAboutChange} />
          </Box>
          <About show={this.state.showAbout} onShowChange={this.handleShowAboutChange} breakpoints={this.state.breakpoints} />
          <CaseStudy show={this.state.showCaseStudy} onShowChange={this.handleShowCaseStudyChange} breakpoints={this.state.breakpoints} caseStudy={this.state.caseStudy} />
          <LeftMenu show={this.state.showAbout || this.state.showCaseStudy} onShowChange={this.handleShowAboutAndCaseStudyChange} />
          <RightMenu contrast={this.state.showAbout || this.state.showCaseStudy} />
          <Background breakpoints={this.state.breakpoints} />
        </Flex>
      </ThemeProvider>
    );
  }
}

export default App;
