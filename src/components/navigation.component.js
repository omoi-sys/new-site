import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
        <div className='navbar-collapse'>
        <ul className='navbar-nav mr-auto'>
          <li className='navbar-item'>
            <Link to='/new-site/' className='nav-link'>Home</Link>
          </li>
          <li className='navbar-item'>
            <Link to='/new-site/about' className='nav-link'>About</Link>
          </li>
          <li className='navbar-item'>
            <Link to='/new-site/projects' className='nav-link'>Projects</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}