import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h2>Water My Plants</h2>
        <nav className='nav-links'>
          <Link className='link' to='/'>Home</Link>
          <Link className='link' to='/login'>Login</Link>
          <Link className='link' to='/profile'>My Profile</Link>
          <Link className='link' to='/plants'>Plant List</Link>
          <Link className='link' to='/logout'>Logout</Link>
        </nav>
    </header>
  )
}