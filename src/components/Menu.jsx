// TODO: remove eslint disable
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import './Menu.css';

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <p>MAIL</p>
        <p>LINKEDIN</p>
        <p>FACEBOOK</p>
      </div>
    );
  }
}

export default Menu;
