import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex } from 'grid-styled';

import SlideBackground from '../SlideBackground';
import AppearClose from '../AppearClose';
import SlideBox from '../SlideBox';
import SlideLink from '../SlideLink';
import Resume from '../../assets/documents/resume-mathieu-roussilhe.pdf';

const AboutFlex = styled(Flex)`
  position: fixed;
  min-height: 100vh;
  height: 100vh;
  z-index: ${props => props.zIndex}
`;

const WrapperFlex = styled(Flex)`
`;

const AboutMeWrapper = styled.div`
  margin-bottom: 32px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Title = styled.h1`
  font-family: ${props => props.theme.typography.title.fontFamily};
  color: ${props => props.theme.color.contrast};
  opacity: ${props => props.theme.opacity.high};
  font-size: 57px;
  margin-bottom: 16px;
  @media (max-width: ${props => props.theme.breakpoint.md}px) { {
    font-size: 2.4rem;
    margin-bottom: 4px;
  }
`;

const Subtitle = styled.h2`
  font-family: ${props => props.theme.typography.subtitle.fontFamily};
  color: ${props => props.theme.color.contrast};
  opacity: ${props => props.theme.opacity.high};
  font-size: 27px;
  margin-bottom: 8px;
  @media (max-width: ${props => props.theme.breakpoint.md}px) { {
    font-size: 1.3rem;
    margin-bottom: 4px;
  }
`;

const Body = styled.p`
  font-family: ${props => props.theme.typography.body.fontFamily};
  color: ${props => props.theme.color.contrast};
  opacity: ${props => props.theme.opacity.medium};
  font-size: 16px;
  margin-bottom: 8px;
  @media (max-width: ${props => props.theme.breakpoint.md}px) { {
    font-size: .9rem;
    margin-bottom: 4px;
  }
`;

const AboutSlideLink = styled(SlideLink)`
  font-family: ${props => props.theme.typography.heading.fontFamily};
  color: ${props => props.theme.color.contrast};
  opacity: ${props => props.theme.opacity.high};
  font-size: 16px;
  margin-right: 16px;
  @media (max-width: ${props => props.theme.breakpoint.md}px) { {
    font-size: .9rem;
  }
}`;

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      zIndex: -1,
    };

    this.handleOnLeaved = this.handleOnLeaved.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // Change z-index to 1 on show
    if (this.props.show !== nextProps.show) {
      if (nextProps.show) {
        this.setState({
          zIndex: 1,
        });
      }
    }
  }

  handleOnLeaved() {
    // Change z-index to -1 on leave animation's end
    this.setState({
      zIndex: -1,
    });
  }

  render() {
    return (
      <AboutFlex alignItems="center" width={1} zIndex={this.state.zIndex}>
        <WrapperFlex width={1}>
          <SlideBox ml={[0, 0, '12.5%', '12.5%']} width={[0, 0, 2/8, 2/8]} show={this.props.show}>
            <Image src="/assets/images/me.jpg" alt="photo of Mathieu Roussilhe" />
          </SlideBox>
          <SlideBox ml={['12.5%', '12.5%', '12.5%', '12.5%']} width={[6/8, 6/8, 3/8, 3/8]} show={this.props.show}>
            <AboutMeWrapper>
              <Title>Hello there</Title>
              <Subtitle>About me</Subtitle>
              <Body>
                I am a Fullstack Engineer from France, based in Korea.<br />
                I use technology to build eloquent systems.<br />
                I seek quality, clarity and beauty in my work.<br />
                I strive to create excellent products through steady iterations.
              </Body>
              <AboutSlideLink href="https://www.instagram.com/matroussilhe" target="_blank">Instagram</AboutSlideLink>
            </AboutMeWrapper>
            <AboutMeWrapper>
              <Subtitle>Skills</Subtitle>
              <Body>
                Designing interfaces using the latest frontend technologies.<br />
                Building reliable API and backend solutions.<br />
                Familiar with both relational and non-relational database.<br />
                Managing hosting and deployment processes.<br />
                Knowledge of algorithm, Unix programming and OOP.<br />
                I can work in complete autonomy as well as part of a multidisciplinary team.
              </Body>
              <AboutSlideLink href={Resume} target="_blank">Resume</AboutSlideLink>
              <AboutSlideLink href="https://www.linkedin.com/in/matroussilhe" target="_blank">LinkedIn</AboutSlideLink>
              <AboutSlideLink href="https://www.rocketpunch.com/@matroussilhe" target="_blank">RocketPunch</AboutSlideLink>
              <AboutSlideLink href="https://github.com/matroussilhe" target="_blank">GitHub</AboutSlideLink>
              <AboutSlideLink href="mailto:mathieu.roussilhe@gmail.com">Email</AboutSlideLink>
            </AboutMeWrapper>
          </SlideBox>
        </WrapperFlex>
        <AppearClose show={this.props.show} onShowChange={this.props.onShowChange} />
        <SlideBackground show={this.props.show} onLeaved={this.handleOnLeaved} breakpoints={this.props.breakpoints} />
      </AboutFlex>
    );
  }
}

About.propTypes = {
  show: PropTypes.bool.isRequired,
  onShowChange: PropTypes.func.isRequired,
  breakpoints: PropTypes.shape({
    xsAndUp: PropTypes.bool.isRequired,
    smAndUp: PropTypes.bool.isRequired,
    mdAndUp: PropTypes.bool.isRequired,
    lgAndUp: PropTypes.bool.isRequired,
    xlAndUp: PropTypes.bool.isRequired,
  }).isRequired,
};

export default About;
