import React, { useState } from 'react';
import 'assets/css/Step2.css'; // Assure-toi de créer et d'importer ce fichier CSS

const Step2 = ({ onNext, onPrevious, onChange }) => {
  const [formData, setFormData] = useState({
    fatherLastName: '',
    fatherFirstName: '',
    fatherBirthDate: '',
    fatherProfession: '',
    motherLastName: '',
    motherFirstName: '',
    motherBirthDate: '',
    motherProfession: '',
    parentsNationality: '',
    parentsAddress: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    onChange({ [name]: value });
  };

  return (
    <div className="step-container">
      <h3><b>Father's Information</b></h3>
      <div className="form-group">
        <input
          type="text"
          name="fatherLastName"
          placeholder="Father's Last Name"
          value={formData.fatherLastName}
          onChange={handleChange}
          className="input-field"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="fatherFirstName"
          placeholder="Father's First Name"
          value={formData.fatherFirstName}
          onChange={handleChange}
          className="input-field"
        />
      </div>
      <div className="form-group">
        <input
          type="date"
          name="fatherBirthDate"
          placeholder="Father's Date of Birth"
          value={formData.fatherBirthDate}
          onChange={handleChange}
          className="input-field"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="fatherProfession"
          placeholder="Father's Profession"
          value={formData.fatherProfession}
          onChange={handleChange}
          className="input-field"
        />
      </div>

      <h3><b>Mother's Information</b></h3>
      <div className="form-group">
        <input
          type="text"
          name="motherLastName"
          placeholder="Mother's Last Name"
          value={formData.motherLastName}
          onChange={handleChange}
          className="input-field"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="motherFirstName"
          placeholder="Mother's First Name"
          value={formData.motherFirstName}
          onChange={handleChange}
          className="input-field"
        />
      </div>
      <div className="form-group">
        <input
          type="date"
          name="motherBirthDate"
          placeholder="Mother's Date of Birth"
          value={formData.motherBirthDate}
          onChange={handleChange}
          className="input-field"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="motherProfession"
          placeholder="Mother's Profession"
          value={formData.motherProfession}
          onChange={handleChange}
          className="input-field"
        />
      </div>

      <h3><b>Additional Information</b></h3>
      <div className="form-group">
        <input
          type="text"
          name="parentsNationality"
          placeholder="Parents' Nationality"
          value={formData.parentsNationality}
          onChange={handleChange}
          className="input-field"
        />
      </div>
      <div className="form-group">
        <textarea
          name="parentsAddress"
          placeholder="Parents' Address"
          value={formData.parentsAddress}
          onChange={handleChange}
          className="input-field textarea-field"
        />
      </div>

      <div className="button-group">
        <button className="button white-button" onClick={onPrevious}>
          Previous
        </button>
        <button className="button green-button" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Step2;
