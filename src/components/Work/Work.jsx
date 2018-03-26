import React, { Component } from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';

import data from '../../api/projects.json';
import Project from './Project';

const WorkFlex = styled(Flex)`
  margin-top: 250px;
`;

class Work extends Component {
  constructor(props) {
    super(props);

    this.data = data;
  }

  renderProjects() {
    return this.data.projects.map((project, idx) => (
      <Project key={project.id} project={project} />
    ));
  }

  render() {
    return (
      <WorkFlex>
        <Box width={1}>
          {this.renderProjects()}
        </Box>
      </WorkFlex>
    );
  }
}

export default Work;
