import React from 'react';

const SummaryCard = ({ title, value, color = 'text-text' }) => {
  return (
    <div className="bg-background p-6 rounded-lg">
      <h4 className="text-base font-medium text-text-light">{title}</h4>
      <p className={`text-4xl font-bold ${color} mt-1`}>{value}</p>
    </div>
  );
};

export default SummaryCard; 