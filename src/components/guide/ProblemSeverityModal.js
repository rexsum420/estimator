import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

const ProblemSeverityModal = ({ show, onHide, problems, onSubmit }) => {
  const [severity, setSeverity] = useState(1); // Default severity is 1 (Low)

  useEffect(() => {
    // Reset severity whenever a new problem is displayed
    setSeverity(1);
  }, [problems]);

  const handleSeverityChange = (level) => {
    setSeverity(level);
  };

  const handleSubmit = () => {
    const problemWithSeverity = {
      type: problems[0], // Since problems is now expected to be an array with one item
      severity,
    };
    onSubmit(problemWithSeverity); // Submit the current problem's severity
    onHide(); // Hide the modal after submission
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Select Severity</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="form-group">
          <label>{problems[0]} Severity:</label> {/* Display the current problem */}
          <select
            className="form-control"
            value={severity}
            onChange={(e) => handleSeverityChange(parseInt(e.target.value))}
          >
            <option value="1">Low</option>
            <option value="2">Medium</option>
            <option value="3">High</option>
          </select>
        </div>
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

export default ProblemSeverityModal;
