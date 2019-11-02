import React from 'react';
import styled from 'styled-components';

const ArrowTrail = styled.div`
  transform: matrix(1, 0, 0, 1, 0, 0);
  height: 34px;
  width: 1px;
  background-color: ${props => props.theme.color.primary};
  opacity: ${props => props.theme.opacity.grey};
`;

const LeftArrowCap = styled.div`
  transform: rotate(45deg);
`;

const RightArrowCap = styled.div`
  transform: rotate(-45deg);
`;

const ArrowCap = styled.div`
  transform: matrix(1, 0, 0, 1, 0, 0);
  position: absolute;
  bottom: 0;
  width: 1px;
  height: 8px;
  background-color: ${props => props.theme.color.primary};
  opacity: ${props => props.theme.opacity.grey};
`;

function ArrowDown() {
  return (
    <div>
      <ArrowTrail />
      <LeftArrowCap>
        <ArrowCap />
      </LeftArrowCap>
      <RightArrowCap>
        <ArrowCap />
      </RightArrowCap>
    </div>
  );
}

export default ArrowDown;
