import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';

import data from '../api/projects.json';
import Project from '../components/Project';

const RowWrapper = styled(Row)`
  margin-bottom: 60px;
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
      <RowWrapper>
        <Col xs={12}>
          {this.renderProjects()}
        </Col>
      </RowWrapper>
    );
  }
}

export default Work;
