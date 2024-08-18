import React, { useState } from 'react';

const EnterVin = ({ onSubmit }) => {
  const [vin, setVin] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(vin);
  };

  return (
    <div>
      <h3>Enter VIN</h3>
      <form onSubmit={handleSubmit}>
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
    </div>
  );
};

export default EnterVin;
