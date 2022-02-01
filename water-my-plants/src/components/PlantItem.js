import React, {useState} from 'react';
import EditPlantForm from './EditPlantForm';

export default function PlantItem (props) {
  const {plant, handleDelete, handleUpdatePlant} = props;

  const [formToggle, setFormToggle] = useState (false);

  return (
    <div className="plant-item-container">
      <div className="plant-item-img">
        <img src={plant.plant_image} alt="plant" width="100%" />
      </div>

      <div className="plant-item-info">
        <div className="plant-labels">
          <h4>{plant.nickname}</h4>
          <p>{plant.species}</p>
        </div>

        <div className="plant-links">
          <button
            className="edit"
            onClick={() => {
              setFormToggle (!formToggle);
            }}
          >
            edit
          </button>
          <button
            className="remove"
            onClick={() => handleDelete (plant.plant_id)}
          >
            remove
          </button>
          {formToggle &&
            <EditPlantForm
              plant={plant}
              handleUpdatePlant={handleUpdatePlant}
              formToggle={formToggle}
              setFormToggle={setFormToggle}
            />}
        </div>
      </div>
    </div>
  );
}
