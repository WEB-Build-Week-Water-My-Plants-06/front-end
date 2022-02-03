import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  const { token, isLoggedIn, setIsLoggedIn } = props;

  useEffect(() => {
    token !== null ? setIsLoggedIn(true) : setIsLoggedIn(false)
  }, [token, setIsLoggedIn]);

  return (
    <header className='header-container'>
      <div className='watermyplants'>
        <Link className='link' to='/'>Home</Link>
      </div>
      <nav className='nav-links'>
          { !isLoggedIn && <Link className='link' to='/login'>Sign In</Link> }
          { !isLoggedIn && <Link className='link' id='register-btn' to='/signup'>Register</Link> }
          { isLoggedIn && <Link className='link' id='myplants-btn' to='/plants'>My Plants</Link> }
          { isLoggedIn && <Link className='link' id='profile-btn' to='/profile'>Account</Link> } 
          { isLoggedIn && <Link className='link' id='add-btn' to='/add'>Add Plant</Link>}
          { isLoggedIn && <Link className='link' id='logout-btn' to='/logout'>Sign Out</Link> }
      </nav>
    </header>
  );
};