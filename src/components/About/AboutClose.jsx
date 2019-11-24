import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Animate from 'react-move/Animate';
import { easePolyInOut } from 'd3-ease';

const AboutCloseWrapper = styled.div`
  z-index: 2;
  display: flex;
  position: fixed;
  top: 14px;
  right: 14px;
  cursor: pointer;
}`;

const CloseImage = styled.img`
  display: block;
  width: 24px;
  height: auto;
`;

class AboutClose extends Component {
  constructor(props) {
    super(props);

    this.handleToggleShowAbout = this.handleToggleShowAbout.bind(this);
  }

  handleToggleShowAbout() {
    this.props.onShowAboutChange(false);
  }

  render() {
    return (
      <Animate
        // Weither to render or not (trigger enter/leave)
        show={this.props.show}
        // Starting state
        start={{
          opacity: 0,
        }}
        // How to transform state on enter
        enter={{
          opacity: [1],
          timing: {
            delay: 800,
            duration: 800,
            ease: easePolyInOut,
          },
        }}
        // How to handle interrupted enter and leave transitions.
        update={{
          opacity: 1,
        }}
        // How to transform node state on leave
        leave={{
          opacity: [0],
          timing: {
            duration: 800,
            ease: easePolyInOut,
          },
        }}
      >
        {state => (
          <AboutCloseWrapper
            style={{
              opacity: state.opacity,
            }}
            onClick={this.handleToggleShowAbout}
          >
            <CloseImage src="/assets/icons/close.svg" alt="close" />
          </AboutCloseWrapper>
        )}
      </Animate>
    );
  }
}

AboutClose.propTypes = {
  show: PropTypes.bool.isRequired,
  onShowAboutChange: PropTypes.func.isRequired,
};

export default AboutClose;
