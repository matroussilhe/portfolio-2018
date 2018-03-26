import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Animate from 'react-move/Animate';
import { easePolyInOut } from 'd3-ease';
import { Box } from 'grid-styled';

const WrapperBox = styled(Box)`
  overflow: hidden
`;

const AppearingContent = styled.div`
  position: relative;
`;

function AppearBox(props) {
  return (
    <Animate
      // Weither to render or not (trigger enter/leave)
      show={props.show}
      // Starting state
      start={{
        top: 50,
        opacity: 0,
      }}
      // How to transform state on enter
      enter={{
        top: [0],
        opacity: [1],
        timing: {
          delay: props.delay,
          duration: 500,
          ease: easePolyInOut,
        },
      }}
      // How to handle interrupted enter and leave transitions.
      update={{
        top: 0,
        opacity: 1,
      }}
      // How to transform node state on leave
      leave={{
        top: [50],
        opacity: [0],
        timing: {
          duration: 500,
          ease: easePolyInOut,
        },
        events: props.onLeaved ? { end: props.onLeaved } : {}, // Event fired on transition end
      }}
    >
      {(state) => {
        return (
          <WrapperBox
            width={props.width}
            pt={props.pt}
            pb={props.pb}
            pl={props.pl}
            pr={props.pr}
          >
            <AppearingContent
              style={{
                top: `${state.top}px`,
                opacity: state.opacity,
              }}
            >
              {props.children}
            </AppearingContent>
          </WrapperBox>
        );
      }}
    </Animate>
  );
}

AppearBox.defaultProps = {
  width: null,
  pt: '0',
  pb: '0',
  pl: '0',
  pr: '0',
  delay: 0,
  onLeaved: null,
};

AppearBox.propTypes = {
  width: PropTypes.number,
  pt: PropTypes.string,
  pb: PropTypes.string,
  pl: PropTypes.string,
  pr: PropTypes.string,
  delay: PropTypes.number,
  show: PropTypes.bool.isRequired,
  onLeaved: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default AppearBox;
