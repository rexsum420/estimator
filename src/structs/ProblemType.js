const problemTypes = [
    {
      type: 'Engine',
      severityRange: {
        'PASSENGER CAR': { min: 500, max: 4000 },
        'MULTIPURPOSE VEHICLE': { min: 700, max: 4500 },
        'TRUCK': { min: 1000, max: 6000 },
        'BUS': { min: 1200, max: 7000 },
        'MOTORCYCLE': { min: 300, max: 2000 },
        'TRAILER': { min: 400, max: 2500 },
        'INCOMPLETE VEHICLE': { min: 800, max: 5000 },
      }
    },
    {
      type: 'Transmission',
      severityRange: {
        'PASSENGER CAR': { min: 700, max: 5000 },
        'MULTIPURPOSE VEHICLE': { min: 900, max: 5500 },
        'TRUCK': { min: 1200, max: 7000 },
        'BUS': { min: 1500, max: 8000 },
        'MOTORCYCLE': { min: 500, max: 3000 },
        'TRAILER': { min: 600, max: 3500 },
        'INCOMPLETE VEHICLE': { min: 1000, max: 6000 },
      }
    },
    {
      type: 'Wheels',
      severityRange: {
        'PASSENGER CAR': { min: 200, max: 1000 },
        'MULTIPURPOSE VEHICLE': { min: 250, max: 1200 },
        'TRUCK': { min: 300, max: 1500 },
        'BUS': { min: 400, max: 1800 },
        'MOTORCYCLE': { min: 150, max: 800 },
        'TRAILER': { min: 200, max: 900 },
        'INCOMPLETE VEHICLE': { min: 350, max: 1400 },
      }
    },
    {
      type: 'Battery',
      severityRange: {
        'PASSENGER CAR': { min: 100, max: 500 },
        'MULTIPURPOSE VEHICLE': { min: 150, max: 600 },
        'TRUCK': { min: 200, max: 700 },
        'BUS': { min: 250, max: 800 },
        'MOTORCYCLE': { min: 50, max: 300 },
        'TRAILER': { min: 100, max: 400 },
        'INCOMPLETE VEHICLE': { min: 150, max: 500 },
      }
    },
    {
      type: 'Electrical',
      severityRange: {
        'PASSENGER CAR': { min: 200, max: 1000 },
        'MULTIPURPOSE VEHICLE': { min: 250, max: 1200 },
        'TRUCK': { min: 300, max: 1500 },
        'BUS': { min: 400, max: 1800 },
        'MOTORCYCLE': { min: 150, max: 800 },
        'TRAILER': { min: 200, max: 900 },
        'INCOMPLETE VEHICLE': { min: 350, max: 1400 },
      }
    },
    {
      type: 'Fuel System',
      severityRange: {
        'PASSENGER CAR': { min: 100, max: 500 },
        'MULTIPURPOSE VEHICLE': { min: 150, max: 600 },
        'TRUCK': { min: 200, max: 700 },
        'BUS': { min: 250, max: 800 },
        'MOTORCYCLE': { min: 50, max: 300 },
        'TRAILER': { min: 100, max: 400 },
        'INCOMPLETE VEHICLE': { min: 150, max: 500 },
      }
    },
    {
      type: 'Brakes',
      severityRange: {
        'PASSENGER CAR': { min: 200, max: 1000 },
        'MULTIPURPOSE VEHICLE': { min: 250, max: 1200 },
        'TRUCK': { min: 300, max: 1500 },
        'BUS': { min: 400, max: 1800 },
        'MOTORCYCLE': { min: 150, max: 800 },
        'TRAILER': { min: 200, max: 900 },
        'INCOMPLETE VEHICLE': { min: 350, max: 1400 },
      }
    },
    {
      type: 'Suspension',
      severityRange: {
        'PASSENGER CAR': { min: 100, max: 500 },
        'MULTIPURPOSE VEHICLE': { min: 150, max: 600 },
        'TRUCK': { min: 200, max: 700 },
        'BUS': { min: 250, max: 800 },
        'MOTORCYCLE': { min: 50, max: 300 },
        'TRAILER': { min: 100, max: 400 },
        'INCOMPLETE VEHICLE': { min: 150, max: 500 },
      }
    },
    {
      type: 'Steering',
      severityRange: {
        'PASSENGER CAR': { min: 200, max: 1000 },
        'MULTIPURPOSE VEHICLE': { min: 250, max: 1200 },
        'TRUCK': { min: 300, max: 1500 },
        'BUS': { min: 400, max: 1800 },
        'MOTORCYCLE': { min: 150, max: 800 },
        'TRAILER': { min: 200, max: 900 },
        'INCOMPLETE VEHICLE': { min: 350, max: 1400 },
      }
    },
    {
      type: 'Cooling System',
      severityRange: {
        'PASSENGER CAR': { min: 150, max: 1200 },
        'MULTIPURPOSE VEHICLE': { min: 200, max: 1500 },
        'TRUCK': { min: 300, max: 2000 },
        'BUS': { min: 400, max: 2500 },
        'MOTORCYCLE': { min: 100, max: 800 },
        'TRAILER': { min: 150, max: 900 },
        'INCOMPLETE VEHICLE': { min: 250, max: 1400 },
      }
    },
    {
      type: 'Exhaust System',
      severityRange: {
        'PASSENGER CAR': { min: 150, max: 1200 },
        'MULTIPURPOSE VEHICLE': { min: 200, max: 1500 },
        'TRUCK': { min: 300, max: 2000 },
        'BUS': { min: 400, max: 2500 },
        'MOTORCYCLE': { min: 100, max: 800 },
        'TRAILER': { min: 150, max: 900 },
        'INCOMPLETE VEHICLE': { min: 250, max: 1400 },
      }
    },
    {
      type: 'Climate Control',
      severityRange: {
        'PASSENGER CAR': { min: 150, max: 1000 },
        'MULTIPURPOSE VEHICLE': { min: 200, max: 1200 },
        'TRUCK': { min: 300, max: 1500 },
        'BUS': { min: 400, max: 1800 },
        'MOTORCYCLE': { min: 100, max: 700 },
        'TRAILER': { min: 150, max: 800 },
        'INCOMPLETE VEHICLE': { min: 250, max: 1200 },
      }
    },
    {
      type: 'Bodywork',
      severityRange: {
        'PASSENGER CAR': { min: 500, max: 3000 },
        'MULTIPURPOSE VEHICLE': { min: 600, max: 3500 },
        'TRUCK': { min: 800, max: 5000 },
        'BUS': { min: 1000, max: 6000 },
        'MOTORCYCLE': { min: 300, max: 2000 },
        'TRAILER': { min: 400, max: 2500 },
        'INCOMPLETE VEHICLE': { min: 600, max: 4000 },
      }
    },
    {
      type: 'Glass',
      severityRange: {
        'PASSENGER CAR': { min: 100, max: 1000 },
        'MULTIPURPOSE VEHICLE': { min: 150, max: 1200 },
        'TRUCK': { min: 200, max: 1500 },
        'BUS': { min: 300, max: 1800 },
        'MOTORCYCLE': { min: 50, max: 800 },
        'TRAILER': { min: 100, max: 1000 },
        'INCOMPLETE VEHICLE': { min: 150, max: 1200 },
      }
    },
    {
      type: 'Interior',
      severityRange: {
        'PASSENGER CAR': { min: 200, max: 2000 },
        'MULTIPURPOSE VEHICLE': { min: 250, max: 2500 },
        'TRUCK': { min: 300, max: 3000 },
        'BUS': { min: 400, max: 3500 },
        'MOTORCYCLE': { min: 100, max: 1500 },
        'TRAILER': { min: 150, max: 2000 },
        'INCOMPLETE VEHICLE': { min: 200, max: 2500 },
      }
    },
    {
      type: 'Alignment',
      severityRange: {
        'PASSENGER CAR': { min: 100, max: 500 },
        'MULTIPURPOSE VEHICLE': { min: 150, max: 600 },
        'TRUCK': { min: 200, max: 700 },
        'BUS': { min: 250, max: 800 },
        'MOTORCYCLE': { min: 50, max: 300 },
        'TRAILER': { min: 100, max: 400 },
        'INCOMPLETE VEHICLE': { min: 150, max: 500 },
      }
    },
    {
      type: 'Other',
      severityRange: {
        'PASSENGER CAR': { min: 100, max: 5000 },
        'MULTIPURPOSE VEHICLE': { min: 150, max: 6000 },
        'TRUCK': { min: 200, max: 8000 },
        'BUS': { min: 250, max: 9000 },
        'MOTORCYCLE': { min: 50, max: 3000 },
        'TRAILER': { min: 100, max: 4000 },
        'INCOMPLETE VEHICLE': { min: 150, max: 7000 },
      }
    }
  ];
export default problemTypes;