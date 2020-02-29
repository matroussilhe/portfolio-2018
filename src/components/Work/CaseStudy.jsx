/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex } from 'grid-styled';

import SlideBackground from '../SlideBackground';
import AppearClose from '../AppearClose';
import SlideBox from '../SlideBox';
import SlideLink from '../SlideLink';

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

const HeaderOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.33);
`;

const HeaderTextFlex = styled(Flex)`
  position: absolute;
  width: 100%;
  height: 100%;
  text-shadow: 6px 6px 0px rgba(0, 0, 0, 0.25);
`;

const CaseStudyTitle = styled.h1`
  font-family: ${props => props.theme.typography.title.fontFamily};
  color: ${props => props.theme.color.contrast};
  opacity: ${props => props.theme.opacity.solid};
  text-align: center;
  font-size: 82px;
  margin-bottom: 8px;
  @media (max-width: ${props => props.theme.breakpoint.md}px) { {
    font-size: 2.2rem;
  }
`;

const CaseStudySubtitle = styled.h2`
  font-family: ${props => props.theme.typography.subtitle.fontFamily};
  color: ${props => props.theme.color.contrast};
  opacity: ${props => props.theme.opacity.solid};
  font-size: 32px;
  @media (max-width: ${props => props.theme.breakpoint.md}px) { {
    font-size: 1.4rem;
  }
`;

const CaseStudyBody = styled.p`
  font-family: ${props => props.theme.typography.body.fontFamily};
  color: ${props => props.theme.color.contrast};
  opacity: ${props => props.theme.opacity.medium};
  font-size: 18px;
  line-height: 1.4;
  white-space: pre-wrap;
  @media (max-width: ${props => props.theme.breakpoint.md}px) { {
    font-size: 1rem;
    line-height: 1.4;
  }
`;

const CaseStudySlideLink = styled(SlideLink)`
  font-family: ${props => props.theme.typography.title.fontFamily};
  color: ${props => props.theme.color.contrast};
  opacity: ${props => props.theme.opacity.solid};
  font-size: 32px;
  @media (max-width: ${props => props.theme.breakpoint.md}px) { {
    font-size: 1.4rem;
  }
}`;

const FeatureTitle = styled.h1`
  font-family: ${props => props.theme.typography.title.fontFamily};
  color: ${props => props.theme.color.contrast};
  opacity: ${props => props.theme.opacity.solid};
  text-align: center;
  font-size: 60px;
  @media (max-width: ${props => props.theme.breakpoint.md}px) { {
    font-size: 1.6rem;
  }
`;

const SectionTitle = styled.h2`
  font-family: ${props => props.theme.typography.subtitle.fontFamily};
  color: ${props => props.theme.color.contrast};
  opacity: ${props => props.theme.opacity.high};
  font-size: 32px;
  margin-bottom: 8px;
  @media (max-width: ${props => props.theme.breakpoint.md}px) { {
    font-size: 1.4rem;
    margin-bottom: 4px;
  }
`;

const SectionBody = styled.p`
  font-family: ${props => props.theme.typography.body.fontFamily};
  color: ${props => props.theme.color.contrast};
  opacity: ${props => props.theme.opacity.medium};
  font-size: 18px;
  line-height: 1.4;
  white-space: pre-wrap;
  @media (max-width: ${props => props.theme.breakpoint.md}px) { {
    font-size: 1rem;
    line-height: 1.4;
  }
`;

const SectionImage = styled.img`
  width: 100%;
  height: auto;
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
    return (this.props.caseStudy ? this.props.caseStudy.features : []).map((feature, idx) => (
      <Flex key={`case-study-${idx}`} flexDirection="column">
        <HeaderFlex>
          <HeaderImage src={feature.image.src} alt={this.props.caseStudy.image.alt} height="300px" />
          <HeaderOverlay />
          <HeaderTextFlex alignItems="center" justifyContent="center" flexDirection="column">
            <FeatureTitle>{idx + 1}. {feature.title}</FeatureTitle>
          </HeaderTextFlex>
        </HeaderFlex>
        <Flex mt={['75px', '75px', '150px', '150px']} width={1} flexDirection="column">
          <Flex ml={['12.5%', '12.5%', '25%', '31.25%']} width={[6/8, 6/8, 4/8, 3/8]}>
            <SectionTitle>Challenge</SectionTitle>
          </Flex>
          {feature.challenge.map((item, index) => (
            item.type === 'paragraph'
              ?
                <Flex key={`challenge-body-${index}`} ml={['12.5%', '12.5%', '25%', '31.25%']} width={[6/8, 6/8, 4/8, 3/8]} mb={index === feature.challenge.length - 1 ? '0px' : '25px'}>
                  <SectionBody>{item.value}</SectionBody>
                </Flex>
              :
                <Flex key={`challenge-image-${index}`} ml={['0%', '0%', '12.5%', '12.5%']} width={[1, 1, 6/8, 6/8]} mt={['25px', '25px', '75px', '75px']} mb={index === feature.challenge.length - 1 ? '0px' : ['50px', '50px', '100px', '100px']}>
                  <SectionImage src={item.value.src} alt={item.value.alt} />
                </Flex>
          ))}
        </Flex>
        <Flex mt={['75px', '75px', '150px', '150px']} width={1} flexDirection="column">
          <Flex ml={['12.5%', '12.5%', '25%', '31.25%']} width={[6/8, 6/8, 4/8, 3/8]}>
            <SectionTitle>Solution</SectionTitle>
          </Flex>
          {feature.solution.map((item, index) => (
            item.type === 'paragraph'
              ?
                <Flex key={`solution-body-${index}`} ml={['12.5%', '12.5%', '25%', '31.25%']} width={[6/8, 6/8, 4/8, 3/8]} mb={index === feature.solution.length - 1 ? '0px' : '25px'}>
                  <SectionBody>{item.value}</SectionBody>
                </Flex>
              :
                <Flex key={`solution-image-${index}`} ml={['0%', '0%', '12.5%', '12.5%']} width={[1, 1, 6/8, 6/8]} mt={['25px', '25px', '75px', '75px']} mb={index === feature.solution.length - 1 ? '0px' : ['50px', '50px', '100px', '100px']}>
                  <SectionImage src={item.value.src} alt={item.value.alt} />
                </Flex>
          ))}
        </Flex>
        <Flex my={['75px', '75px', '150px', '150px']} width={1} flexDirection="column">
          <Flex ml={['12.5%', '12.5%', '25%', '31.25%']} width={[6/8, 6/8, 4/8, 3/8]}>
            <SectionTitle>Result</SectionTitle>
          </Flex>
          {feature.result.map((item, index) => (
            item.type === 'paragraph'
              ?
                <Flex key={`result-body-${index}`} ml={['12.5%', '12.5%', '25%', '31.25%']} width={[6/8, 6/8, 4/8, 3/8]} mb={index === feature.result.length - 1 ? '0px' : '25px'}>
                  <SectionBody>{item.value}</SectionBody>
                </Flex>
              :
                <Flex key={`result-image-${index}`}ml={['0%', '0%', '12.5%', '12.5%']} width={[1, 1, 6/8, 6/8]} mt={['25px', '25px', '75px', '75px']} mb={index === feature.result.length - 1 ? '0px' : ['50px', '50px', '100px', '100px']}>
                  <SectionImage src={item.value.src} alt={item.value.alt} />
                </Flex>
          ))}
        </Flex>
      </Flex>
    ));
  }

  render() {
    return (
      <CaseStudyFlex width={1} zIndex={this.state.zIndex}>
        <WrapperFlex width={1} flexDirection="column">
          <SlideBox width={1} flex="1 0 auto" show={this.props.show}>
            <HeaderFlex>
              <HeaderImage src={this.props.caseStudy.image.src} alt={this.props.caseStudy.image.alt} />
              <HeaderOverlay />
              <HeaderTextFlex alignItems="center" justifyContent="center" flexDirection="column">
                <CaseStudyTitle>{this.props.caseStudy.title}</CaseStudyTitle>
                <CaseStudySubtitle>{this.props.caseStudy.subtitle}</CaseStudySubtitle>
              </HeaderTextFlex>
            </HeaderFlex>
            <Flex my={['75px', '75px', '150px', '150px']} ml={['12.5%', '12.5%', '25%', '31.25%']} width={[6/8, 6/8, 4/8, 3/8]}>
              <CaseStudyBody>{this.props.caseStudy.description}</CaseStudyBody>
            </Flex>
            {this.renderFeatures()}
            <Flex mb={['75px', '75px', '150px', '150px']} ml={['12.5%', '12.5%', '25%', '31.25%']} width={[6/8, 6/8, 4/8, 3/8]} justifyContent="center">
              <CaseStudySlideLink href={this.props.caseStudy.link.url} target="_blank">{this.props.caseStudy.link.label}</CaseStudySlideLink>
            </Flex>
          </SlideBox>
        </WrapperFlex>
        <AppearClose show={this.props.show} onShowChange={this.props.onShowChange} />
        <SlideBackground show={this.props.show} onLeaved={this.handleOnLeaved} breakpoints={this.props.breakpoints} />
      </CaseStudyFlex>
    );
  }
}

CaseStudy.defaultProps = {
  caseStudy: {
    id: 0,
    title: '',
    subtitle: '',
    description: '',
    image: {
      src: '',
      alt: '',
    },
    link: {
      label: '',
      url: '',
    },
    features: [],
  },
};

CaseStudy.propTypes = {
  show: PropTypes.bool.isRequired,
  onShowChange: PropTypes.func.isRequired,
  breakpoints: PropTypes.shape({
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
    link: PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
    features: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
      }),
      challenge: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([
          PropTypes.string.isRequired,
          PropTypes.shape({
            src: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired,
          }),
        ]),
      })),
      solution: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([
          PropTypes.string.isRequired,
          PropTypes.shape({
            src: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired,
          }),
        ]),
      })),
      result: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([
          PropTypes.string.isRequired,
          PropTypes.shape({
            src: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired,
          }),
        ]),
      })),
    })),
  }),
};

export default CaseStudy;
