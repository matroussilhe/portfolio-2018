import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Animate from 'react-move/Animate';
import { easePolyInOut } from 'd3-ease';
import { Box } from 'grid-styled';

const WrapperBox = styled(Box)`
  overflow: hidden
`;

const SlidingContent = styled.div`
  position: relative;
`;

function SlideBox(props) {
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
          <WrapperBox
            width={props.width}
            ml={props.ml}
          >
            <SlidingContent
              style={{
                left: `${state.left}%`,
              }}
            >
              {props.children}
            </SlidingContent>
          </WrapperBox>
        );
      }}
    </Animate>
  );
}

SlideBox.defaultProps = {
  width: '1/8',
  ml: 0,
};

SlideBox.propTypes = {
  width: PropTypes.number,
  ml: PropTypes.string,
  show: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default SlideBox;
