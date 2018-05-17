import styled, { keyframes } from 'styled-components';

// Slidebar animation
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

// SlideLink base component
const SlideLink = styled.a`
  text-decoration: none;
  position:relative;
  cursor: pointer

  &:before {
    content:'';
    position: absolute;
    width: 100%;
    height: 3px;
    top: 48%;
    background-color: ${props => props.theme.color.secondary};
    animation: ${slideOut} 0.25s cubic-bezier(.42, 0, .58, 1) 1 both;
  }
  &:hover:before {
    animation: ${slideIn} 0.25s cubic-bezier(.42, 0, .58, 1) 1 both;
  }
}`;


export default SlideLink;
