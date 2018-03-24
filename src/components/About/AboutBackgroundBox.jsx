import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Animate from 'react-move/Animate';
import { easePolyInOut } from 'd3-ease';
import { Box } from 'grid-styled';

const BackgroundBox = styled(Box)`
  border-width: 1px;
  border-left-style: solid;
  border-color: rgba(255, 255, 255, 0.2);
  background-color: rgba(0, 0, 0, 0.9);
  transform-origin: left;
`;

function AboutBackgroundBox(props) {
  return (
    <Animate
      // Weither to render or not (trigger enter/leave)
      show={props.show}
      // Starting state
      start={{
        scaleX: 0,
      }}
      // How to transform state on enter
      enter={{
        scaleX: [1],
        timing: {
          duration: 800,
          ease: easePolyInOut,
        },
      }}
      // How to handle interrupted enter and leave transitions.
      update={{
        scaleX: 0,
      }}
      // How to transform node state on leave
      leave={{
        scaleX: [0],
        timing: {
          delay: 800,
          duration: 800,
          ease: easePolyInOut,
        },
        events: { end: props.onLeaved }, // Event fired on transition end
      }}
    >
      {(state) => {
        return (
          <BackgroundBox
            width={1/8}
            style={{
              transform: `scaleX(${state.scaleX})`,
            }}
          />
        );
      }}
    </Animate>
  );
}

AboutBackgroundBox.propTypes = {
  show: PropTypes.bool.isRequired,
  onLeaved: PropTypes.func.isRequired,
};

export default AboutBackgroundBox;
