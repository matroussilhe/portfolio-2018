import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';

import ArrowDown from './ArrowDown';

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
  opacity: ${props => props.theme.opacity.dark};
  font-size: 82px;
`;

const Subtitle = styled.h2`
  font-family: ${props => props.theme.typography.subtitle.fontFamily};
  color: ${props => props.theme.color.primary};
  opacity: ${props => props.theme.opacity.grey};
  font-size: 32px;
  margin-top: 4px;
`;

const Works = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 22px;
`;

const WorksTitle = styled.h1`
  font-family: ${props => props.theme.typography.title.fontFamily};
  color: ${props => props.theme.color.primary};
  opacity: ${props => props.theme.opacity.dark};
  font-size: 18px;
`;

const WorksSubtitle = styled.h2`
  font-family: ${props => props.theme.typography.subtitle.fontFamily};
  color: ${props => props.theme.color.primary};
  opacity: ${props => props.theme.opacity.grey};
  font-size: 12px;
  margin-bottom: 6px;
`;

function Intro() {
  return (
    <IntroFlex>
      <IntroBox width={1}>
        <Title>Mathieu Roussilhe</Title>
        <Subtitle>Web developer</Subtitle>
        <Works>
          <WorksTitle>WORKS</WorksTitle>
          <WorksSubtitle>Portfolio</WorksSubtitle>
          <ArrowDown />
        </Works>
      </IntroBox>
    </IntroFlex>
  );
}

export default Intro;
