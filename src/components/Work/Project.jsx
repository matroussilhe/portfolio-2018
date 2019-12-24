import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';

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

    this.handleClick = this.handleClick.bind(this);
    this.handleOnLeaved = this.handleOnLeaved.bind(this);
  }

  handleClick() {
    if (this.props.project.type === 'case-study') {
      // show case study
      this.props.onShowChange(true);
      this.props.onProjectIdChange(this.props.project.id);
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
      return <FrontPanel show={this.state.nextPannel === 'front'} onLeaved={this.handleOnLeaved} title={this.props.project.title} image={this.props.project.image} />;
    } else if (this.state.pannel === 'back') {
      return <BackPanel show={this.state.nextPannel === 'back'} onLeaved={this.handleOnLeaved} project={this.props.project} />;
    }
    return '';
  }

  render() {
    return (
      <ProjectFlex>
        <WrapperBox ml={[0, 0, 0, '25%']} pl={[0, 0, 0, '1px']} width={[1, 1, 1, 1/2]} onClick={this.handleClick}>
          {this.renderPanel()}
        </WrapperBox>
      </ProjectFlex>
    );
  }
}

Project.propTypes = {
  onShowChange: PropTypes.func.isRequired,
  onProjectIdChange: PropTypes.func.isRequired,
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
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
