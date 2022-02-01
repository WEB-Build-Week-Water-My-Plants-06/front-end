import React, {useState} from 'react';

const initialFormValues = {
  username: '',
  password: '',
  phone_number: '',
};

export default function Login (props) {
  const [formValues, setFormValues] = useState(initialFormValues);

  const login = () => {

  };

  const onChange = e => {
    setFormValues ({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = e => {
    e.preventDefault ();
    login();
  };

  return (
    <form className="form-container login-form" onSubmit={onSubmit}>
      <div className="form-title">
        <h1>Login</h1>
      </div>
      <div className="formGroup">
        <div className="username-input form-spacing">
          <label>Username:&nbsp;</label>
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
