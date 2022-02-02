import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default function Logout() {
  const { push } = useHistory();

  localStorage.removeItem('token');
  localStorage.removeItem('username');
  localStorage.removeItem('id');
  localStorage.removeItem('phone_number');

  useEffect(() => {
    push('/');
  }, []);
  
  return (
    <div></div>
  )
}