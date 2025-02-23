// Handles all calculation logic
export const calculateARO = (freq, unit) => {
  const frequency = Number(freq);
  switch(unit) {
    case 'day': return frequency * 365;
    case 'week': return frequency * 52;
    case 'month': return frequency * 12;
    case 'year':
    case '1 year': return frequency;
    case '2 years': return frequency / 2;
    case '3 years': return frequency / 3;
    case '4 years': return frequency / 4;
    case '5 years': return frequency / 5;
    case '6 years': return frequency / 6;
    case '7 years': return frequency / 7;
    case '8 years': return frequency / 8;
    case '9 years': return frequency / 9;
    case '10 years': return frequency / 10;
    default: return frequency;
  }
};

export const calculateSLE = (assetValue, exposureFactor) => {
  return assetValue * exposureFactor;
};

export const calculateALE = (sle, aro) => {
  return sle * aro;
};