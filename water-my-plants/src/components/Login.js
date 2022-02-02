import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';

const initialFormValues = {
  username: '',
  password: '',
  phone_number: '',
};

export default function Login (props) {
  const {setIsLoggedIn} = props;
  const [formValues, setFormValues] = useState(initialFormValues);
  const { push } = useHistory();

  const login = () => {
    axios
      .post ('https://water-my-plants-8.herokuapp.com/api/users/login', {
        username: formValues.username,
        password: formValues.password,
        phone_number: formValues.phone_number,
      })
      .then (res => {
        localStorage.setItem ('username', formValues.username);
        localStorage.setItem ('token', res.data.token);
        setIsLoggedIn (true);
        push('/plants');

        axiosWithAuth ()
          .get ('/users')
          .then (res => {
            localStorage.setItem ('id', res.data.user_id);
            localStorage.setItem ('phone_number', res.data.phone_number);
          });
      });
  };

  const onChange = e => {
    setFormValues ({
      ...formValues,
      [e.target.name]: e.target.value,
    });
    console.log (e.target.name, e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault ();
    login(formValues);
  };

  return (
    <form className="form-container login-form" onSubmit={onSubmit}>

      <div className="form-title">
        <h1>Login</h1>
      </div>
      <div className="formGroup">
        <div className="username-input form-spacing">
          <label>Email/Username:&nbsp;</label>
            <input
              name="username"
              type="text"
              value={formValues.username}
              onChange={onChange}
            />
        </div>

        <div className="password-input form-spacing">
          <label>Password:&nbsp;</label>
          <input
            name="password"
            type="password"
            value={formValues.password}
            onChange={onChange}
          />
        </div>

        <div className="submit">
          <button id="submit-login">Sign In</button>
          <p className="reroute">
            Don't have an account? Sign up <a href="/signup">here</a>!
          </p>
        </div>
      </div>
    </form>
  );
}
