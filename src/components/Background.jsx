import React from 'react';
import styled from 'styled-components';
import { Row, Col } from '../utils/Grid';

const BackgroundRow = styled(Row)`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const BackgroundCol = styled(Col)`
  border-width: 1px;
  border-left-style: solid;
  border-color: ${props => props.theme.color.primary};
  opacity: ${props => props.theme.opacity.light};
`;

function Background() {
  return (
    <BackgroundRow xs={12}>
      <BackgroundCol xs={2} />
      <BackgroundCol xs={2} />
      <BackgroundCol xs={2} />
      <BackgroundCol xs={2} />
      <BackgroundCol xs={2} />
      <BackgroundCol xs={2} />
    </BackgroundRow>
  );
}

export default Background;
