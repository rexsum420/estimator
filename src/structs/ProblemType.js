const problemTypes = [
    {
      type: 'Engine',
      severityRange: {
        'Passenger Car': { min: 500, max: 4000 },
        'Multipurpose Vehicle': { min: 700, max: 4500 },
        'Truck': { min: 1000, max: 6000 },
        'Bus': { min: 1200, max: 7000 },
        'Motorcycle': { min: 300, max: 2000 },
        'Trailer': { min: 400, max: 2500 },
        'Incomplete Vehicle': { min: 800, max: 5000 },
      }
    },
    {
      type: 'Transmission',
      severityRange: {
        'Passenger Car': { min: 700, max: 5000 },
        'Multipurpose Vehicle': { min: 900, max: 5500 },
        'Truck': { min: 1200, max: 7000 },
        'Bus': { min: 1500, max: 8000 },
        'Motorcycle': { min: 500, max: 3000 },
        'Trailer': { min: 600, max: 3500 },
        'Incomplete Vehicle': { min: 1000, max: 6000 },
      }
    },
    {
      type: 'Wheels',
      severityRange: {
        'Passenger Car': { min: 200, max: 1000 },
        'Multipurpose Vehicle': { min: 250, max: 1200 },
        'Truck': { min: 300, max: 1500 },
        'Bus': { min: 400, max: 1800 },
        'Motorcycle': { min: 150, max: 800 },
        'Trailer': { min: 200, max: 900 },
        'Incomplete Vehicle': { min: 350, max: 1400 },
      }
    },
    {
      type: 'Battery',
      severityRange: {
        'Passenger Car': { min: 100, max: 500 },
        'Multipurpose Vehicle': { min: 150, max: 600 },
        'Truck': { min: 200, max: 700 },
        'Bus': { min: 250, max: 800 },
        'Motorcycle': { min: 50, max: 300 },
        'Trailer': { min: 100, max: 400 },
        'Incomplete Vehicle': { min: 150, max: 500 },
      }
    },
    {
      type: 'Electrical',
      severityRange: {
        'Passenger Car': { min: 200, max: 1000 },
        'Multipurpose Vehicle': { min: 250, max: 1200 },
        'Truck': { min: 300, max: 1500 },
        'Bus': { min: 400, max: 1800 },
        'Motorcycle': { min: 150, max: 800 },
        'Trailer': { min: 200, max: 900 },
        'Incomplete Vehicle': { min: 350, max: 1400 },
      }
    },
    {
      type: 'Fuel System',
      severityRange: {
        'Passenger Car': { min: 100, max: 500 },
        'Multipurpose Vehicle': { min: 150, max: 600 },
        'Truck': { min: 200, max: 700 },
        'Bus': { min: 250, max: 800 },
        'Motorcycle': { min: 50, max: 300 },
        'Trailer': { min: 100, max: 400 },
        'Incomplete Vehicle': { min: 150, max: 500 },
      }
    },
    {
      type: 'Brakes',
      severityRange: {
        'Passenger Car': { min: 200, max: 1000 },
        'Multipurpose Vehicle': { min: 250, max: 1200 },
        'Truck': { min: 300, max: 1500 },
        'Bus': { min: 400, max: 1800 },
        'Motorcycle': { min: 150, max: 800 },
        'Trailer': { min: 200, max: 900 },
        'Incomplete Vehicle': { min: 350, max: 1400 },
      }
    },
    {
      type: 'Suspension',
      severityRange: {
        'Passenger Car': { min: 100, max: 500 },
        'Multipurpose Vehicle': { min: 150, max: 600 },
        'Truck': { min: 200, max: 700 },
        'Bus': { min: 250, max: 800 },
        'Motorcycle': { min: 50, max: 300 },
        'Trailer': { min: 100, max: 400 },
        'Incomplete Vehicle': { min: 150, max: 500 },
      }
    },
    {
      type: 'Steering',
      severityRange: {
        'Passenger Car': { min: 200, max: 1000 },
        'Multipurpose Vehicle': { min: 250, max: 1200 },
        'Truck': { min: 300, max: 1500 },
        'Bus': { min: 400, max: 1800 },
        'Motorcycle': { min: 150, max: 800 },
        'Trailer': { min: 200, max: 900 },
        'Incomplete Vehicle': { min: 350, max: 1400 },
      }
    },
    {
      type: 'Cooling System',
      severityRange: {
        'Passenger Car': { min: 150, max: 1200 },
        'Multipurpose Vehicle': { min: 200, max: 1500 },
        'Truck': { min: 300, max: 2000 },
        'Bus': { min: 400, max: 2500 },
        'Motorcycle': { min: 100, max: 800 },
        'Trailer': { min: 150, max: 900 },
        'Incomplete Vehicle': { min: 250, max: 1400 },
      }
    },
    {
      type: 'Exhaust System',
      severityRange: {
        'Passenger Car': { min: 150, max: 1200 },
        'Multipurpose Vehicle': { min: 200, max: 1500 },
        'Truck': { min: 300, max: 2000 },
        'Bus': { min: 400, max: 2500 },
        'Motorcycle': { min: 100, max: 800 },
        'Trailer': { min: 150, max: 900 },
        'Incomplete Vehicle': { min: 250, max: 1400 },
      }
    },
    {
      type: 'Climate Control',
      severityRange: {
        'Passenger Car': { min: 150, max: 1000 },
        'Multipurpose Vehicle': { min: 200, max: 1200 },
        'Truck': { min: 300, max: 1500 },
        'Bus': { min: 400, max: 1800 },
        'Motorcycle': { min: 100, max: 700 },
        'Trailer': { min: 150, max: 800 },
        'Incomplete Vehicle': { min: 250, max: 1200 },
      }
    },
    {
      type: 'Bodywork',
      severityRange: {
        'Passenger Car': { min: 500, max: 3000 },
        'Multipurpose Vehicle': { min: 600, max: 3500 },
        'Truck': { min: 800, max: 5000 },
        'Bus': { min: 1000, max: 6000 },
        'Motorcycle': { min: 300, max: 2000 },
        'Trailer': { min: 400, max: 2500 },
        'Incomplete Vehicle': { min: 600, max: 4000 },
      }
    },
    {
      type: 'Glass',
      severityRange: {
        'Passenger Car': { min: 100, max: 1000 },
        'Multipurpose Vehicle': { min: 150, max: 1200 },
        'Truck': { min: 200, max: 1500 },
        'Bus': { min: 300, max: 1800 },
        'Motorcycle': { min: 50, max: 800 },
        'Trailer': { min: 100, max: 1000 },
        'Incomplete Vehicle': { min: 150, max: 1200 },
      }
    },
    {
      type: 'Interior',
      severityRange: {
        'Passenger Car': { min: 200, max: 2000 },
        'Multipurpose Vehicle': { min: 250, max: 2500 },
        'Truck': { min: 300, max: 3000 },
        'Bus': { min: 400, max: 3500 },
        'Motorcycle': { min: 100, max: 1500 },
        'Trailer': { min: 150, max: 2000 },
        'Incomplete Vehicle': { min: 200, max: 2500 },
      }
    },
    {
      type: 'Alignment',
      severityRange: {
        'Passenger Car': { min: 100, max: 500 },
        'Multipurpose Vehicle': { min: 150, max: 600 },
        'Truck': { min: 200, max: 700 },
        'Bus': { min: 250, max: 800 },
        'Motorcycle': { min: 50, max: 300 },
        'Trailer': { min: 100, max: 400 },
        'Incomplete Vehicle': { min: 150, max: 500 },
      }
    },
    {
      type: 'Other',
      severityRange: {
        'Passenger Car': { min: 100, max: 5000 },
        'Multipurpose Vehicle': { min: 150, max: 6000 },
        'Truck': { min: 200, max: 8000 },
        'Bus': { min: 250, max: 9000 },
        'Motorcycle': { min: 50, max: 3000 },
        'Trailer': { min: 100, max: 4000 },
        'Incomplete Vehicle': { min: 150, max: 7000 },
      }
    }
  ];

export default problemTypes;