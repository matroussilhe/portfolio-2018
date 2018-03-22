import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row } from '../../utils/Grid';

import MenuItem from '../MenuItem';
import AboutBackground from './AboutBackground';
import AnimatedCol from '../AnimatedCol';

const AboutRow = styled(Row)`
  min-height: 100vh;
  height: 100vh;
  position: fixed;
  top: 0;
`;

const ContentWrapper = styled.div`
  display: flex;
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
    <AboutRow middle="xs">
      <AboutBackground show={props.show} />
      <ContentWrapper>
        <AnimatedCol xsOffset={2} xs={2} show={props.show}>
          <Image src="/assets/images/me.jpg" alt="photo of Mathieu Roussilhe" />
        </AnimatedCol>
        <AnimatedCol xs={4} show={props.show}>
          <Title>Hello</Title>
          <Body>My name is Mathieu Roussilhe. I am 25 and live in Paris, France. I always loved computer related stuff and I had my first programming experience when I discovered the Warcraft 3 map editor. It never let go since then and I am now studying in an IT school to make of my passion my future job.</Body>
          <MenuItem label="mail" destination="mailto:mathieu.roussilhe@gmail.com" />
          <MenuItem label="linkedin" destination="https://www.linkedin.com/in/mathieu-roussilhe-ba2759154/" />
          <MenuItem label="facebook" destination="https://www.facebook.com/Mathieu.Roussilhe" />
        </AnimatedCol>
        <AnimatedCol xs={2} show={props.show}>
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
        </AnimatedCol>
      </ContentWrapper>
    </AboutRow>
  );
}

About.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default About;
