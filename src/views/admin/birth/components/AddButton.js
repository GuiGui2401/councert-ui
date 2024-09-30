import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import 'assets/css/AddButton.css'; // Fichier CSS personnalisé pour les styles

// Import des étapes du RegistrationFlow
import Step1 from 'views/admin/birth/components/Step1.js';
import Step2 from 'views/admin/birth/components/Step2.js';
import Step3 from 'views/admin/birth/components/Step3.js';

const AddButton = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(1); // Pour gérer les étapes du formulaire
  const [formData, setFormData] = useState({}); // Pour stocker les données du formulaire

  // Gérer l'affichage de la modal
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    // Logique supplémentaire à exécuter lors de la validation finale
    console.log('Form data:', formData);
    setIsModalVisible(false); // Fermer la modal après soumission
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setCurrentStep(1); // Réinitialiser le formulaire à la première étape
    setFormData({}); // Réinitialiser les données
  };

  // Gérer le passage à l'étape suivante
  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  // Gérer le retour à l'étape précédente
  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  // Mettre à jour les données du formulaire
  const updateFormData = (newData) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
  };

  // Rendre le formulaire correspondant à l'étape actuelle
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 onNext={nextStep} onChange={updateFormData} />;
      case 2:
        return <Step2 onNext={nextStep} onPrevious={prevStep} onChange={updateFormData} />;
      case 3:
        return <Step3 onNext={handleOk} onPrevious={prevStep} onChange={updateFormData} />;
      default:
        return null;
    }
  };

  return (
    <>
      <Button
        className="add-button"
        icon={<PlusOutlined />}
        onClick={showModal}
        style={{ width: '56px', height: '60px', position: 'absolute', right: '45px' }}
      />
      <Modal
        title="Ajouter un acte de naissance"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null} // Désactiver le footer pour gérer la navigation entre les étapes manuellement
      >
        {renderStep()} {/* Affiche le contenu de l'étape actuelle */}
      </Modal>
    </>
  );
};

export default AddButton;
