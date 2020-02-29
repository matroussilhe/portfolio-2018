import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';

const BackgroundFlex = styled(Flex)`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: #f1f1f1;
`;

const BackgroundBox = styled(Box)`
  box-shadow: -1px 0 0 #dedede;
`;

function Background(props) {
  if (props.breakpoints.mdAndUp) {
    return (
      <BackgroundFlex>
        <BackgroundBox width={1/8} />
        <BackgroundBox width={1/8} />
        <BackgroundBox width={1/8} />
        <BackgroundBox width={1/8} />
        <BackgroundBox width={1/8} />
        <BackgroundBox width={1/8} />
        <BackgroundBox width={1/8} />
        <BackgroundBox width={1/8} />
      </BackgroundFlex>
    );
  }
  return (
    <BackgroundFlex>
      <BackgroundBox width={1/4} />
      <BackgroundBox width={1/4} />
      <BackgroundBox width={1/4} />
      <BackgroundBox width={1/4} />
    </BackgroundFlex>
  );
}

Background.propTypes = {
  breakpoints: PropTypes.shape({
    xsAndUp: PropTypes.bool.isRequired,
    smAndUp: PropTypes.bool.isRequired,
    mdAndUp: PropTypes.bool.isRequired,
    lgAndUp: PropTypes.bool.isRequired,
    xlAndUp: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Background;
