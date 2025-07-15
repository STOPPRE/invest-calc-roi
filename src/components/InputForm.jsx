import React from 'react';
import Header from './Header';
import Input from './Input';
import ToggleSwitch from './ToggleSwitch';
import ScenarioInput from './ScenarioInput';
import { formatNumberWithCommas } from '../utils/calculations';

const InputForm = ({ inputs, onInputChange, onCalculate }) => {
  return (
    <div className="bg-surface-card p-6 rounded-xl border border-primary mb-8">
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8">
        {/* Shared Inputs */}
        <div className="lg:col-span-1 p-6 rounded-xl">
          <h3 className="text-2xl font-bold mb-4 text-text font-heading">Initial Setup</h3>
          <div className="space-y-4">
            <Input
              label="Initial Investment ($)"
              id="initialInvestment"
              type="text"
              value={formatNumberWithCommas(inputs.initialInvestment)}
              onChange={onInputChange}
              placeholder="e.g., 1,000"
            />
            <Input
              label="Monthly Contribution ($)"
              id="monthlyContribution"
              type="text"
              value={formatNumberWithCommas(inputs.monthlyContribution)}
              onChange={onInputChange}
              placeholder="e.g., 200"
            />
            <Input
              label="Investment Term (Years)"
              id="investmentTerm"
              type="number"
              value={inputs.investmentTerm}
              onChange={onInputChange}
              placeholder="e.g., 20"
            />
            {/* Inflation Adjustment */}
            <div className="pt-4 border-t border-border">
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
                  placeholder="e.g., 3"
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
            placeholder="e.g., 5"
          />
          <ScenarioInput
            scenarioNumber={2}
            nameValue={inputs.scenario2Name}
            rateValue={inputs.rate2}
            onInputChange={onInputChange}
            placeholder="e.g., 8"
          />
        </div>
      </div>
      <div className="mt-8 text-center">
        <button
          onClick={onCalculate}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105"
        >
          Calculate Growth
        </button>
      </div>
    </div>
  );
};

export default InputForm; 