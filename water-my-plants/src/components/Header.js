import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h2>Water My Plants</h2>
        <nav className='nav-links'>
          <Link to='/'>Home</Link>
          <Link to='/login'>Login</Link>
          <Link to='/logout'>Logout</Link>
        </nav>
    </header>
  )
}