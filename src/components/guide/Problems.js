import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import problemTypes from '../../structs/ProblemType'; // Make sure this is correct

const Problems = ({ show, onHide, onSubmit }) => {
  const [selectedProblems, setSelectedProblems] = useState([]);

  const handleCheckboxChange = (problemType) => {
    setSelectedProblems(prev =>
      prev.includes(problemType)
        ? prev.filter(p => p !== problemType)
        : [...prev, problemType]
    );
  };

  const handleSubmit = () => {
    if (selectedProblems.length > 0) {
      onSubmit(selectedProblems);
      onHide();
    } else {
      alert("Please select at least one problem before proceeding.");
    }
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Select Problems</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {problemTypes.map(({ type }, index) => (
          <div key={index} className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id={type}
              checked={selectedProblems.includes(type)}
              onChange={() => handleCheckboxChange(type)}
            />
            <label className="form-check-label" htmlFor={type}>
              {type}
            </label>
          </div>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Next
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Problems;
