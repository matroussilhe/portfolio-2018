import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Row } from '../../utils/Grid';
import AboutBackgroundCol from './AboutBackgroundCol';

const AboutBackgroundRow = styled(Row)`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

function AboutBackground(props) {
  return (
    <AboutBackgroundRow xs={12}>
      <AboutBackgroundCol show={props.show} />
      <AboutBackgroundCol show={props.show} />
      <AboutBackgroundCol show={props.show} />
      <AboutBackgroundCol show={props.show} />
      <AboutBackgroundCol show={props.show} />
      <AboutBackgroundCol show={props.show} />
    </AboutBackgroundRow>
  );
}

AboutBackground.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default AboutBackground;
