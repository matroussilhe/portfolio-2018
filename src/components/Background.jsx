import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';

const BackgroundFlex = styled(Flex)`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: #f1f1f1;
`;

const BackgroundBox = styled(Box)`
  border-width: 1px;
  border-left-style: solid;
  border-color: ${props => props.theme.color.primary};
  opacity: ${props => props.theme.opacity.light};
`;

function Background() {
  return (
    <BackgroundFlex>
      <BackgroundBox width={1/8} />
      <BackgroundBox width={1/8} />
      <BackgroundBox width={1/8} />
      <BackgroundBox width={1/8} />
      <BackgroundBox width={1/8} />
      <BackgroundBox width={1/8} />
      <BackgroundBox width={1/8} />
      <BackgroundBox width={1/8} />
    </BackgroundFlex>
  );
}

export default Background;
