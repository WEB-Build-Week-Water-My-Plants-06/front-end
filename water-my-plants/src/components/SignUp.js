import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import signUpSchema from '../validation/signUpSchema';

const initialFormValues = {
  username: '',
  password: '',
  phone_number: '',
  confirm: '',
};
const initialFormErrors = {
  username: '',
  password: '',
  phone_number: '',
  confirm: '',
};

export default function SignUp() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const { push } = useHistory();

  const signup = () => {
    axios
      .post('https://water-my-plants-8.herokuapp.com/api/users/register', {
        username: formValues.username,
        password: formValues.password,
        phone_number: formValues.phone_number
      })
      .then(res => {
        push('/login');
      })
      .catch(err => {
        console.log({err});
      })
  }

  const validate = (name, value) => {
    yup
      .reach(signUpSchema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ''}))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}));
  };

  const onChange = e => {
    validate(e.target.name, e.target.value);
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    signup();
  };

  return (
    <form className="form-container signup-form" onSubmit={onSubmit}>
      <div className="form-title">
        <h1>Sign Up</h1>
      </div>
      <div className="errors-container">
        <div>{formErrors.username}</div>
        <div>{formErrors.password}</div>
        <div>{formErrors.confirm}</div>
        <div>{formErrors.phone_number}</div>
      </div>
      <div className="formGroup">
        <div className="first-name-input form-spacing">
          <label>First Name: </label>
            <input
              name="first-name"
              type="text"
            />
        </div>

        <div className="last-name-input form-spacing">
          <label>Last Name: </label>
            <input
              name="last-name"
              type="text"
            />
        </div>

        <div className="username-input form-spacing">
          <label>Username: </label>
            <input
              name="username"
              type="text"
              value={formValues.username}
              onChange={onChange}
            />
        </div>

        <div className="email-input form-spacing">
          <label>Phone Number: </label>
            <input
              name="phone_number"
              type="text"
              value={formValues.phone_number}
              onChange={onChange}
            />
        </div>

        <div className="password-input form-spacing">
          <label>Password: </label>
          <input
            name="password"
            type="password"
            value={formValues.password}
            onChange={onChange}
          />
        </div>

        <div className="confirm-input form-spacing">
          <label>Confirm Password: </label>
          <input
            name="confirm"
            type="password"
            value={formValues.confirm}
            onChange={onChange}
          />
        </div>

        <div className="submit">
          <button id="submit-login">Sign Up</button>
          <p className="reroute">
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </form>
  );
}
