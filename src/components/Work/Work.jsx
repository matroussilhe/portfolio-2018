import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'grid-styled';

import projects from '../../api/project.json';
import Project from './Project';

class Work extends Component {
  renderProjects() {
    return projects.map(project => (
      <Project key={project.id} project={project} onShowChange={this.props.onShowChange} onProjectChange={this.props.onProjectChange} />
    ));
  }

  render() {
    return (
      <Flex>
        <Box width={1}>
          {this.renderProjects()}
        </Box>
      </Flex>
    );
  }
}

Work.propTypes = {
  onShowChange: PropTypes.func.isRequired,
  onProjectChange: PropTypes.func.isRequired,
};

export default Work;
