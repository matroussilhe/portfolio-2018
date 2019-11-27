import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import DropArrow from './DropArrow';

const SeeMoreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SeeMoreTitle = styled.h1`
  font-family: ${props => props.theme.typography.title.fontFamily};
  color: ${props => props.theme.color.primary};
  opacity: ${props => props.theme.opacity.dark};
  font-size: 18px;
`;

const SeeMoreSubtitle = styled.h2`
  font-family: ${props => props.theme.typography.subtitle.fontFamily};
  color: ${props => props.theme.color.primary};
  opacity: ${props => props.theme.opacity.grey};
  font-size: 12px;
  margin-bottom: 8px;
`;

function SeeMore({ className }) {
  return (
    <SeeMoreWrapper className={className}>
      <SeeMoreTitle>WORKS</SeeMoreTitle>
      <SeeMoreSubtitle>Portfolio</SeeMoreSubtitle>
      <DropArrow />
    </SeeMoreWrapper>
  );
}

SeeMore.propTypes = {
  className: PropTypes.string.isRequired,
};

export default SeeMore;
