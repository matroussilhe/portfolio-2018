import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';

import AppearBox from '../AppearBox';

const WrapperBox = styled(Box)`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  @media (max-width: ${props => props.theme.breakpoint.md}px) { {
    height: 100vw;
  }
`;

const ContentFlex = styled(Flex)`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  transition: all .3s;
  background-color: rgba(0, 0, 0, .4);
  ${WrapperBox}:hover & {
    transition: all .3s;
    background-color: rgba(0, 0, 0, 0);
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
  transition: all .3s;
  ${WrapperBox}:hover & {
    transition: all .3s;
    transform: scale(1.015, 1.015);
  }
  @media (max-width: ${props => props.theme.breakpoint.md}px) { {
    height: 100%;
    width: auto;
    margin-left: -50vw;
  }
`;

const Title = styled.h1`
  font-family: ${props => props.theme.typography.title.fontFamily};
  color: ${props => props.theme.color.contrast};
  font-size: 78px;
  transition: all .3s;
  ${WrapperBox}:hover & {
    transition: all .3s;
    opacity: 0;
  }
  @media (max-width: ${props => props.theme.breakpoint.md}px) { {
    font-size: 2.8rem;
  }
  @media (max-width: ${props => props.theme.breakpoint.xl}px) { {
    font-size: 3.4rem;
  }
`;

function FrontPanel(props) {
  return (
    <WrapperBox onClick={props.onClick}>
      <Image src={props.image.src} alt={props.image.alt} />
      <ContentFlex alignItems="center" justifyContent="center">
        <AppearBox show={props.show} onLeaved={props.onLeaved}>
          <Title>{props.title}</Title>
        </AppearBox>
      </ContentFlex>
    </WrapperBox>
  );
}

FrontPanel.propTypes = {
  show: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onLeaved: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
};

export default FrontPanel;
