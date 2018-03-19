import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, Col } from './overrides/Grid';

const ProjectWrapper = styled(Row)`
  margin-top: 400px;
`;

const DescriptionCol = styled(Col)`
  padding-right: 40px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Title = styled.h1`
  font-size: 26px;
  font-family: 'Open Sans Bold';
  color: ${props => props.theme.color.primary};
  opacity: ${props => props.theme.opacity.dark};
  margin-bottom: 18px;
`;

const Heading = styled.h3`
  font-size: 12px;
  font-family: 'Montserrat Regular';
  color: ${props => props.theme.color.primary};
  opacity: ${props => props.theme.opacity.dark};
  margin-top: 16px;
  margin-bottom: 4px;
`;

const Body = styled.p`
  font-size: 12px;
  font-family: 'Open Sans Regular';
  color: ${props => props.theme.color.primary};
  opacity: ${props => props.theme.opacity.grey};
`;

const Link = styled.a`
  font-size: 12px;
  font-family: 'Open Sans Regular';
  color: ${props => props.theme.color.primary};
  opacity: ${props => props.theme.opacity.grey};
`;

function Project(props) {
  return (
    <ProjectWrapper>
      <Col xsOffset={props.offset} xs={6}>
        <Row center="xs">
          <Col>
            <Title>{props.project.title}</Title>
            <Image src={props.project.image.src} alt={props.project.image.alt} />
          </Col>
        </Row>
        <Row>
          <DescriptionCol xs={12} lg={8}>
            <Heading>Description</Heading>
            <Body>{props.project.description}</Body>
          </DescriptionCol>
          <Col xs={12} lg={4}>
            <Heading>Role</Heading>
            <Body>{props.project.role}</Body>
            <Heading>Dev stack</Heading>
            <Body>{props.project.stack}</Body>
            {
              (props.project.link)
              ?
                <div>
                  <Heading>Link</Heading>
                  <Link href={props.project.link.url}>{props.project.link.label}</Link>
                </div>
              : ''
            }
          </Col>
        </Row>
      </Col>
    </ProjectWrapper>
  );
}

Project.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    stack: PropTypes.string.isRequired,
    image: PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }),
    link: PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  }).isRequired,
  offset: PropTypes.number.isRequired,
};

export default Project;
