import React from 'react';
import styled from 'styled-components';

const MenuWrapper = styled.div`
  display: flex;
  position: fixed;
  top: 50%;
  left: 20px;
  transform: rotate(-90deg) translateX(-50%);
  transform-origin: top left;
}`;

const MenuLink = styled.a`
  font-size: 18px;
  font-family: 'Montserrat Bold';
  text-decoration: none;
  color: inherit;
  margin-right: 8px;
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
