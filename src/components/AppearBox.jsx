import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Animate from 'react-move/Animate';
import { easePolyInOut } from 'd3-ease';
import { Box } from 'grid-styled';

const WrapperBox = styled(Box)`
  overflow: hidden;
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
      {state => (
        <WrapperBox
          width={props.width}
          ml={props.ml}
          mt={props.mt}
          mr={props.mr}
          mb={props.mb}
          pl={props.pl}
          pt={props.pt}
          pr={props.pr}
          pb={props.pb}
          flex={props.flex}
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
        )}
    </Animate>
  );
}

AppearBox.defaultProps = {
  width: '1/8',
  ml: 0,
  mt: 0,
  mr: 0,
  mb: 0,
  pl: 0,
  pt: 0,
  pr: 0,
  pb: 0,
  flex: '',
  delay: 0,
  onLeaved: null,
};

AppearBox.propTypes = {
  width: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.number]),
  ml: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.number]),
  mt: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.number]),
  mr: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.number]),
  mb: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.number]),
  pl: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.number]),
  pt: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.number]),
  pr: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.number]),
  pb: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.number]),
  flex: PropTypes.string,
  delay: PropTypes.number,
  show: PropTypes.bool.isRequired,
  onLeaved: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default AppearBox;
