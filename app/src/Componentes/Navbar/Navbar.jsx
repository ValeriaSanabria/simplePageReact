import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/content'>Content</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/counter'>Counter</Link>
        </li>
      </ul>
    </nav>
  )
}