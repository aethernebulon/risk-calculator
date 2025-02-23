// Handles number formatting
export const formatAssetValueDisplay = (value) => {
  if (!value) return '';
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

export const normalizeExposureFactor = (value) => {
  // Allow both comma and period as decimal separator
  const validInput = value.replace(/[^0-9,\.]/g, '');
  return validInput.replace(',', '.');
};