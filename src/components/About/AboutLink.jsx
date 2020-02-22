import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';

import SlideLink from '../SlideLink';

const AboutLinkFlex = styled(Flex)`
  min-height: 100vh;
  height: 100vh;
`;

const AboutLinkBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AboutLinkTitle = styled.h1`
  font-family: ${props => props.theme.typography.title.fontFamily};
  color: ${props => props.theme.color.primary};
  opacity: ${props => props.theme.opacity.high};
  font-size: 60px;
  text-align: center;
  @media (max-width: ${props => props.theme.breakpoint.md}px) { {
    font-size: 2.2rem;
  }
`;

const AboutLinkSlideLink = styled(SlideLink)`
  font-family: ${props => props.theme.typography.subtitle.fontFamily};
  color: ${props => props.theme.color.primary};
  opacity: ${props => props.theme.opacity.medium};
  font-size: 24px;
  text-align: center;
  margin-top: 4px;
  @media (max-width: ${props => props.theme.breakpoint.md}px) { {
    font-size: 1.2rem;
  }
}`;

class AboutLink extends Component {
  constructor(props) {
    super(props);

    this.handleToggleShow = this.handleToggleShow.bind(this);
  }

  handleToggleShow() {
    this.props.onShowChange(true);
  }

  render() {
    return (
      <AboutLinkFlex>
        <AboutLinkBox ml={['12.5%', 0]} width={[3/4, 1]}>
          <AboutLinkTitle>Thank you for your time :)</AboutLinkTitle>
          <AboutLinkSlideLink onClick={this.handleToggleShow}>Click here to learn more about me</AboutLinkSlideLink>
        </AboutLinkBox>
      </AboutLinkFlex>
    );
  }
}

AboutLink.propTypes = {
  onShowChange: PropTypes.func.isRequired,
};

export default AboutLink;
