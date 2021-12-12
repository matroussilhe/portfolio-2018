import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import throttle from 'lodash.throttle';

import FrontPanel from './FrontPanel';
import BackPanel from './BackPanel';

const ProjectFlex = styled(Flex)`
  min-height: 100vh;
  height: 100vh;
`;

const WrapperBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Current pannel, can be front or back
      pannel: 'front',
      // Pannel to transition to
      nextPannel: 'front',
    };

    this.handleOnLeaved = this.handleOnLeaved.bind(this);
    this.handleClick = this.handleClick.bind(this);
    // animation takes 900ms (500 leave + 400 delay + 500 enter)
    // throttle click so it can only fires once animation is done
    this.throttledHandleClick = throttle(this.handleClick, 1500);
  }

  handleClick() {
    if (this.props.project.caseStudyId) {
      // show case study
      this.props.onShowChange(true);
      this.props.onProjectChange(this.props.project.id);
    } else {
      // Set panel type to transition to
      this.setState({
        nextPannel: this.state.pannel === 'front' ? 'back' : 'front',
      });
    }
  }

  handleOnLeaved() {
    // Change current panel type on leave animation end
    this.setState({
      pannel: this.state.nextPannel,
    });
  }

  renderPanel() {
    if (this.state.pannel === 'front') {
      return <FrontPanel show={this.state.nextPannel === 'front'} onClick={this.throttledHandleClick} onLeaved={this.handleOnLeaved} title={this.props.project.title} image={this.props.project.image} />;
    } else if (this.state.pannel === 'back') {
      return <BackPanel show={this.state.nextPannel === 'back'} onClick={this.throttledHandleClick} onLeaved={this.handleOnLeaved} project={this.props.project} />;
    }
    return '';
  }

  render() {
    return (
      <ProjectFlex>
        <WrapperBox ml={[0, 0, '25%', '25%']} pl={[0, 0, '1px', '1px']} width={[1, 1, 1/2, 1/2]}>
          {this.renderPanel()}
        </WrapperBox>
      </ProjectFlex>
    );
  }
}

Project.propTypes = {
  onShowChange: PropTypes.func.isRequired,
  onProjectChange: PropTypes.func.isRequired,
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    caseStudyId: PropTypes.number,
    title: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tech: PropTypes.string.isRequired,
    image: PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }),
    link: PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Project;
