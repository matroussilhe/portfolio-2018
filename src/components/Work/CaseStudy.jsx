import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex } from 'grid-styled';

import SlideBackground from '../SlideBackground';
import AppearClose from '../AppearClose';
import SlideBox from '../SlideBox';

const CaseStudyFlex = styled(Flex)`
  position: fixed;
  min-height: 100vh;
  height: 100vh;
  z-index: ${props => props.zIndex}
`;

const WrapperFlex = styled(Flex)`
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
`;

const TextFlex = styled(Flex)`
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Title = styled.h1`
  font-family: ${props => props.theme.typography.title.fontFamily};
  color: ${props => props.theme.color.contrast};
  opacity: ${props => props.theme.opacity.dark};
  text-align: center;
  font-size: 82px;
  @media (max-width: ${props => props.theme.breakpoint.md}px) { {
    font-size: 2.2rem;
  }
`;

const Subtitle = styled.h2`
  font-family: ${props => props.theme.typography.subtitle.fontFamily};
  color: ${props => props.theme.color.contrast};
  opacity: ${props => props.theme.opacity.dark};
  font-size: 32px;
  margin-top: 4px;
  @media (max-width: ${props => props.theme.breakpoint.md}px) { {
    font-size: 1.2rem;
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

const SectionTitle = styled.h1`
  font-family: ${props => props.theme.typography.title.fontFamily};
  color: ${props => props.theme.color.contrast};
  opacity: ${props => props.theme.opacity.dark};
  text-align: center;
  font-size: 60px;
  @media (max-width: ${props => props.theme.breakpoint.md}px) { {
    font-size: 1.8rem;
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

  renderSections() {
    return (this.props.caseStudy ? this.props.caseStudy.sections : []).map(section => (
      <SlideBox key={section.id} ml="12.5%" width={6 / 8} flex="1 0 auto" show={this.props.show}>
        <TextFlex ml="16.7%" width={4 / 6} flexDirection="column">
          <SectionTitle>{section.title}</SectionTitle>
          <Body>{section.description}</Body>
        </TextFlex>
        <Image src="/assets/images/event.jpg" alt="section photo" />
      </SlideBox>
    ));
  }

  render() {
    return (
      <CaseStudyFlex width={1} zIndex={this.state.zIndex}>
        <WrapperFlex width={1} flexDirection="column">
          <SlideBox ml="12.5%" width={6 / 8} flex="1 0 auto" show={this.props.show}>
            <TextFlex ml="16.7%" width={4 / 6} flexDirection="column">
              <Title>{this.props.caseStudy ? this.props.caseStudy.title : ''}</Title>
              <Subtitle>{this.props.caseStudy ? this.props.caseStudy.title : ''}</Subtitle>
              <Body>{this.props.caseStudy ? this.props.caseStudy.description : ''}</Body>
            </TextFlex>
          </SlideBox>
          {this.renderSections()}
        </WrapperFlex>
        <AppearClose show={this.props.show} onShowChange={this.props.onShowChange} />
        <SlideBackground show={this.props.show} onLeaved={this.handleOnLeaved} breakpoint={this.props.breakpoint} />
      </CaseStudyFlex>
    );
  }
}

CaseStudy.defaultProps = {
  caseStudy: {},
};

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
  caseStudy: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    sections: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
      }),
    })),
  }),
};

export default CaseStudy;
