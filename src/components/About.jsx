import React from 'react';
import styled from 'styled-components';
import { Row, Col } from './overrides/Grid';

const AboutWrapper = styled(Row)`
  margin-bottom: 80px;
`;

const Heading = styled.h3`
  font-size: 28px;
  font-family: 'Montserrat Light';
  color: ${props => props.theme.color.primary};
  opacity: ${props => props.theme.opacity.dark};
`;

const Body = styled.p`
  font-size: 22px;
  font-family: 'Open Sans Regular';
  color: ${props => props.theme.color.primary};
  opacity: ${props => props.theme.opacity.grey};
`;

function About() {
  return (
    <AboutWrapper center="xs">
      <Col xs={12}>
        <Heading>Contact me!</Heading>
        <Body>I am nice~</Body>
      </Col>
    </AboutWrapper>
  );
}

export default About;
