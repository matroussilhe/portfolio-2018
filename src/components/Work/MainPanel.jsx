import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';

import AppearBox from '../AppearBox';

const WrapperBox = styled(Box)`
  position: relative;
  overflow: hidden;
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
`;

function MainPanel(props) {
  return (
    <WrapperBox>
      <Image src={props.image.src} alt={props.image.alt} />
      <ContentFlex alignItems="center" justifyContent="center">
        <AppearBox show={props.show} onLeaved={props.onLeaved}>
          <Title>{props.title}</Title>
        </AppearBox>
      </ContentFlex>
    </WrapperBox>
  );
}

MainPanel.propTypes = {
  show: PropTypes.bool.isRequired,
  onLeaved: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
};

export default MainPanel;
