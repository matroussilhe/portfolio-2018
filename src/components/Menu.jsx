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
  position:relative;
  margin-right: 10px;
  text-transform: uppercase;
  font-size: 15px;
  font-family: 'Montserrat SemiBold';
  color: ${props => ((props.contrast) ? props.theme.color.contrast : props.theme.color.primary)}
  opacity: ${props => props.theme.opacity.dark};
}`;

function Menu(props) {
  return (
    <MenuWrapper>
      <MenuSlideLink contrast={props.contrast} href="mailto:mathieu.roussilhe@gmail.com">mail</MenuSlideLink>
      <MenuSlideLink contrast={props.contrast} href="https://www.linkedin.com/in/mathieu-roussilhe-ba2759154/" target="_blank">linkedin</MenuSlideLink>
      <MenuSlideLink contrast={props.contrast} href="https://www.facebook.com/Mathieu.Roussilhe" target="_blank">facebook</MenuSlideLink>
    </MenuWrapper>
  );
}

Menu.propTypes = {
  contrast: PropTypes.bool.isRequired,
};

export default Menu;
