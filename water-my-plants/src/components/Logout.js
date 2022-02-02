import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default function Logout(props) {
  const { push } = useHistory();
  const { setIsLoggedIn } = props;

  localStorage.removeItem('token');
  localStorage.removeItem('username');
  localStorage.removeItem('id');
  localStorage.removeItem('phone_number');

  useEffect(() => {
    setIsLoggedIn(false);
    push('/');
  }, []);
  
  return (
    <div></div>
  );
};