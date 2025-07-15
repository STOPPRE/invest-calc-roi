import React from 'react';
import Input from './Input';

const ScenarioInput = ({ scenarioNumber, nameValue, rateValue, onInputChange, placeholder }) => {
  const scenarioNameId = `scenario${scenarioNumber}Name`;
  const rateId = `rate${scenarioNumber}`;

  return (
    <div className="p-6 bg-background rounded-lg">
      <input
        type="text"
        id={scenarioNameId}
        value={nameValue}
        onChange={onInputChange}
        className="text-2xl font-bold text-text font-heading mb-4 w-full bg-transparent focus:outline-none"
      />
      <Input
        label="Annual Interest Rate (%)"
        id={rateId}
        type="number"
        value={rateValue}
        onChange={onInputChange}
        step="0.1"
        placeholder={placeholder}
      />
    </div>
  );
};

export default ScenarioInput; 