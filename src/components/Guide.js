import React, { useState, useEffect } from 'react';
import EnterVin from './guide/EnterVIN';
import ConfirmCar from './guide/ConfirmCar';
import Problems from './guide/Problems';
import ProblemSeverityModal from './guide/ProblemSeverityModal';
import Quote from './guide/Quote';
import useVIN from '../utils/fetchVIN';
import useModalState from '../utils/useModalState';

const MemoizedConfirmCar = React.memo(ConfirmCar);
const MemoizedProblems = React.memo(Problems);
const MemoizedProblemSeverityModal = React.memo(ProblemSeverityModal);
const MemoizedQuote = React.memo(Quote);

const Guide = () => {
  const { currentModal, showModal, hideModal } = useModalState();
  const [vin, setVin] = useState('');
  const [selectedProblems, setSelectedProblems] = useState([]);
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
  const [problemsWithSeverity, setProblemsWithSeverity] = useState([]);
  const { vinData, error } = useVIN(vin);

  const handleVinSubmit = (vin) => {
    setVin(vin);
    showModal('confirmCar');
  };

  const handleCarConfirm = () => {
    showModal('problems');
  };

  const handleProblemsSubmit = (problems) => {
    console.log('Problems submitted:', problems);
    setSelectedProblems(problems);
    setCurrentProblemIndex(0);
    setProblemsWithSeverity([]);
    showModal('problemSeverity');
  };

  const handleSeveritySubmit = (problemWithSeverity) => {
    setProblemsWithSeverity(prev => [...prev, problemWithSeverity]);
    
    if (currentProblemIndex < selectedProblems.length - 1) {
      setCurrentProblemIndex(prev => prev + 1);
    } else {
      showModal('quote');
    }
  };

  const handleQuote = () => {
    hideModal();
  };

  useEffect(() => {
    console.log('Modal set:', currentModal);
  }, [currentModal]);

  return (
    <>
      <EnterVin onSubmit={handleVinSubmit} />
      {vinData && (
        <>
          <MemoizedConfirmCar
            show={currentModal === 'confirmCar'}
            onHide={hideModal}
            onConfirm={handleCarConfirm}
            vinData={vinData}
          />
          <MemoizedProblems
            show={currentModal === 'problems'}
            onHide={hideModal}
            onSubmit={handleProblemsSubmit}
          />
          {selectedProblems.length > 0 && (
            <MemoizedProblemSeverityModal
              show={currentModal === 'problemSeverity'}
              onHide={hideModal}
              problems={[selectedProblems[currentProblemIndex]]}
              onSubmit={handleSeveritySubmit}
            />
          )}
          <MemoizedQuote
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
