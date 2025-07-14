import React from 'react';
import Input from './Input';
import ToggleSwitch from './ToggleSwitch';
import ScenarioInput from './ScenarioInput';

const InputForm = ({ inputs, onInputChange, onCalculate }) => {
  return (
    <div className="bg-surface p-6 rounded-xl shadow-md mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Shared Inputs */}
        <div className="lg:col-span-1 p-6 bg-gray-50 rounded-xl">
          <h3 className="text-2xl font-bold mb-4 text-text font-heading">Initial Setup</h3>
          <div className="space-y-4">
            <Input
              label="Initial Investment ($)"
              id="initialInvestment"
              type="number"
              value={inputs.initialInvestment}
              onChange={onInputChange}
            />
            <Input
              label="Monthly Contribution ($)"
              id="monthlyContribution"
              type="number"
              value={inputs.monthlyContribution}
              onChange={onInputChange}
            />
            <Input
              label="Investment Term (Years)"
              id="investmentTerm"
              type="number"
              value={inputs.investmentTerm}
              onChange={onInputChange}
            />
            {/* Inflation Adjustment */}
            <div className="pt-4 border-t border-gray-200">
              <ToggleSwitch
                label="Adjust for Inflation?"
                id="adjustForInflation"
                checked={inputs.adjustForInflation}
                onChange={onInputChange}
              />
              <div className={`mt-2 ${!inputs.adjustForInflation && 'hidden'}`}>
                <Input
                  label="Annual Inflation Rate (%)"
                  id="inflationRate"
                  type="number"
                  value={inputs.inflationRate}
                  onChange={onInputChange}
                  step="0.1"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Investment Scenarios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:col-span-2 gap-6">
          <ScenarioInput
            scenarioNumber={1}
            nameValue={inputs.scenario1Name}
            rateValue={inputs.rate1}
            onInputChange={onInputChange}
          />
          <ScenarioInput
            scenarioNumber={2}
            nameValue={inputs.scenario2Name}
            rateValue={inputs.rate2}
            onInputChange={onInputChange}
          />
        </div>
      </div>
      <div className="mt-8 text-center">
        <button
          onClick={onCalculate}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-white bg-primary hover:bg-primaryDark focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105"
        >
          Calculate Growth
        </button>
      </div>
    </div>
  );
};

export default InputForm; 