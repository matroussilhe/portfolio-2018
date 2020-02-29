import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';

import SeeMore from './SeeMore';

const IntroFlex = styled(Flex)`
  min-height: 100vh;
  height: 100vh;
`;

const IntroBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-family: ${props => props.theme.typography.title.fontFamily};
  color: ${props => props.theme.color.primary};
  opacity: ${props => props.theme.opacity.high};
  font-size: 82px;
  @media (max-width: ${props => props.theme.breakpoint.md}px) { {
    font-size: 2.2rem;
  }
`;

const Subtitle = styled.h2`
  font-family: ${props => props.theme.typography.subtitle.fontFamily};
  color: ${props => props.theme.color.primary};
  opacity: ${props => props.theme.opacity.low};
  font-size: 32px;
  margin-top: 4px;
  @media (max-width: ${props => props.theme.breakpoint.md}px) { {
    font-size: 1.2rem;
  }
`;

const IntroSeeMore = styled(SeeMore)`
  position: absolute;
  bottom: 22px;
`;

function Intro() {
  return (
    <IntroFlex>
      <IntroBox width={1}>
        <Title>Mathieu Roussilhe</Title>
        <Subtitle>Web developer</Subtitle>
        <IntroSeeMore />
      </IntroBox>
    </IntroFlex>
  );
}

export default Intro;
