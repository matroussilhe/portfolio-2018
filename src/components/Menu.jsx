import React from 'react';
import styled from 'styled-components';

import MenuItem from './MenuItem';

const MenuWrapper = styled.div`
  display: flex;
  position: fixed;
  top: 50%;
  right: 28px;
  transform: rotate(-90deg) translateX(50%);
  transform-origin: top right;
}`;

function Menu() {
  return (
    <MenuWrapper>
      <MenuItem label="mail" destination="mailto:mathieu.roussilhe@gmail.com" />
      <MenuItem label="linkedin" destination="https://www.linkedin.com/in/mathieu-roussilhe-ba2759154/" />
      <MenuItem label="facebook" destination="https://www.facebook.com/Mathieu.Roussilhe" />
    </MenuWrapper>
  );
}

export default Menu;
