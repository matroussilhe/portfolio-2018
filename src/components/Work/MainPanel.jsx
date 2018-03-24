import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Animate from 'react-move/Animate';
import { easePolyInOut } from 'd3-ease';
import { Flex, Box } from 'grid-styled';

const WrapperBox = styled(Box)`
  position: relative;
  overflow: hidden;
`;

const ContentFlex = styled(Flex)`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
  transition: all 2s;
  ${WrapperBox}:hover & {
    transition: all 8s;
    transform: scale(1.2, 1.2);
  }
`;

const NoiseImage = styled.img`
  display: block;
  position: absolute;
  top: 0;
  width: 100%;
  height: auto;
  transition: all 1s;
  opacity: 1
  ${WrapperBox}:hover & {
    transition: all 1.5s;
    opacity: 0;
  }
`;

const Title = styled.h1`
  font-size: 78px;
  font-family: 'Open Sans Bold';
  color: ${props => props.theme.color.contrast};
`;

function MainPanel(props) {
  return (
    <Animate
      // Weither to render or not (trigger enter/leave)
      show={props.show}
      // Starting state
      start={{
        opacity: [1],
      }}
      // How to transform state on enter
      enter={{
        opacity: [0],
        timing: {
          delay: 800,
          duration: 800,
          ease: easePolyInOut,
        },
      }}
      // How to handle interrupted enter and leave transitions.
      update={{
        opacity: [1],
      }}
      // How to transform node state on leave
      leave={{
        opacity: [1],
        timing: {
          duration: 800,
          ease: easePolyInOut,
        },
      }}
    >
      {(state) => {
        return (
          <WrapperBox>
            <Image src={props.image.src} alt={props.image.alt} />
            <NoiseImage src="/assets/images/placeholder_noise.jpg" alt={props.image.alt} />
            <ContentFlex alignItems="center" justifyContent="center">
              <Title>{props.title}</Title>
            </ContentFlex>
          </WrapperBox>
        );
      }}
    </Animate>
  );
}

MainPanel.propTypes = {
  show: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
};

export default MainPanel;
