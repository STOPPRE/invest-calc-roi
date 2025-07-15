import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { currencyFormatter } from '../utils/calculations';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const GrowthChart = ({ schedule1, schedule2, years, isAdjusted, name1, name2 }) => {
  const labels = Array.from({ length: years + 1 }, (_, i) => `Year ${i}`);

  const getYearlyData = (schedule) => {
    const yearlyData = [schedule[0].balance];
    for (let i = 1; i <= years; i++) {
      if (schedule[i * 12]) {
        yearlyData.push(schedule[i * 12].balance);
      }
    }
    return yearlyData;
  };

  const data = {
    labels,
    datasets: [
      {
        label: name1,
        data: getYearlyData(schedule1),
        borderColor: '#2563EB', // primary.DEFAULT
        backgroundColor: 'rgba(37, 99, 235, 0.1)',
        fill: true,
        tension: 0.3,
      },
      {
        label: name2,
        data: getYearlyData(schedule2),
        borderColor: '#F97316', // secondary.DEFAULT
        backgroundColor: 'rgba(249, 115, 22, 0.1)',
        fill: true,
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Years',
        },
      },
      y: {
        beginAtZero: true,
        ticks: { callback: (value) => currencyFormatter.format(value) },
        title: {
          display: true,
          text: isAdjusted ? "Today's Dollars (Real Value)" : "Future Dollars (Nominal Value)",
        },
      },
    },
    plugins: {
      legend: {
        position: 'bottom',
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.dataset.label || ''}: ${currencyFormatter.format(context.parsed.y)}`,
        },
      },
    },
  };

  return (
    <div className="bg-background p-6 rounded-lg">
      <h3 className="text-2xl font-bold mb-4 text-center text-text font-heading">Investment Growth Over Time</h3>
      <div className="relative h-96 w-full">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default GrowthChart; 