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
  return (
    <AboutBackgroundFlex>
      <AboutBackgroundBox show={props.show} />
      <AboutBackgroundBox show={props.show} />
      <AboutBackgroundBox show={props.show} />
      <AboutBackgroundBox show={props.show} />
      <AboutBackgroundBox show={props.show} />
      <AboutBackgroundBox show={props.show} />
      <AboutBackgroundBox show={props.show} />
      {/* AboutBackground's animation considered ended when this box's animation end */}
      <AboutBackgroundBox show={props.show} onLeaved={props.onLeaved} />
    </AboutBackgroundFlex>
  );
}

AboutBackground.propTypes = {
  show: PropTypes.bool.isRequired,
  onLeaved: PropTypes.func.isRequired,
};

export default AboutBackground;
