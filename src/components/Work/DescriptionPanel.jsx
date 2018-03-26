import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';

import AppearBox from '../AppearBox';

const WrapperBox = styled(Box)`
  position: relative;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  background-color: rgba(0, 0, 0, ${props => props.theme.opacity.dark});
`;

const ContentFlex = styled(Flex)`
  position: absolute;
  top: 0;
  overflow: hidden
`;

const BottomFlex = styled(Flex)`
  position: relative;
`;

const Title = styled.h1`
  font-family: ${props => props.theme.typography.title.fontFamily};
  color: ${props => props.theme.color.contrast};
  font-size: 57px;
  margin-bottom: 8px;
`;

const Subtitle = styled.h2`
  font-family: ${props => props.theme.typography.subtitle.fontFamily};
  color: ${props => props.theme.color.contrast};
  font-size: 27px;
  margin-bottom: 16px;
`;

const Heading = styled.h3`
  font-family: ${props => props.theme.typography.heading.fontFamily};
  color: ${props => props.theme.color.contrast};
  opacity: ${props => props.theme.opacity.dark};
  font-size: 16px;
  margin-bottom: 4px;
`;

const Body = styled.p`
  font-family: ${props => props.theme.typography.body.fontFamily};
  color: ${props => props.theme.color.contrast};
  opacity: ${props => props.theme.opacity.grey};
  font-size: 16px;
  margin-bottom: 16px;
`;

const Link = styled.a`
  font-family: ${props => props.theme.typography.body.fontFamily};
  color: ${props => props.theme.color.contrast};
  opacity: ${props => props.theme.opacity.grey};
  font-size: 16px;
`;

function DescriptionPanel(props) {
  return (
    <WrapperBox width={1}>
      <ContentFlex flexDirection="column">
        <AppearBox show={props.show} pl="8%" pt="8%" delay={0}>
          <Title>{props.project.title}</Title>
          <Subtitle>{props.project.subtitle}</Subtitle>
        </AppearBox>
        <BottomFlex pl="8%">
          <AppearBox show={props.show} pr="8%" width={2/3} delay={200}>
            <Body>{props.project.description}</Body>
          </AppearBox>
          {/* DescriptionPanel's animation considered ended when this box's animation end */}
          <AppearBox show={props.show} onLeaved={props.onLeaved} width={1/3} delay={400}>
            <Heading>Role</Heading>
            <Body>{props.project.role}</Body>
            <Heading>Tech</Heading>
            <Body>{props.project.tech}</Body>
            {
              (props.project.link)
              ?
                <div>
                  <Heading>Link</Heading>
                  <Link href={props.project.link.url}>{props.project.link.label}</Link>
                </div>
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
    subtitle: PropTypes.string.isRequired,
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
