import React, { useState } from 'react';
import { calculateARO, calculateSLE, calculateALE } from '../utils/calculations';
import { formatAssetValueDisplay, normalizeExposureFactor } from '../utils/formatters';

const RiskCalculator = () => {
  const [assetValue, setAssetValue] = useState('');
  const [exposureFactor, setExposureFactor] = useState('');
  const [frequency, setFrequency] = useState('');
  const [timeUnit, setTimeUnit] = useState('year');

  const handleAssetValueChange = (value) => {
    const normalizedValue = value.replace(/\./g, '');
    setAssetValue(normalizedValue);
  };

  const handleExposureFactorChange = (value) => {
    setExposureFactor(value);
  };

  const aro = calculateARO(Number(frequency), timeUnit);
  const sle = calculateSLE(Number(assetValue), Number(normalizeExposureFactor(exposureFactor)));
  const ale = calculateALE(sle, aro);

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      {/* Input fields */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Asset Value (NOK)</label>
          <input
            type="text"
            value={formatAssetValueDisplay(assetValue)}
            onChange={(e) => handleAssetValueChange(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="e.g., 12.000.000"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Exposure Factor</label>
          <input
            type="text"
            value={exposureFactor}
            onChange={(e) => handleExposureFactorChange(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="e.g., 0,5 or 0.5"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Frequency</label>
            <input
              type="number"
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter frequency"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Time Unit</label>
            <select
              value={timeUnit}
              onChange={(e) => setTimeUnit(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="day">Per Day</option>
              <option value="week">Per Week</option>
              <option value="month">Per Month</option>
              <option value="year">Per Year</option>
              {Array.from({ length: 10 }, (_, i) => (
                <option key={i + 1} value={`${i + 1} year${i > 0 ? 's' : ''}`}>
                  Every {i + 1} Year{i > 0 ? 's' : ''}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="mt-6 p-4 bg-gray-50 rounded">
        <h3 className="text-lg font-semibold mb-2">Results</h3>
        <div className="space-y-2">
          <p>ARO (Annual Rate of Occurrence): {aro.toFixed(2)}</p>
          <p>SLE (Single Loss Expectancy): NOK {sle.toLocaleString()}</p>
          <p>ALE (Annual Loss Expectancy): NOK {ale.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default RiskCalculator;