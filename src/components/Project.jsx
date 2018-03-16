import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';

const RowWrapper = styled(Row)`
  margin-bottom: 80px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Title = styled.h1`
  font-size: 18px;
  font-family: 'Montserrat SemiBold';
`;

const Subtitle = styled.h2`
  font-size: 18px;
  font-family: 'Montserrat SemiBold';
`;

const Heading = styled.h3`
  font-size: 16px;
  font-family: 'Montserrat Light';
`;

const Body = styled.p`
  font-size: 14px;
  font-family: 'Open Sans Regular';
`;

const Link = styled.a`
  font-size: 14px;
  font-family: 'Open Sans Regular';
  text-decoration: none;
  color: inherit;
`;

function Project(props) {
  return (
    <RowWrapper>
      <Col>
        <Row>
          <Col>
            <Image src="https://picsum.photos/1600/900" alt="project" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Title>{props.project.title}</Title>
            <Subtitle>{props.project.role}</Subtitle>
            <Heading>Description</Heading>
            <Body>{props.project.description}</Body>
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
    </RowWrapper>
  );
}

Project.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    stack: PropTypes.string.isRequired,
    link: PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Project;
