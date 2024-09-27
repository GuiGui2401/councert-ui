import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import 'assets/css/AddButton.css'; // Fichier CSS personnalisé pour les styles

const AddButton = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    // Logique supplémentaire à exécuter lors de la validation
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button className="add-button" icon={<PlusOutlined />} onClick={showModal} style={{ width:'56px', height: '60px', position: 'absolute', right: '45px' }} />
      <Modal title="Add New Item" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Formulaire ou contenu à ajouter...</p>
      </Modal>
    </>
  );
};

export default AddButton;
