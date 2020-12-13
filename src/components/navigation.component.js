import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <nav className='navbar'>
        <Link to='/' className='navbar-brean'>Home</Link>
        <div>
        <ul className='navbar-nav'>
          <li className='navbar-item'>
            <Link to='/' className='nav-link'>Home</Link>
          </li>
          <li className='navbar-item'>
            <Link to='/about' className='nav-link'>About</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}