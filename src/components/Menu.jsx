import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SlideLink from './SlideLink';

const MenuWrapper = styled.div`
  z-index: 2;
  display: flex;
  position: fixed;
  top: 50%;
  right: 28px;
  transform: rotate(-90deg) translateX(50%);
  transform-origin: top right;
}`;

const MenuSlideLink = styled(SlideLink)`
  font-family: ${props => props.theme.typography.heading.fontFamily};
  color: ${props => ((props.contrast) ? props.theme.color.contrast : props.theme.color.primary)}
  opacity: ${props => props.theme.opacity.dark};
  font-size: 16px;
  margin-right: 10px;
  padding-left: 4px;
  padding-right: 4px;
}`;

function Menu(props) {
  return (
    <MenuWrapper>
      <MenuSlideLink contrast={props.contrast} href="mailto:mathieu.roussilhe@gmail.com">mathieu.roussilhe@gmail.com</MenuSlideLink>
    </MenuWrapper>
  );
}

Menu.propTypes = {
  contrast: PropTypes.bool.isRequired,
};

export default Menu;
