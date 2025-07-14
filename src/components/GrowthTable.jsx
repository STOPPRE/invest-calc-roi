import React from 'react';
import { currencyFormatter } from '../utils/calculations';

const GrowthTable = ({ schedule1, schedule2, isAdjusted, name1, name2 }) => {
  const headerSuffix = isAdjusted ? " (Real)" : " Balance";
  const diffSuffix = isAdjusted ? " (Real)" : "";

  return (
    <div className="bg-surface p-6 rounded-xl shadow-md">
      <h3 className="text-2xl font-bold mb-4 text-center text-text font-heading">Month-by-Month Growth</h3>
      <div className="max-h-[600px] overflow-auto custom-scrollbar">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50 sticky top-0">
            <tr>
              <th className="px-2 sm:px-6 py-3 text-left text-xs font-semibold text-textLight uppercase">Month</th>
              <th className="px-2 sm:px-6 py-3 text-left text-xs font-semibold text-textLight uppercase">{`${name1}${headerSuffix}`}</th>
              <th className="px-2 sm:px-6 py-3 text-left text-xs font-semibold text-textLight uppercase">{`${name2}${headerSuffix}`}</th>
              <th className="hidden sm:table-cell px-2 sm:px-6 py-3 text-left text-xs font-semibold text-textLight uppercase">{`Difference${diffSuffix}`}</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {schedule1.slice(1).map((entry, index) => {
              const balance1 = entry.balance;
              const balance2 = schedule2[index + 1].balance;
              const difference = balance2 - balance1;
              return (
                <tr key={entry.month}>
                  <td className="px-2 sm:px-6 py-4 whitespace-nowrap text-sm text-textLight">{entry.month}</td>
                  <td className="px-2 sm:px-6 py-4 whitespace-nowrap text-sm text-text">{currencyFormatter.format(balance1)}</td>
                  <td className="px-2 sm:px-6 py-4 whitespace-nowrap text-sm text-text">{currencyFormatter.format(balance2)}</td>
                  <td className="hidden sm:table-cell px-2 sm:px-6 py-4 whitespace-nowrap text-sm text-primary font-medium">{currencyFormatter.format(difference)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GrowthTable; 