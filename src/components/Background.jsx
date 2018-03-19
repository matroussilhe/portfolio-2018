import React from 'react';
import styled from 'styled-components';
import { Row, Col } from './overrides/Grid';

const BackgroundWrapper = styled(Row)`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const BackgroundCol = styled(Col)`
  min-height: 100vh;
  height: 100vh;
  border-width: 1px;
  border-left-style: solid;
  border-color: ${props => props.theme.color.primary};
  opacity: ${props => props.theme.opacity.light};
`;

function Background() {
  return (
    <BackgroundWrapper xs={12}>
      <BackgroundCol xs={2} />
      <BackgroundCol xs={2} />
      <BackgroundCol xs={2} />
      <BackgroundCol xs={2} />
      <BackgroundCol xs={2} />
      <BackgroundCol xs={2} />
    </BackgroundWrapper>
  );
}

export default Background;
