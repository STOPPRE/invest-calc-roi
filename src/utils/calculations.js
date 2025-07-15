/**
 * Calculates the nominal (not inflation-adjusted) investment growth.
 * @returns {Array<{month: number, balance: number}>}
 */
export function calculateNominalGrowth(principal, monthlyContribution, annualRate, years) {
    const schedule = [];
    let currentBalance = principal;
    const monthlyRate = annualRate / 100 / 12;
    const totalMonths = years * 12;

    schedule.push({ month: 0, balance: principal });

    for (let month = 1; month <= totalMonths; month++) {
        const interestEarned = currentBalance * monthlyRate;
        currentBalance += interestEarned + monthlyContribution;
        schedule.push({ month, balance: currentBalance });
    }
    return schedule;
}

/**
 * Adjusts a nominal growth schedule for inflation to show real value.
 * @returns {Array<{month: number, balance: number}>}
 */
export function calculateRealValue(nominalSchedule, annualInflationRate) {
    const monthlyInflationRate = annualInflationRate / 100 / 12;
    return nominalSchedule.map(entry => {
        const { month, balance } = entry;
        // Formula for Present Value: PV = FV / (1 + r)^n
        const realBalance = balance / Math.pow(1 + monthlyInflationRate, month);
        return { month, balance: realBalance };
    });
}

export const formatNumberWithCommas = (value) => {
  if (value === null || value === undefined || value === '') return '';
  const stringValue = String(value);
  const parts = stringValue.split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
};

export const parseFormattedNumber = (stringValue) => {
  if (typeof stringValue !== 'string') return stringValue;
  return stringValue.replace(/,/g, '');
};

export const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
}); 