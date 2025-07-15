import React from 'react';
import SummaryCard from './SummaryCard';
import GrowthChart from './GrowthChart';
import GrowthTable from './GrowthTable';
import { currencyFormatter } from '../utils/calculations';

const Results = ({ results, inputs }) => {
  const { displaySchedule1, displaySchedule2 } = results;
  const { adjustForInflation, scenario1Name, scenario2Name, rate1, rate2, investmentTerm } = inputs;

  const finalBalance1 = displaySchedule1[displaySchedule1.length - 1].balance;
  const finalBalance2 = displaySchedule2[displaySchedule2.length - 1].balance;
  const finalDifference = finalBalance2 - finalBalance1;

  const labelSuffix = adjustForInflation ? " (Real Value)" : " Final Balance";
  const differenceLabel = "Difference in Final Value" + (adjustForInflation ? " (Real)" : "");

  return (
    <div className="bg-surface-card p-6 rounded-xl border border-primary mt-8">
      <h2 className="text-3xl font-bold text-text-DEFAULT text-center mb-8">Your Results</h2>
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          <SummaryCard title={`${scenario1Name}${labelSuffix}`} value={currencyFormatter.format(finalBalance1)} />
          <SummaryCard title={`${scenario2Name}${labelSuffix}`} value={currencyFormatter.format(finalBalance2)} />
          <SummaryCard title={differenceLabel} value={currencyFormatter.format(Math.abs(finalBalance2 - finalBalance1))} color="text-primary" />
        </div>
        <GrowthChart
          schedule1={displaySchedule1}
          schedule2={displaySchedule2}
          years={investmentTerm}
          isAdjusted={adjustForInflation}
          name1={`${scenario1Name} (${rate1}%)`}
          name2={`${scenario2Name} (${rate2}%)`}
        />
        <GrowthTable
          schedule1={displaySchedule1}
          schedule2={displaySchedule2}
          isAdjusted={adjustForInflation}
          name1={scenario1Name}
          name2={scenario2Name}
        />
      </div>
    </div>
  );
};

export default Results; 