import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ConfirmCar = ({ show, onHide, onConfirm, vinData }) => {
  const targetVariables = ['Model Year', 'Make', 'Model', 'Vehicle Type', 'Body Class'];

  const filteredData = vinData.filter(entry => 
    targetVariables.includes(entry.Variable) && entry.Value
  );

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Vehicle Information</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {filteredData.map((entry, index) => (
          <div key={index} className="mb-2">
            <strong>{entry.Variable}:</strong> {entry.Value}
          </div>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={onConfirm}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmCar;
