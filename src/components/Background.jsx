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
  border-width: 1px;
  border-left-style: solid;
  border-color: #dbdbdb;
`;

function Background(props) {
  if (props.breakpoint.mdAndUp) {
    return (
      <BackgroundFlex>
        <BackgroundBox width={1 / 8} />
        <BackgroundBox width={1 / 8} />
        <BackgroundBox width={1 / 8} />
        <BackgroundBox width={1 / 8} />
        <BackgroundBox width={1 / 8} />
        <BackgroundBox width={1 / 8} />
        <BackgroundBox width={1 / 8} />
        <BackgroundBox width={1 / 8} />
      </BackgroundFlex>
    );
  }
  return (
    <BackgroundFlex>
      <BackgroundBox width={1 / 4} />
      <BackgroundBox width={1 / 4} />
      <BackgroundBox width={1 / 4} />
      <BackgroundBox width={1 / 4} />
    </BackgroundFlex>
  );
}

Background.propTypes = {
  breakpoint: PropTypes.shape({
    xsAndUp: PropTypes.bool.isRequired,
    smAndUp: PropTypes.bool.isRequired,
    mdAndUp: PropTypes.bool.isRequired,
    lgAndUp: PropTypes.bool.isRequired,
    xlAndUp: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Background;
