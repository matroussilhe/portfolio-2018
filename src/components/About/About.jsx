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
  font-family: ${props => props.theme.typography.heading.fontFamily};
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
  margin-bottom: 16px;
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
          <SlideBox ml="12.5%" width={1/4} show={this.props.show}>
            <Image src="/assets/images/me.jpg" alt="photo of Mathieu Roussilhe" />
          </SlideBox>
          <SlideBox ml="12.5%" width={1/4} show={this.props.show}>
            <Title>Hello</Title>
            <Body>I am a web developer.<br />I help design and build complete solutions alone or in a team.<br />I just came back from a year in Seoul and now looking for a new destination.<br />I just graduated so if you have any opportunity, get in touch!</Body>
            <Title>Skills</Title>
            <Heading>- Front-end</Heading>
            <Body>React, JS, HTML, CSS</Body>
            <Heading>- Back-end</Heading>
            <Body>Meteor, Node.js, Symfony3, REST</Body>
            <Heading>- Programming</Heading>
            <Body>C, C++; Android, Java, UML</Body>
            <Heading>- Database</Heading>
            <Body>NoSQL, MongoDB, SQL, Doctrine</Body>
            <Heading>- DevOps</Heading>
            <Body>Heroku, Amazon S3</Body>
            <Heading>- Tools</Heading>
            <Body>Unreal Engine 4, Git, npm</Body>
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
