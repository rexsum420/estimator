import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const Quote = ({ show, onHide, problems }) => {
  const getQuote = () => {
    // Dummy calculation, replace with real logic
    return problems.reduce((total, { severity }) => total + severity * 100, 0);
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Quote</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Total Estimated Quote: ${getQuote()}</h5>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={onHide}>
          Done
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Quote;