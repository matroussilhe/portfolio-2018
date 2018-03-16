import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col } from './overrides/Grid';

import data from '../api/projects.json';
import Project from '../components/Project';

const WorkWrapper = styled(Row)`
  margin-bottom: 20px;
`;

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
      <WorkWrapper>
        <Col xs={12}>
          {this.renderProjects()}
        </Col>
      </WorkWrapper>
    );
  }
}

export default Work;
