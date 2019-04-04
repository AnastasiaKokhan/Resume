import React, { Component } from 'react';
import {Link} from 'react-router-dom';


import './menu.css';

class Menu extends Component {
render() {
    return (
      <div className="menu">
        <ul>
            <li><Link to="/">Resume</Link></li>
            <li><Link to="/weather">Weather</Link></li>
            <li><Link to="/list">List</Link></li>
        </ul>
      </div>
    );
  }
}

export default Menu;