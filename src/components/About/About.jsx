import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex } from 'grid-styled';

import AboutBackground from './AboutBackground';
import SlideBox from '../SlideBox';

const AboutFlex = styled(Flex)`
  position: fixed;
  min-height: 100vh;
  height: 100vh;
  z-index: ${props => props.zIndex}
`;

const WrapperFlex = styled(Flex)`
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Title = styled.h1`
  font-family: ${props => props.theme.typography.title.fontFamily};
  color: ${props => props.theme.color.contrast};
  opacity: ${props => props.theme.opacity.dark};
  font-size: 57px;
  margin-bottom: 8px;
`;

const Heading = styled.h3`
  font-family: ${props => props.theme.typography.subtitle.fontFamily};
  color: ${props => props.theme.color.contrast};
  opacity: ${props => props.theme.opacity.dark};
  font-size: 27px;
  margin-bottom: 4px;
`;

const Body = styled.p`
  font-family: ${props => props.theme.typography.body.fontFamily};
  color: ${props => props.theme.color.contrast};
  opacity: ${props => props.theme.opacity.grey};
  font-size: 16px;
  margin-bottom: 40px;
`;

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
          <SlideBox ml="12.5%" pr="6.25%" width={2/8} show={this.props.show}>
            <Image src="/assets/images/me.jpg" alt="photo of Mathieu Roussilhe" />
          </SlideBox>
          <SlideBox pr="6.25%" width={2/8} show={this.props.show}>
            <Heading>Hello</Heading>
            <Body>
              I am a web developer.<br />
              I help design and build complete solutions alone or in a team.<br />
              I just came back from a year in Seoul and now looking for a new destination.<br />
              I just graduated so if you have any opportunity, get in touch!
            </Body>
            <Heading>Skills</Heading>
            <Body>
              Front-end: React, JS, HTML, CSS<br />
              Back-end: Meteor, Node.js, Symfony3, REST<br />
              Programming: C, C++; Android, Java, UML<br />
              Database: NoSQL, MongoDB, SQL, Doctrine<br />
              DevOps: Heroku, Amazon S3<br />
              Tools: Unreal Engine 4, Git, npm
            </Body>
          </SlideBox>
          <SlideBox width={1/8} show={this.props.show}>
            <Heading>Follow me </Heading>
            <Body>
              Facebook<br />
              Linkedin
            </Body>
            <Heading>Contact me </Heading>
            <Body>
              Mail
            </Body>
          </SlideBox>
        </WrapperFlex>
        <AboutBackground show={this.props.show} onLeaved={this.handleOnLeaved} />
      </AboutFlex>
    );
  }
}

About.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default About;
