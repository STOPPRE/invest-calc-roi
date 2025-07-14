import React from 'react';
import Input from './Input';

const ScenarioInput = ({ scenarioNumber, nameValue, rateValue, onInputChange }) => {
  const scenarioNameId = `scenario${scenarioNumber}Name`;
  const rateId = `rate${scenarioNumber}`;

  return (
    <div className="p-6 border border-gray-200 rounded-lg">
      <input
        type="text"
        id={scenarioNameId}
        value={nameValue}
        onChange={onInputChange}
        className="text-2xl font-bold text-text mb-4 bg-transparent w-full focus:outline-none focus:ring-0 focus:border-b-2 focus:border-primary p-1 -ml-1 font-heading"
      />
      <Input
        label="Annual Interest Rate (%)"
        id={rateId}
        type="number"
        value={rateValue}
        onChange={onInputChange}
        step="0.1"
      />
    </div>
  );
};

export default ScenarioInput; 