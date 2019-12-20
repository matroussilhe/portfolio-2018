import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex } from 'grid-styled';

import SlideBackground from '../SlideBackground';
import AppearClose from '../AppearClose';

const CaseStudyFlex = styled(Flex)`
  position: fixed;
  min-height: 100vh;
  height: 100vh;
  z-index: ${props => props.zIndex}
`;

const Title = styled.h1`
  font-family: ${props => props.theme.typography.title.fontFamily};
  color: ${props => props.theme.color.contrast};
  opacity: ${props => props.theme.opacity.dark};
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
  opacity: ${props => props.theme.opacity.dark};
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
  opacity: ${props => props.theme.opacity.grey};
  font-size: 16px;
  margin-bottom: 8px;
  @media (max-width: ${props => props.theme.breakpoint.md}px) { {
    font-size: .9rem;
    margin-bottom: 4px;
  }
`;

class CaseStudy extends Component {
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
      <CaseStudyFlex alignItems="center" width={1} zIndex={this.state.zIndex}>
        <Title>Title</Title>
        <Subtitle>Subtitle</Subtitle>
        <Body>
              MY BODY IS READY
        </Body>
        <AppearClose show={this.props.show} onShowChange={this.props.onShowChange} />
        <SlideBackground show={this.props.show} onLeaved={this.handleOnLeaved} breakpoint={this.props.breakpoint} />
      </CaseStudyFlex>
    );
  }
}

CaseStudy.propTypes = {
  show: PropTypes.bool.isRequired,
  onShowChange: PropTypes.func.isRequired,
  breakpoint: PropTypes.shape({
    xsAndUp: PropTypes.bool.isRequired,
    smAndUp: PropTypes.bool.isRequired,
    mdAndUp: PropTypes.bool.isRequired,
    lgAndUp: PropTypes.bool.isRequired,
    xlAndUp: PropTypes.bool.isRequired,
  }).isRequired,
};

export default CaseStudy;
