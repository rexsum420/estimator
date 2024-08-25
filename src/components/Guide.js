import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import problemTypes from '../structs/ProblemType';
import useVIN from '../utils/fetchVIN';
import useModalState from '../utils/useModalState';

const Guide = () => {
  const { currentModal, showModal, hideModal } = useModalState();
  const [vin, setVin] = useState('');
  const [vinData, setVinData] = useState(null);
  const [selectedProblems, setSelectedProblems] = useState([]);
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
  const [severity, setSeverity] = useState(1);
  const [problemsWithSeverity, setProblemsWithSeverity] = useState([]);
  const { vinData: fetchedVinData, error } = useVIN(vin);

  const handleVinSubmit = (vin) => {
    setVin(vin);
    setVinData(fetchedVinData);
    showModal('confirmCar');
  };

  const handleCarConfirm = () => {
    setSelectedProblems([]);
    setCurrentProblemIndex(0);
    showModal('problemsWithSeverity');
  };

  const handleCheckboxChange = (problemType) => {
    setSelectedProblems((prev) =>
      prev.includes(problemType)
        ? prev.filter((p) => p !== problemType)
        : [...prev, problemType]
    );
  };

  const handleProblemSubmit = () => {
    if (selectedProblems.length > 0) {
      setCurrentProblemIndex(0);
      showModal('problemSeverity');
    } else {
      alert('Please select at least one problem before proceeding.');
    }
  };

  const handleSeveritySubmit = () => {
    const problemWithSeverity = {
      type: selectedProblems[currentProblemIndex],
      severity,
    };
    setProblemsWithSeverity((prev) => [...prev, problemWithSeverity]);

    if (currentProblemIndex < selectedProblems.length - 1) {
      setCurrentProblemIndex((prev) => prev + 1);
    } else {
      showModal('quote');
    }
  };

  const getSeverityLabel = () => {
    if (severity <= 33) return 'Minor';
    if (severity <= 66) return 'No Major/Not Minor';
    return 'Major';
  };

  const calculateQuote = () => {
    if (!vinData || !problemsWithSeverity.length) return 0;

    const carType = vinData.find((entry) => entry.Variable === 'Vehicle Type')?.Value || '';

    return problemsWithSeverity.reduce((total, { type, severity }) => {
      const quote = problemTypes
        .find((problem) => problem.type === type)
        ?.severityRange[carType]?.min + (severity / 100) * (
          problemTypes.find((problem) => problem.type === type)
            ?.severityRange[carType]?.max -
          problemTypes.find((problem) => problem.type === type)
            ?.severityRange[carType]?.min
        );
      return total + (quote || 0);
    }, 0);
  };

  return (
    <div className="container mt-5">
      <h3>Enter VIN</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleVinSubmit(vin);
        }}
      >
        <input
          type="text"
          value={vin}
          onChange={(e) => setVin(e.target.value.toUpperCase())}
          placeholder="Enter VIN"
          className="form-control"
        />
        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>

      {vinData && (
        <>
          <Modal show={currentModal === 'confirmCar'} onHide={hideModal}>
            <Modal.Header closeButton>
              <Modal.Title>Confirm Vehicle Information</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {vinData
                .filter((entry) =>
                  ['Model Year', 'Make', 'Model', 'Vehicle Type', 'Body Class'].includes(entry.Variable)
                )
                .map((entry, index) => (
                  <div key={index} className="mb-2">
                    <strong>{entry.Variable}:</strong> {entry.Value}
                  </div>
                ))}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={hideModal}>
                Close
              </Button>
              <Button variant="primary" onClick={handleCarConfirm}>
                Confirm
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={currentModal === 'problemsWithSeverity'} onHide={hideModal}>
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
              <Button variant="secondary" onClick={hideModal}>
                Close
              </Button>
              <Button variant="primary" onClick={handleProblemSubmit}>
                Next
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={currentModal === 'problemSeverity'} onHide={hideModal}>
            <Modal.Header closeButton>
              <Modal.Title>
                Select Severity for {selectedProblems[currentProblemIndex]}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Range
                min={1}
                max={100}
                value={severity}
                onChange={(e) => setSeverity(parseInt(e.target.value))}
              />
              <div className="mt-2">
                <strong>Severity Level:</strong> {severity} ({getSeverityLabel()})
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => {
                  if (currentProblemIndex < selectedProblems.length) {
                    setCurrentProblemIndex(0);
                  }
                  hideModal();
                }}
              >
                Close
              </Button>
              <Button variant="primary" onClick={handleSeveritySubmit}>
                Next
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={currentModal === 'quote'} onHide={hideModal}>
            <Modal.Header closeButton>
              <Modal.Title>Quote</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h5>Total Estimated Quote: ${calculateQuote()}</h5>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={hideModal}>
                Close
              </Button>
              <Button variant="primary" onClick={hideModal}>
                Done
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Guide;
