import React, { useState } from 'react';
import 'assets/css/Step3.css'; // Assure-toi de créer et d'importer ce fichier CSS

const Step3 = ({ onNext, onPrevious, onChange }) => {
  const [formData, setFormData] = useState({
    declarant: '',
    declarationDate: '',
    civilOfficer: '',
    registryNumber: '',
    signatureParents: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'signatureParents') {
      setFormData({ ...formData, signatureParents: files[0] });
      onChange({ signatureParents: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
      onChange({ [name]: value });
    }
  };

  return (
    <div className="step-container">
      <h3><b>Declarant and Civil Officer Information</b></h3>
      <div className="form-group">
        <input
          type="text"
          name="declarant"
          placeholder="Declarant's Name"
          value={formData.declarant}
          onChange={handleChange}
          className="input-field"
        />
      </div>
      <div className="form-group">
        <input
          type="date"
          name="declarationDate"
          placeholder="Declaration Date"
          value={formData.declarationDate}
          onChange={handleChange}
          className="input-field"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="civilOfficer"
          placeholder="Civil Officer's Name"
          value={formData.civilOfficer}
          onChange={handleChange}
          className="input-field"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="registryNumber"
          placeholder="Registry Number"
          value={formData.registryNumber}
          onChange={handleChange}
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label className="file-upload-label">Parents' Signature (optional)</label>
        <input
          type="file"
          name="signatureParents"
          onChange={handleChange}
          className="input-field file-input"
        />
      </div>

      <div className="button-group">
        <button className="button white-button" onClick={onPrevious}>
          Previous
        </button>
        <button className="button green-button" onClick={onNext}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Step3;
