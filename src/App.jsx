import { useState, useMemo } from 'react';
import InputForm from './components/InputForm';
import Results from './components/Results';
import GrowthChart from './components/GrowthChart';
import GrowthTable from './components/GrowthTable';
import SummaryCard from './components/SummaryCard';
import { calculateNominalGrowth, calculateRealValue, parseFormattedNumber } from './utils/calculations';

function App() {
  const [inputs, setInputs] = useState({
    initialInvestment: '',
    monthlyContribution: '',
    investmentTerm: '',
    adjustForInflation: false,
    inflationRate: 3,
    scenario1Name: 'Scenario 1',
    rate1: '',
    scenario2Name: 'Scenario 2',
    rate2: '',
  });

  const [submittedInputs, setSubmittedInputs] = useState(null);

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    const fieldsToFormat = ['initialInvestment', 'monthlyContribution'];

    let processedValue;

    if (type === 'checkbox') {
      processedValue = checked;
    } else if (fieldsToFormat.includes(id)) {
      processedValue = parseFormattedNumber(value);
    } else {
      processedValue = value;
    }

    setInputs(prevInputs => ({
      ...prevInputs,
      [id]: processedValue,
    }));
    setSubmittedInputs(null);
  };

  const handleCalculate = () => {
    // When calculating, parse all numeric string values to floats
    const parsedInputs = Object.entries(inputs).reduce((acc, [key, value]) => {
      const numericKeys = ['initialInvestment', 'monthlyContribution', 'investmentTerm', 'rate1', 'rate2', 'inflationRate'];
      if (numericKeys.includes(key) && typeof value === 'string') {
        acc[key] = parseFloat(parseFormattedNumber(value)) || 0;
      } else {
        acc[key] = value;
      }
      return acc;
    }, {});
    setSubmittedInputs(parsedInputs);
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
        <main className="py-8 sm:py-12 lg:py-16">
          <InputForm
            inputs={inputs}
            onInputChange={handleInputChange}
            onCalculate={handleCalculate}
          />
          {resultsData && (
            <Results
              results={resultsData}
              inputs={submittedInputs}
            />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
