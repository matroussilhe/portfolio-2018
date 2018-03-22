import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SlideLink from '../SlideLink';

const MenuWrapper = styled.div`
  display: flex;
  position: fixed;
  top: 50%;
  left: 14px;
  transform: rotate(-90deg) translateX(-50%);
  transform-origin: top left;
}`;

const MenuAboutSlideLink = styled(SlideLink)`
  position:relative;
  margin-right: 10px;
  text-transform: uppercase;
  font-size: 15px;
  font-family: 'Montserrat SemiBold';
  color: ${props => ((props.contrast) ? props.theme.color.contrast : props.theme.color.primary)}
  opacity: ${props => props.theme.opacity.dark};
}`;

class AboutMenu extends Component {
  constructor(props) {
    super(props);

    this.handleToggleShowAbout = this.handleToggleShowAbout.bind(this);
  }

  handleToggleShowAbout() {
    this.props.onShowAboutChange(!this.props.showAbout);
  }

  render() {
    return (
      <MenuWrapper>
        {
          (this.props.showAbout)
            ? <MenuAboutSlideLink contrast onClick={this.handleToggleShowAbout}>close</MenuAboutSlideLink>
            : <MenuAboutSlideLink onClick={this.handleToggleShowAbout}>about</MenuAboutSlideLink>
        }
      </MenuWrapper>
    );
  }
}

AboutMenu.propTypes = {
  showAbout: PropTypes.bool.isRequired,
  onShowAboutChange: PropTypes.func.isRequired,
};

export default AboutMenu;
