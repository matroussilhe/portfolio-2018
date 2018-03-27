import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';

import MainPanel from './MainPanel';
import DescriptionPanel from './DescriptionPanel';

const ProjectFlex = styled(Flex)`
  margin-bottom: 300px;
  padding-left: 1px;
`;

const WrapperBox = styled(Box)`
  cursor: pointer;
`;

class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Current pannel, can be main or description
      pannel: 'main',
      // Pannel to transition to
      nextPannel: 'main',
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleOnLeaved = this.handleOnLeaved.bind(this);
  }

  handleClick() {
    // Set panel type to transition to
    this.setState({
      nextPannel: this.state.pannel === 'main' ? 'description' : 'main',
    });
  }

  handleOnLeaved() {
    // Change current panel type on leave animation end
    this.setState({
      pannel: this.state.nextPannel,
    });
  }

  renderPanel() {
    if (this.state.pannel === 'main') {
      return <MainPanel show={this.state.nextPannel === 'main'} onLeaved={this.handleOnLeaved} title={this.props.project.title} image={this.props.project.image} />;
    } else if (this.state.pannel === 'description') {
      return <DescriptionPanel show={this.state.nextPannel === 'description'} onLeaved={this.handleOnLeaved} project={this.props.project} />;
    }
    return '';
  }

  render() {
    return (
      <ProjectFlex>
        <WrapperBox ml={[0, 0, 0, '25%']} width={[1, 1, 1, 1/2]} onClick={this.handleClick}>
          {this.renderPanel()}
        </WrapperBox>
      </ProjectFlex>
    );
  }
}

Project.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
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
