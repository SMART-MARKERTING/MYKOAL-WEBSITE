interface MortgageInputs {
  homePrice: number;
  downPayment: number;
  interestRate: number;
  loanTerm: number;
  propertyTax: number;
  homeInsurance: number;
}

interface MortgageResults {
  monthlyPayment: number;
  monthlyPropertyTax: number;
  monthlyInsurance: number;
  totalMonthly: number;
  loanAmount: number;
  totalPayments: number;
  totalInterest: number;
}

export function calculateMortgage(inputs: MortgageInputs): MortgageResults {
  const {
    homePrice,
    downPayment,
    interestRate,
    loanTerm,
    propertyTax,
    homeInsurance,
  } = inputs;

  const loanAmount = homePrice - downPayment;
  const monthlyRate = interestRate / 100 / 12;
  const numPayments = loanTerm * 12;

  // Calculate monthly payment using standard mortgage formula
  let monthlyPayment = 0;
  if (monthlyRate > 0) {
    monthlyPayment = loanAmount * 
      (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
      (Math.pow(1 + monthlyRate, numPayments) - 1);
  } else {
    // If interest rate is 0, simple division
    monthlyPayment = loanAmount / numPayments;
  }

  const monthlyPropertyTax = propertyTax / 12;
  const monthlyInsurance = homeInsurance / 12;
  const totalMonthly = monthlyPayment + monthlyPropertyTax + monthlyInsurance;

  const totalPayments = monthlyPayment * numPayments;
  const totalInterest = totalPayments - loanAmount;

  return {
    monthlyPayment: Math.round(monthlyPayment),
    monthlyPropertyTax: Math.round(monthlyPropertyTax),
    monthlyInsurance: Math.round(monthlyInsurance),
    totalMonthly: Math.round(totalMonthly),
    loanAmount: Math.round(loanAmount),
    totalPayments: Math.round(totalPayments),
    totalInterest: Math.round(totalInterest),
  };
}
