import { useState, useMemo } from 'react';
import Header from './components/Header';
import InputForm from './components/InputForm';
import Results from './components/Results';
import GrowthChart from './components/GrowthChart';
import GrowthTable from './components/GrowthTable';
import SummaryCard from './components/SummaryCard';
import { calculateNominalGrowth, calculateRealValue } from './utils/calculations';

function App() {
  const [inputs, setInputs] = useState({
    initialInvestment: 1000,
    monthlyContribution: 200,
    investmentTerm: 20,
    adjustForInflation: false,
    inflationRate: 3,
    scenario1Name: 'Scenario 1',
    rate1: 5,
    scenario2Name: 'Scenario 2',
    rate2: 8,
  });

  const [submittedInputs, setSubmittedInputs] = useState(null);

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    setInputs(prevInputs => ({
      ...prevInputs,
      [id]: type === 'checkbox' ? checked : type === 'number' && value !== '' ? parseFloat(value) : value,
    }));
    setSubmittedInputs(null);
  };

  const handleCalculate = () => {
    setSubmittedInputs(inputs);
  };

  const resultsData = useMemo(() => {
    if (!submittedInputs) return null;

    const { initialInvestment, monthlyContribution, investmentTerm, rate1, rate2, adjustForInflation, inflationRate } = submittedInputs;

    const nominalSchedule1 = calculateNominalGrowth(initialInvestment, monthlyContribution, rate1, investmentTerm);
    const nominalSchedule2 = calculateNominalGrowth(initialInvestment, monthlyContribution, rate2, investmentTerm);

    const displaySchedule1 = adjustForInflation ? calculateRealValue(nominalSchedule1, inflationRate) : nominalSchedule1;
    const displaySchedule2 = adjustForInflation ? calculateRealValue(nominalSchedule2, inflationRate) : nominalSchedule2;

    return { displaySchedule1, displaySchedule2 };
  }, [submittedInputs]);

  return (
    <div className="bg-gray-50 text-text font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <Header />
        <main className="py-8 sm:py-12 lg:py-16">
          <InputForm
            inputs={inputs}
            onInputChange={handleInputChange}
            onCalculate={handleCalculate}
          />
          {resultsData && (
            <Results
              results={resultsData}
              inputs={inputs}
            />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
