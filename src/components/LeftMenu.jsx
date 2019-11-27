import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
  opacity: ${props => props.theme.opacity.dark};
  font-size: 16px;
  margin-right: 10px;
  padding-left: 4px;
  padding-right: 4px;
}`;

class LeftMenu extends Component {
  constructor(props) {
    super(props);

    this.handleToggleShowAbout = this.handleToggleShowAbout.bind(this);
  }

  handleToggleShowAbout() {
    this.props.onShowAboutChange(!this.props.showAbout);
  }

  render() {
    return (
      <LeftMenuWrapper>
        {
          (this.props.showAbout)
            ? <LeftMenuSlideLink contrast onClick={this.handleToggleShowAbout}>close</LeftMenuSlideLink>
            : <LeftMenuSlideLink onClick={this.handleToggleShowAbout}>about</LeftMenuSlideLink>
        }
      </LeftMenuWrapper>
    );
  }
}

LeftMenu.propTypes = {
  showAbout: PropTypes.bool.isRequired,
  onShowAboutChange: PropTypes.func.isRequired,
};

export default LeftMenu;
