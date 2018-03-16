import React from 'react';

import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 22px;
  font-family: 'Montserrat Light';
`;

const Subtitle = styled.h2`
  font-size: 18px;
  font-family: 'Montserrat Light';
`;

function Intro() {
  return (
    <Row center="xs">
      <Col xs={12}>
        <Title>Mathieu Roussilhe</Title>
        <Subtitle>Web developer</Subtitle>
      </Col>
    </Row>
  );
}

export default Intro;
