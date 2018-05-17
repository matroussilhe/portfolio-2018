import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';

import AppearBox from '../AppearBox';
import SlideLink from '../SlideLink';

const WrapperBox = styled(Box)`
  position: relative;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  background-color: ${props => props.theme.color.primary};
  @media (max-width: ${props => props.theme.breakpoint.small}) {
    height: 100vw;
  };
`;

const ContentFlex = styled(Flex)`
  position: absolute;
  top: 0;
  overflow: hidden;
`;

const BottomFlex = styled(Flex)`
  position: relative;
`;

const Title = styled.h1`
  font-family: ${props => props.theme.typography.title.fontFamily};
  color: ${props => props.theme.color.contrast};
  opacity: ${props => props.theme.opacity.dark};
  font-size: 57px;
  margin-bottom: 8px;
  @media (max-width: ${props => props.theme.breakpoint.small}) {
    font-size: 2.2em;
  }
  @media (max-width: ${props => props.theme.breakpoint.xlarge}) {
    font-size: 2.5em;
  }
`;

const Heading = styled.h3`
  font-family: ${props => props.theme.typography.heading.fontFamily};
  color: ${props => props.theme.color.contrast};
  opacity: ${props => props.theme.opacity.dark};
  font-size: 16px;
  margin-bottom: 4px;
  @media (max-width: ${props => props.theme.breakpoint.small}) {
    font-size: .8em;
  }
  @media (max-width: ${props => props.theme.breakpoint.xlarge}) {
    font-size: .9em;
  }
`;

const Body = styled.p`
  font-family: ${props => props.theme.typography.body.fontFamily};
  color: ${props => props.theme.color.contrast};
  opacity: ${props => props.theme.opacity.grey};
  font-size: 16px;
  margin-bottom: 16px;
  white-space: pre-line;
  @media (max-width: ${props => props.theme.breakpoint.small}) {
    font-size: .8em;
    margin-bottom: 8px;
  }
  @media (max-width: ${props => props.theme.breakpoint.xlarge}) {
    font-size: .9em;
  }
`;

const DescriptionSlideLink = styled(SlideLink)`
  font-family: ${props => props.theme.typography.heading.fontFamily};
  color: ${props => props.theme.color.contrast};
  opacity: ${props => props.theme.opacity.dark};
  font-size: 16px;
  @media (max-width: ${props => props.theme.breakpoint.small}) {
    font-size: .8em;
  }
  @media (max-width: ${props => props.theme.breakpoint.xlarge}) {
    font-size: .9em;
  }
}`;

function DescriptionPanel(props) {
  return (
    <WrapperBox width={1}>
      <ContentFlex flexDirection="column">
        <AppearBox show={props.show} pl="6%" pt="6%" delay={0}>
          <Title>{props.project.title}</Title>
        </AppearBox>
        <BottomFlex pl="6%">
          <AppearBox show={props.show} pr="6%" width={3/4} delay={200}>
            <Body>{props.project.description}</Body>
          </AppearBox>
          {/* DescriptionPanel's animation considered ended when this box's animation end */}
          <AppearBox show={props.show} onLeaved={props.onLeaved} pr="4%" width={1/4} delay={400}>
            <Heading>Role</Heading>
            <Body>{props.project.role}</Body>
            <Heading>Tech</Heading>
            <Body>{props.project.tech}</Body>
            {
              (props.project.link)
              ?
                <DescriptionSlideLink href={props.project.link.url} target="_blank">{props.project.link.label}</DescriptionSlideLink>
              : ''
            }
          </AppearBox>
        </BottomFlex>
      </ContentFlex>
    </WrapperBox>
  );
}

DescriptionPanel.propTypes = {
  show: PropTypes.bool.isRequired,
  onLeaved: PropTypes.func.isRequired,
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tech: PropTypes.string.isRequired,
    image: PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }),
    link: PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default DescriptionPanel;
