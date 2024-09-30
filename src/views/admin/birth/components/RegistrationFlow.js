import React, { useState } from 'react';
import Step1 from 'views/admin/birth/components/Step1.js';
import Step2 from 'views/admin/birth/components/Step2.js';
import Step3 from 'views/admin/birth/components/Step3.js';

const RegistrationFlow = () => {
  // State to track the current step of the registration flow
  const [step, setStep] = useState(1);
  // State to store form data across steps
  const [formData, setFormData] = useState({});

  // Function to move to the next step
  const handleNextStep = () => {
    setStep(step + 1);
  };

  // Function to move to the previous step
  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  // Function to handle form data changes across steps
  const handleFormDataChange = (data) => {
    setFormData({ ...formData, ...data });
  };

  return (
    <div>
      {step === 1 && <Step1 onNext={handleNextStep} onChange={handleFormDataChange} />}
      {step === 2 && <Step2 onNext={handleNextStep} onChange={handleFormDataChange} />}
      {step === 3 && <Step3 onPrevious={handlePreviousStep} />}
    </div>
  );
};

export default RegistrationFlow;
