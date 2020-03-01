import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import throttle from 'lodash.throttle';

import SlideLink from './SlideLink';

const LeftMenuWrapper = styled.div`
  z-index: 2;
  display: flex;
  position: fixed;
  top: 50%;
  left: 14px;
  transform: rotate(-90deg) translateX(-50%);
  transform-origin: top left;
}`;

const LeftMenuSlideLink = styled(SlideLink)`
  font-family: ${props => props.theme.typography.heading.fontFamily};
  color: ${props => ((props.contrast) ? props.theme.color.contrast : props.theme.color.primary)}
  opacity: ${props => props.theme.opacity.high};
  font-size: 16px;
  margin-right: 10px;
  padding-left: 4px;
  padding-right: 4px;
}`;

class LeftMenu extends Component {
  constructor(props) {
    super(props);

    this.handleToggleShow = this.handleToggleShow.bind(this);
    // animation takes 1600ms (800 background enter + 800 content enter)
    // throttle toggle so it can only fires once animation is done
    this.throttledHandleToggleShow = throttle(this.handleToggleShow, 1700);
  }

  handleToggleShow() {
    this.props.onShowChange(!this.props.show);
  }

  render() {
    return (
      <LeftMenuWrapper>
        {
          (this.props.show)
            ? <LeftMenuSlideLink contrast onClick={this.throttledHandleToggleShow}>close</LeftMenuSlideLink>
            : <LeftMenuSlideLink onClick={this.throttledHandleToggleShow}>about</LeftMenuSlideLink>
        }
      </LeftMenuWrapper>
    );
  }
}

LeftMenu.propTypes = {
  show: PropTypes.bool.isRequired,
  onShowChange: PropTypes.func.isRequired,
};

export default LeftMenu;
