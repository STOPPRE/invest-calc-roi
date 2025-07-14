import React from 'react';

const SummaryCard = ({ title, value, color = 'text-text' }) => {
  return (
    <div className="bg-surface p-6 rounded-xl shadow-md">
      <h4 className="text-base font-medium text-textLight">{title}</h4>
      <p className={`text-4xl font-bold ${color} mt-1`}>{value}</p>
    </div>
  );
};

export default SummaryCard; 