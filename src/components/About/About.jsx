import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex } from 'grid-styled';

import MenuItem from '../MenuItem';
import AboutBackground from './AboutBackground';
import AnimatedBox from '../AnimatedBox';

const AboutFlex = styled(Flex)`
  position: fixed;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Title = styled.h1`
  font-size: 32px;
  font-family: 'Open Sans Bold';
  color: ${props => props.theme.color.contrast};
  opacity: ${props => props.theme.opacity.dark};
  margin-bottom: 8px;
`;

const Heading = styled.h3`
  font-size: 16px;
  font-family: 'Montserrat Regular';
  color: ${props => props.theme.color.contrast};
  opacity: ${props => props.theme.opacity.dark};
  margin-bottom: 4px;
`;

const Body = styled.p`
  font-size: 14px;
  font-family: 'Open Sans Regular';
  color: ${props => props.theme.color.contrast};
  opacity: ${props => props.theme.opacity.grey};
  margin-bottom: 16px;
`;

function About(props) {
  return (
    <AboutFlex width={1}>
      <AnimatedBox offset="12.5%" width={1/8} show={props.show}>
        <Image src="/assets/images/me.jpg" alt="photo of Mathieu Roussilhe" />
      </AnimatedBox>
      <AnimatedBox offset="12.5%" width={1/4} show={props.show}>
        <Title>Hello</Title>
        <Body>I am a web developer.<br />I help design and build complete solutions alone or in a team.<br />I just came back from a year in Seoul and now looking for a new destination.<br />I just graduated so if you have any opportunity, get in touch!</Body>
        <MenuItem label="mail" destination="mailto:mathieu.roussilhe@gmail.com" />
        <MenuItem label="linkedin" destination="https://www.linkedin.com/in/mathieu-roussilhe-ba2759154/" />
        <MenuItem label="facebook" destination="https://www.facebook.com/Mathieu.Roussilhe" />
      </AnimatedBox>
      <AnimatedBox offset="12.5%" width={1/8} show={props.show}>
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
      </AnimatedBox>
      <AboutBackground show={props.show} />
    </AboutFlex>
  );
}

About.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default About;
