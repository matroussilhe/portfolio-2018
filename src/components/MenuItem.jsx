import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SlideLink from './SlideLink';

const MenuItemSlideLink = styled(SlideLink)`
  position:relative;
  margin-right: 10px;
  text-transform: uppercase;
  font-size: 15px;
  font-family: 'Montserrat SemiBold';
  color: ${props => props.theme.color.primary};
  opacity: ${props => props.theme.opacity.dark};
}`;

function MenuItem(props) {
  return (
    <MenuItemSlideLink href={props.destination} target="_blank">{props.label}</MenuItemSlideLink>
  );
}

MenuItem.propTypes = {
  label: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MenuItem;
