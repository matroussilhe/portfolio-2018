import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Animate from 'react-move/Animate';
import { easePolyInOut } from 'd3-ease';

const AppearCloseWrapper = styled.div`
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

class AppearClose extends Component {
  constructor(props) {
    super(props);

    this.handleToggleShow = this.handleToggleShow.bind(this);
  }

  handleToggleShow() {
    this.props.onShowChange(false);
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
          <AppearCloseWrapper
            style={{
              opacity: state.opacity,
            }}
            onClick={this.handleToggleShow}
          >
            <CloseImage src="/assets/icons/close.svg" alt="close" />
          </AppearCloseWrapper>
        )}
      </Animate>
    );
  }
}

AppearClose.propTypes = {
  show: PropTypes.bool.isRequired,
  onShowChange: PropTypes.func.isRequired,
};

export default AppearClose;
