import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SlideLink from './SlideLink';

const RightMenuWrapper = styled.div`
  z-index: 2;
  display: flex;
  position: fixed;
  top: 50%;
  right: 28px;
  transform: rotate(-90deg) translateX(50%);
  transform-origin: top right;
}`;

const RightMenuSlideLink = styled(SlideLink)`
  font-family: ${props => props.theme.typography.heading.fontFamily};
  color: ${props => ((props.contrast) ? props.theme.color.contrast : props.theme.color.primary)}
  opacity: ${props => props.theme.opacity.dark};
  font-size: 16px;
  margin-right: 10px;
  padding-left: 4px;
  padding-right: 4px;
}`;

function RightMenu(props) {
  return (
    <RightMenuWrapper>
      <RightMenuSlideLink contrast={props.contrast} href="mailto:mathieu.roussilhe@gmail.com">mathieu.roussilhe@gmail.com</RightMenuSlideLink>
    </RightMenuWrapper>
  );
}

RightMenu.propTypes = {
  contrast: PropTypes.bool.isRequired,
};

export default RightMenu;
