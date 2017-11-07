import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar">
       <Link to={'/'}><div>Home</div></Link>
       <Link to={'/canvas'}><div>Canvas</div></Link>
       <Link to={'/aboutus'}> About Us </Link>
      </div>
    );
  }
}

export default NavBar;
