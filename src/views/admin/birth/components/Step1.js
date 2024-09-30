import React, { useState } from 'react';
import 'assets/css/Step1.css'; // Assure-toi de créer et d'importer ce fichier CSS

const Step1 = ({ onNext, onChange }) => {
  const [formData, setFormData] = useState({
    childLastName: '',
    childFirstName: '',
    childBirthDate: '',
    birthPlace: '',
    birthHospital: '',
    gender: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    onChange({ [name]: value });
  };

  return (
    <div className="step-container">
      <div className="form-group">
        <input
          type="text"
          name="childLastName"
          placeholder="Child's Last Name"
          value={formData.childLastName}
          onChange={handleChange}
          className="input-field"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="childFirstName"
          placeholder="Child's First Name"
          value={formData.childFirstName}
          onChange={handleChange}
          className="input-field"
        />
      </div>
      <div className="form-group">
        <input
          type="date"
          name="childBirthDate"
          placeholder="Date of Birth"
          value={formData.childBirthDate}
          onChange={handleChange}
          className="input-field"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="birthPlace"
          placeholder="Place of Birth (City/District)"
          value={formData.birthPlace}
          onChange={handleChange}
          className="input-field"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="birthHospital"
          placeholder="Birth Hospital (optional)"
          value={formData.birthHospital}
          onChange={handleChange}
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label className="gender-label">Gender:</label>
        <div className="gender-options">
          <label className="gender-option">
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === 'Male'}
              onChange={handleChange}
            />
            Male
          </label>
          <label className="gender-option">
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === 'Female'}
              onChange={handleChange}
            />
            Female
          </label>
        </div>
      </div>
      <div className="button-group">
        <button className="button green-button" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Step1;
