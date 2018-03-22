import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col } from '../../utils/Grid';

import data from '../../api/projects.json';
import Project from './Project';

const WorkRow = styled(Row)`
  margin-bottom: 100px;
`;

class Work extends Component {
  constructor(props) {
    super(props);

    this.data = data;
  }

  renderProjects() {
    return this.data.projects.map((project, idx) => (
      <Project key={project.id} project={project} offset={(idx % 2 === 0) ? 2 : 4} />
    ));
  }

  render() {
    return (
      <WorkRow>
        <Col xs={12}>
          {this.renderProjects()}
        </Col>
      </WorkRow>
    );
  }
}

export default Work;
