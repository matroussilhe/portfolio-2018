import React from 'react';
import styled from 'styled-components';
import { Row, Col } from './overrides/Grid';

const IntroWrapper = styled(Row)`
  margin-top: 40px;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 28px;
  font-family: 'Montserrat Bold';
  color: ${props => props.theme.color.primary};
  opacity: ${props => props.theme.opacity.dark};
`;

const Subtitle = styled.h2`
  font-size: 22px;
  font-family: 'Montserrat SemiBold';
  color: ${props => props.theme.color.primary};
  opacity: ${props => props.theme.opacity.grey};
`;

function Intro() {
  return (
    <IntroWrapper center="xs">
      <Col xs={12}>
        <Title>Mathieu Roussilhe</Title>
        <Subtitle>Web developer</Subtitle>
      </Col>
    </IntroWrapper>
  );
}

export default Intro;
