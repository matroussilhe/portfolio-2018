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

const HeaderFlex = styled(Flex)`
  position: relative;
`;

const HeaderImage = styled.img`
  width: 100%;
  height: auto;
`;

const HeaderTextFlex = styled(Flex)`
  position: absolute;
  width: 100%;
  height: 100%;
  text-shadow: 2px 2px #ff0000;
`;

const HeaderTitle = styled.h1`
  font-family: ${props => props.theme.typography.title.fontFamily};
  color: ${props => props.theme.color.contrast};
  opacity: ${props => props.theme.opacity.dark};
  text-align: center;
  font-size: 82px;
  @media (max-width: ${props => props.theme.breakpoint.md}px) { {
    font-size: 2.2rem;
  }
`;

const HeaderSubtitle = styled.h2`
  font-family: ${props => props.theme.typography.subtitle.fontFamily};
  color: ${props => props.theme.color.contrast};
  opacity: ${props => props.theme.opacity.dark};
  font-size: 32px;
  @media (max-width: ${props => props.theme.breakpoint.md}px) { {
    font-size: 1.2rem;
  }
`;

const SubHeaderBody = styled.p`
  font-family: ${props => props.theme.typography.body.fontFamily};
  color: ${props => props.theme.color.contrast};
  opacity: ${props => props.theme.opacity.grey};
  font-size: 20px;
  white-space: pre-wrap;
  @media (max-width: ${props => props.theme.breakpoint.md}px) { {
    font-size: 1.2rem;
  }
`;

const FeatureTitle = styled.h1`
  font-family: ${props => props.theme.typography.title.fontFamily};
  color: ${props => props.theme.color.contrast};
  opacity: ${props => props.theme.opacity.dark};
  text-align: center;
  font-size: 60px;
  @media (max-width: ${props => props.theme.breakpoint.md}px) { {
    font-size: 1.8rem;
  }
`;

const SectionTitle = styled.h2`
  font-family: ${props => props.theme.typography.title.fontFamily};
  color: ${props => props.theme.color.contrast};
  opacity: ${props => props.theme.opacity.dark};
  font-size: 32px;
  @media (max-width: ${props => props.theme.breakpoint.md}px) { {
    font-size: 1.2rem;
  }
`;

const ParagraphTitle = styled.h3`
  font-family: ${props => props.theme.typography.subtitle.fontFamily};
  color: ${props => props.theme.color.contrast};
  opacity: ${props => props.theme.opacity.dark};
  font-size: 22px;
  @media (max-width: ${props => props.theme.breakpoint.md}px) { {
    font-size: 1.2rem;
  }
`;

const ParagraphBody = styled.p`
  font-family: ${props => props.theme.typography.body.fontFamily};
  color: ${props => props.theme.color.contrast};
  opacity: ${props => props.theme.opacity.grey};
  font-size: 20px;
  white-space: pre-wrap;
  @media (max-width: ${props => props.theme.breakpoint.md}px) { {
    font-size: 1.2rem;
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

  renderFeatures() {
    return (this.props.caseStudy ? this.props.caseStudy.features : []).map(feature => (
      <Flex flexDirection="column">
        <HeaderFlex>
          <HeaderImage src={feature.image.src} alt={this.props.caseStudy.image.alt} />
          <HeaderTextFlex alignItems="center" justifyContent="center" flexDirection="column">
            <FeatureTitle>{feature.title}</FeatureTitle>
          </HeaderTextFlex>
        </HeaderFlex>
        <Flex ml="16.7%" mt="150px" width={4 / 6} flexDirection="column">
          <SectionTitle>Challenges</SectionTitle>
          {feature.challenge.paragraphs.map(paragraph => (
            <Flex mb="25px" flexDirection="column">
              <ParagraphTitle>{paragraph.title}</ParagraphTitle>
              <ParagraphBody>{paragraph.body}</ParagraphBody>
            </Flex>
          ))}:
        </Flex>
        <Flex ml="16.7%" width={4 / 6} flexDirection="column">
          <SectionTitle>Solution</SectionTitle>
          {feature.solution.paragraphs.map(paragraph => (
            <Flex mb="25px" flexDirection="column">
              <ParagraphTitle>{paragraph.title}</ParagraphTitle>
              <ParagraphBody>{paragraph.body}</ParagraphBody>
            </Flex>
          ))}:
        </Flex>
        <Flex ml="16.7%" mb="100px" width={4 / 6} flexDirection="column">
          <SectionTitle>Results</SectionTitle>
          {feature.result.paragraphs.map(paragraph => (
            <Flex mb="25px" flexDirection="column">
              <ParagraphTitle>{paragraph.title}</ParagraphTitle>
              <ParagraphBody>{paragraph.body}</ParagraphBody>
            </Flex>
          ))}:
        </Flex>
      </Flex>
    ));
  }

  render() {
    return (
      <CaseStudyFlex width={1} zIndex={this.state.zIndex}>
        <WrapperFlex width={1} flexDirection="column">
          <SlideBox ml="12.5%" width={6 / 8} flex="1 0 auto" show={this.props.show}>
            <HeaderFlex>
              <HeaderImage src={this.props.caseStudy.image.src} alt={this.props.caseStudy.image.alt} />
              <HeaderTextFlex alignItems="center" justifyContent="center" flexDirection="column">
                <HeaderTitle>{this.props.caseStudy.title}</HeaderTitle>
                <HeaderSubtitle>{this.props.caseStudy.subtitle}</HeaderSubtitle>
              </HeaderTextFlex>
            </HeaderFlex>
            <Flex ml="16.7%" my="150px" width={4 / 6} flexDirection="column">
              <SubHeaderBody>{this.props.caseStudy.description}</SubHeaderBody>
            </Flex>
            {this.renderFeatures()}
          </SlideBox>
        </WrapperFlex>
        <AppearClose show={this.props.show} onShowChange={this.props.onShowChange} />
        <SlideBackground show={this.props.show} onLeaved={this.handleOnLeaved} breakpoint={this.props.breakpoint} />
      </CaseStudyFlex>
    );
  }
}

CaseStudy.defaultProps = {
  caseStudy: {
    id: null,
    title: '',
    description: '',
    image: {
      src: '',
      alt: '',
    },
    features: [],
  },
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
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }),
    features: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
      }),
      challenge: PropTypes.shape({
        features: PropTypes.arrayOf(PropTypes.shape({
          title: PropTypes.string.isRequired,
          body: PropTypes.string.isRequired,
        })),
      }),
    })),
  }),
};

export default CaseStudy;
