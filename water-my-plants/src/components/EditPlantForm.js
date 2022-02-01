import React, {useState} from 'react';

export default function EditPlantForm(props) {
  const {plant, handleUpdatePlant, formToggle, setFormToggle} = props;
  const [formValues, setFormValues] = useState (plant);

  const onChange = event => {
    setFormValues ({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault ();
    handleUpdatePlant (formValues);
    setFormToggle (!formToggle);
  };

  return (
    <div className="edit-plant">
      <form className="form-container edit-form" onSubmit={handleSubmit}>
        <div className="form-title">
          <h1>Edit my plant</h1>
        </div>
        <div className="formGroup">
          <div className="form-spacing">
            <label>Nickname: &nbsp;</label>
            <input
              type="text"
              name="nickname"
              value={formValues.nickname}
              onChange={onChange}
            />
          </div>

          <div className="form-spacing">
            <label>Species: &nbsp;</label>
            <input
              type="text"
              name="species"
              value={formValues.species}
              onChange={onChange}
            />
          </div>

          <div className="form-spacing">
            <label>Water Frequency: &nbsp;</label>
            <input
              type="text"
              name="h20_freq"
              value={formValues.h20_freq}
              onChange={onChange}
            />
          </div>

          <div className="form-spacing">
            <label>Image URL: &nbsp;</label>
            <input
              type="text"
              name="plant_image"
              value={formValues.plant_image}
              onChange={onChange}
            />
          </div>

          <div className="submit">
            <button>submit</button>
            <button
              id="cancel"
              onClick={() => {
                setFormToggle (!formToggle);
              }}
            >
              cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};