import React, { Component } from 'react';
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
      <Project key={project.id} project={project} />
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

export default Work;
