import { useState, useEffect } from 'react';

function useVIN(vin) {
  const [vinData, setVinData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVINData = async () => {
      try {
        const response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/${vin}?format=json`);
        if (!response.ok) {
          throw new Error('Failed to fetch VIN data');
        }
        const data = await response.json();
        setVinData(data.Results);
      } catch (error) {
        console.error(error);
        setError(error.message);
      }
    };

    if (vin) {
      fetchVINData();
    }
  }, [vin]);

  console.log(vinData);
  return { vinData, error };
}

export default useVIN;
