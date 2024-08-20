import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const ProblemSeverityModal = ({ show, onHide, problems, onSubmit }) => {
  const [severity, setSeverity] = useState(1);

  useEffect(() => {
    setSeverity(1);
  }, [problems]);

  const handleSeverityChange = (level) => {
    setSeverity(level);
  };

  const handleSubmit = () => {
    const problemWithSeverity = {
      type: problems[0],
      severity,
    };
    onSubmit(problemWithSeverity);
    onHide();
  };

  const getSeverityLabel = () => {
    if (severity <= 33) return "Minor";
    if (severity <= 66) return "No Major/Not Minor";
    return "Major";
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Select Severity</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="form-group">
          <label>{problems[0]} Severity:</label>
          <Form.Range
            min={1}
            max={100}
            value={severity}
            onChange={(e) => handleSeverityChange(parseInt(e.target.value))}
          />
          <div className="mt-2">
            <strong>Severity Level:</strong> {severity} ({getSeverityLabel()})
          </div>
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
