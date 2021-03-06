import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

export default function AddPlantForm() {
  const initialValues = {
    nickname: '',
    species: '',
    h20_freq: '',
    plant_image: '',
    user_id: localStorage.id,
  };
  const [values, setValues] = useState(initialValues);
  const { push } = useHistory();

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleAdd = event => {
    event.preventDefault();
    axiosWithAuth()
      .post('/plants/add', values)
      .then(resp => {
        push('/plants');
      })
      .catch(err => {
        console.log({err});
      });
  };

  return(
    <form className="form-container login-form" onSubmit={handleAdd}>
      <div className="form-title">
        <h1>Add A Plant</h1>
      </div>
      <div className="formGroup">
        <div className="username-input form-spacing">
          <label>Nickname/Name: </label>
            <input name="nickname" type="text" onChange={handleChange} />
        </div>

        <div className="password-input form-spacing">
          <label>Species: </label>
          <input name="species" type="text" onChange={handleChange} />
        </div>

        <div className="password-input form-spacing">
          <label>Water Frequency: </label>
          <input name="h20_freq" type="text" onChange={handleChange} />
        </div>

        <div className="password-input form-spacing">
          <label>Image URL: </label>
          <input name="plant_image" type="text" onChange={handleChange} />
        </div>

        <div className="submit">
          <button id="submit-login">Submit</button>
        </div>
      </div>
    </form>
  );
};