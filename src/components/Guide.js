import React, { useState, useEffect } from 'react';
import EnterVin from './guide/EnterVIN';
import ConfirmCar from './guide/ConfirmCar';
import Problems from './guide/Problems';
import ProblemSeverityModal from './guide/ProblemSeverityModal';
import Quote from './guide/Quote';
import useVIN from '../utils/fetchVIN';

const Guide = () => {
  const [vin, setVin] = useState('');
  const [currentModal, setCurrentModal] = useState(null);
  const [selectedProblems, setSelectedProblems] = useState([]);
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0); // Track the current problem for severity
  const [problemsWithSeverity, setProblemsWithSeverity] = useState([]);
  const { vinData, error } = useVIN(vin);

  const handleVinSubmit = (vin) => {
    setVin(vin);
    setCurrentModal('confirmCar');
  };

  const handleCarConfirm = () => {
    setCurrentModal('problems');
  };

  const handleProblemsSubmit = (problems) => {
    setSelectedProblems(problems);
    setCurrentProblemIndex(0); // Start with the first problem
    setProblemsWithSeverity([]);
    setCurrentModal('problemSeverity');
  };

  const handleSeveritySubmit = (problemWithSeverity) => {
    setProblemsWithSeverity(prev => [...prev, problemWithSeverity]);
    
    if (currentProblemIndex < selectedProblems.length - 1) {
      setCurrentProblemIndex(prev => prev + 1);
    } else {
      setCurrentModal('quote');
    }
  };

  const handleQuote = () => {
    setCurrentModal(null);
  };

  useEffect(() => {
    if (currentModal === 'quote' && currentProblemIndex < selectedProblems.length) {
      setCurrentProblemIndex(0);
    }
  }, [currentModal, selectedProblems.length]);

  return (
    <>
      <EnterVin onSubmit={handleVinSubmit} />
      {vinData && (
        <>
          <ConfirmCar
            show={currentModal === 'confirmCar'}
            onHide={() => setCurrentModal(null)}
            onConfirm={handleCarConfirm}
            vinData={vinData}
          />
          <Problems
            show={currentModal === 'problems'}
            onHide={() => setCurrentModal(null)}
            onSubmit={handleProblemsSubmit}
          />
          {selectedProblems.length > 0 && (
            <ProblemSeverityModal
              show={currentModal === 'problemSeverity'}
              onHide={() => setCurrentModal(null)}
              problems={[selectedProblems[currentProblemIndex]]}
              onSubmit={handleSeveritySubmit}
            />
          )}
          <Quote
            show={currentModal === 'quote'}
            onHide={handleQuote}
            problems={problemsWithSeverity}
          />
        </>
      )}
      {error && <p>{error}</p>}
    </>
  );
};

export default Guide;
