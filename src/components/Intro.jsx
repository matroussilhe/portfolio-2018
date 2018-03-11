// TODO: remove eslint disable
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 22px;
  font-family: 'Montserrat Light';
`;

const Subtitle = styled.h2`
  font-size: 18px;
  font-family: 'Montserrat Light';
`;

class Intro extends Component {
  render() {
    return (
      <div>
        <Title>Mathieu Roussilhe</Title>
        <Subtitle>Web developer</Subtitle>
      </div>
    );
  }
}

export default Intro;
