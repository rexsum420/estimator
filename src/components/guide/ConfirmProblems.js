import React from 'react';

const ConfirmProblems = ({ problems, onConfirm }) => {
  return (
    <div>
      <h3>Review Problems</h3>
      <ul>
        {problems.map((problem, index) => (
          <li key={index}>{problem.type} - Severity: {problem.severity}</li>
        ))}
      </ul>
      <button className="btn btn-primary" onClick={onConfirm}>Get Quote</button>
    </div>
  );
};

export default ConfirmProblems;
