import React, { Component } from 'react';
import Menu from './Menu';

import './header.css';

class Header extends Component {
render() {
    return (
      <div className="container">
      <div className="header">
        <div className="row">
            
                 <Menu />
            </div>
        </div>
      </div>
    );
  }
}

export default Header;
