import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Animate from 'react-move/Animate';
import { easePolyInOut } from 'd3-ease';

import { Col } from '../utils/Grid';

const WrapperCol = styled(Col)`
  overflow: hidden;
  padding-right: 50px;
  flex: 1;
`;

const SlidingContent = styled.div`
  position: relative;
`;

function AnimatedCol(props) {
  return (
    <Animate
      // Weither to render or not (trigger enter/leave)
      show={props.show}
      // Starting state
      start={{
        left: -100,
      }}
      // How to transform state on enter
      enter={{
        left: [0],
        timing: {
          delay: 800,
          duration: 800,
          ease: easePolyInOut,
        },
      }}
      // How to handle interrupted enter and leave transitions.
      update={{
        left: -100,
      }}
      // How to transform node state on leave
      leave={{
        left: [-100],
        timing: {
          duration: 800,
          ease: easePolyInOut,
        },
      }}
    >
      {(state) => {
        return (
          <WrapperCol
            xs={props.xs}
            xsOffset={props.xsOffset}
          >
            <SlidingContent
              style={{
                left: `${state.left}%`,
              }}
            >
              {props.children}
            </SlidingContent>
          </WrapperCol>
        );
      }}
    </Animate>
  );
}

AnimatedCol.defaultProps = {
  xs: 2,
  xsOffset: 0,
};

AnimatedCol.propTypes = {
  xs: PropTypes.number,
  xsOffset: PropTypes.number,
  show: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default AnimatedCol;
