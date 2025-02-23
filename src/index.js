import React from 'react';
import ReactDOM from 'react-dom';
import RiskCalculator from './components/RiskCalculator';

// Function to initialize the calculator
window.initRiskCalculator = function(containerId) {
  const container = document.getElementById(containerId);
  if (container) {
    ReactDOM.render(<RiskCalculator />, container);
  }
};