import React from 'react';
import styled from 'styled-components';

const MenuWrapper = styled.div`
  display: flex;
  position: fixed;
  top: 50%;
  left: 10px;
  transform: rotate(-90deg) translateX(-50%);
  transform-origin: top left;
}`;

const MenuLink = styled.a`
  margin-right: 8px;
  text-decoration: none;
  font-size: 14px;
  font-family: 'Montserrat Bold';
  color: ${props => props.theme.color.primary};
  opacity: ${props => props.theme.opacity.grey};
}`;


function Menu() {
  return (
    <MenuWrapper className="menu">
      <MenuLink href="#">MAIL</MenuLink>
      <MenuLink href="#">LINKEDIN</MenuLink>
      <MenuLink href="#">FACEBOOK</MenuLink>
    </MenuWrapper>
  );
}

export default Menu;
