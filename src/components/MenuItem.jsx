import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

// Slide animation
const slideIn = keyframes`
  from {
    width: 0;
    left: 0;
    right: auto;
  }
  to {
    width: 100%;
    left: 0;
    right: auto;
  }
`;

const slideOut = keyframes`
  from {
    width: 100%;
    left: auto;
    right: 0;
  }
  to {
    width: 0;
    left: auto;
    right: 0;
  }
`;

const MenuLink = styled.a`
  position:relative;
  margin-right: 10px;
  padding-left: 4px;
  padding-right: 4px;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 15px;
  font-family: 'Montserrat SemiBold';
  color: ${props => props.theme.color.primary};

  &:before {
    content:'';
    position: absolute;
    width: 100%;
    height: 3px;
    top: 42%;
    background-color: ${props => props.theme.color.secondary};
    opacity: ${props => props.theme.opacity.dark};
    animation: ${slideOut} 0.25s cubic-bezier(.42, 0, .58, 1) 1 both;
  }
  &:hover:before {
    animation: ${slideIn} 0.25s cubic-bezier(.42, 0, .58, 1) 1 both;
  }
}`;

function MenuItem(props) {
  return (
    <MenuLink href={props.destination} target="_blank">{props.label}</MenuLink>
  );
}

MenuItem.propTypes = {
  label: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MenuItem;
