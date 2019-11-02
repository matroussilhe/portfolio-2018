import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex } from 'grid-styled';

import AboutBackgroundBox from './AboutBackgroundBox';

const AboutBackgroundFlex = styled(Flex)`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

function AboutBackground(props) {
  if (props.breakpoint.mdAndUp) {
    return (
      <AboutBackgroundFlex>
        <AboutBackgroundBox show={props.show} width={1 / 8} />
        <AboutBackgroundBox show={props.show} width={1 / 8} />
        <AboutBackgroundBox show={props.show} width={1 / 8} />
        <AboutBackgroundBox show={props.show} width={1 / 8} />
        <AboutBackgroundBox show={props.show} width={1 / 8} />
        <AboutBackgroundBox show={props.show} width={1 / 8} />
        <AboutBackgroundBox show={props.show} width={1 / 8} />
        {/* AboutBackground's animation considered ended when this box's animation end */}
        <AboutBackgroundBox show={props.show} width={1 / 8} onLeaved={props.onLeaved} />
      </AboutBackgroundFlex>
    );
  }
  return (
    <AboutBackgroundFlex>
      <AboutBackgroundBox show={props.show} width={1 / 4} />
      <AboutBackgroundBox show={props.show} width={1 / 4} />
      <AboutBackgroundBox show={props.show} width={1 / 4} />
      {/* AboutBackground's animation considered ended when this box's animation end */}
      <AboutBackgroundBox show={props.show} width={1 / 4} onLeaved={props.onLeaved} />
    </AboutBackgroundFlex>
  );
}

AboutBackground.propTypes = {
  show: PropTypes.bool.isRequired,
  onLeaved: PropTypes.func.isRequired,
  breakpoint: PropTypes.shape({
    xsAndUp: PropTypes.bool.isRequired,
    smAndUp: PropTypes.bool.isRequired,
    mdAndUp: PropTypes.bool.isRequired,
    lgAndUp: PropTypes.bool.isRequired,
    xlAndUp: PropTypes.bool.isRequired,
  }).isRequired,
};

export default AboutBackground;
