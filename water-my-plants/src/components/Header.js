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
        <Link to='/'>Water My Plants</Link>
      </div>
      <nav className='nav-links'>
          { !isLoggedIn && <Link to='/login'>Sign In</Link> }
          { !isLoggedIn && <Link id='register-btn' to='/signup'>Register</Link> }
          { isLoggedIn && <Link id='myplants-btn' to='/plants'>My Plants</Link> }
          { isLoggedIn && <Link id='profile-btn' to='/profile'>Account</Link> } 
          { isLoggedIn && <Link id='add-btn' to='/add'>Add Plant</Link>}
          { isLoggedIn && <Link id='logout-btn' to='/logout'>Sign Out</Link> }
      </nav>
    </header>
  );
};