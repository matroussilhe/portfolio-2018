import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex } from 'grid-styled';

import SlideBackgroundBox from './SlideBackgroundBox';

const SlideBackgroundFlex = styled(Flex)`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

function SlideBackground(props) {
  if (props.breakpoints.mdAndUp) {
    return (
      <SlideBackgroundFlex>
        <SlideBackgroundBox show={props.show} width={1 / 8} />
        <SlideBackgroundBox show={props.show} width={1 / 8} />
        <SlideBackgroundBox show={props.show} width={1 / 8} />
        <SlideBackgroundBox show={props.show} width={1 / 8} />
        <SlideBackgroundBox show={props.show} width={1 / 8} />
        <SlideBackgroundBox show={props.show} width={1 / 8} />
        <SlideBackgroundBox show={props.show} width={1 / 8} />
        {/* SlideBackground's animation considered ended when this box's animation end */}
        <SlideBackgroundBox show={props.show} width={1 / 8} onLeaved={props.onLeaved} />
      </SlideBackgroundFlex>
    );
  }
  return (
    <SlideBackgroundFlex>
      <SlideBackgroundBox show={props.show} width={1 / 4} />
      <SlideBackgroundBox show={props.show} width={1 / 4} />
      <SlideBackgroundBox show={props.show} width={1 / 4} />
      {/* SlideBackground's animation considered ended when this box's animation end */}
      <SlideBackgroundBox show={props.show} width={1 / 4} onLeaved={props.onLeaved} />
    </SlideBackgroundFlex>
  );
}

SlideBackground.propTypes = {
  show: PropTypes.bool.isRequired,
  onLeaved: PropTypes.func.isRequired,
  breakpoints: PropTypes.shape({
    xsAndUp: PropTypes.bool.isRequired,
    smAndUp: PropTypes.bool.isRequired,
    mdAndUp: PropTypes.bool.isRequired,
    lgAndUp: PropTypes.bool.isRequired,
    xlAndUp: PropTypes.bool.isRequired,
  }).isRequired,
};

export default SlideBackground;
