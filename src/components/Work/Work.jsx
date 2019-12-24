import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'grid-styled';

import data from '../../api/projects.json';
import Project from './Project';

class Work extends Component {
  constructor(props) {
    super(props);

    this.data = data;
  }

  renderProjects() {
    return this.data.projects.map(project => (
      <Project key={project.id} project={project} onShowChange={this.props.onShowChange} onProjectIdChange={this.props.onProjectIdChange} />
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
  onProjectIdChange: PropTypes.func.isRequired,
};

export default Work;
