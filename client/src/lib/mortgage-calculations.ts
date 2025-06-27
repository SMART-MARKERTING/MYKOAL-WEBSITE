interface MortgageInputs {
  loanAmount: number;
  interestRate: number;
  loanTerm: number;
  extraPayment?: number;
}

interface MortgageResults {
  monthlyPayment: number;
  totalPayments: number;
  totalInterest: number;
  effectiveInterestRate: number;
  payoffTime: number; // in months
  interestSavings: number;
  totalPaymentsWithExtra: number;
}

export function calculateMortgage(inputs: MortgageInputs): MortgageResults {
  const { loanAmount, interestRate, loanTerm, extraPayment = 0 } = inputs;

  const monthlyRate = interestRate / 100 / 12;
  const numPayments = loanTerm * 12;

  // Calculate standard monthly payment using mortgage formula
  let monthlyPayment = 0;
  if (monthlyRate > 0) {
    monthlyPayment = loanAmount * 
      (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
      (Math.pow(1 + monthlyRate, numPayments) - 1);
  } else {
    monthlyPayment = loanAmount / numPayments;
  }

  // Calculate standard loan without extra payments
  const totalPayments = monthlyPayment * numPayments;
  const totalInterest = totalPayments - loanAmount;

  // Calculate with extra payments using amortization schedule
  const { 
    totalInterestWithExtra, 
    payoffTimeMonths, 
    totalPaymentsWithExtra 
  } = calculateAmortizationWithExtra(loanAmount, monthlyRate, monthlyPayment, extraPayment);

  // Calculate effective interest rate
  const effectiveRate = calculateEffectiveInterestRate(
    loanAmount, 
    monthlyPayment + extraPayment, 
    payoffTimeMonths
  );

  const interestSavings = totalInterest - totalInterestWithExtra;

  return {
    monthlyPayment: Math.round(monthlyPayment),
    totalPayments: Math.round(totalPayments),
    totalInterest: Math.round(totalInterest),
    effectiveInterestRate: Math.round(effectiveRate * 100) / 100, // Round to 2 decimal places
    payoffTime: payoffTimeMonths,
    interestSavings: Math.round(interestSavings),
    totalPaymentsWithExtra: Math.round(totalPaymentsWithExtra),
  };
}

function calculateAmortizationWithExtra(
  principal: number, 
  monthlyRate: number, 
  monthlyPayment: number, 
  extraPayment: number
) {
  let balance = principal;
  let totalInterestPaid = 0;
  let totalPaymentsMade = 0;
  let monthCount = 0;
  const maxMonths = 360; // 30 years maximum

  while (balance > 0.01 && monthCount < maxMonths) {
    const interestPayment = balance * monthlyRate;
    const principalPayment = monthlyPayment - interestPayment;
    const totalMonthlyPayment = monthlyPayment + extraPayment;
    
    // Ensure we don't overpay
    const actualPayment = Math.min(totalMonthlyPayment, balance + interestPayment);
    const actualPrincipalPayment = actualPayment - interestPayment;
    
    balance -= actualPrincipalPayment;
    totalInterestPaid += interestPayment;
    totalPaymentsMade += actualPayment;
    monthCount++;
    
    if (balance <= 0) break;
  }

  return {
    totalInterestWithExtra: totalInterestPaid,
    payoffTimeMonths: monthCount,
    totalPaymentsWithExtra: totalPaymentsMade,
  };
}

function calculateEffectiveInterestRate(
  principal: number, 
  totalMonthlyPayment: number, 
  payoffMonths: number
): number {
  if (payoffMonths <= 0) return 0;
  
  // Use Newton-Raphson method to solve for effective monthly rate
  // PV = PMT * [1 - (1 + r)^-n] / r
  // Rearranging: f(r) = PV * r - PMT * [1 - (1 + r)^-n] = 0
  
  let rate = 0.005; // Initial guess (0.5% monthly)
  const tolerance = 0.0000001;
  const maxIterations = 100;
  
  for (let i = 0; i < maxIterations; i++) {
    const onePlusR = 1 + rate;
    const onePlusRToN = Math.pow(onePlusR, -payoffMonths);
    
    // Function value
    const f = principal * rate - totalMonthlyPayment * (1 - onePlusRToN);
    
    // Derivative
    const df = principal + totalMonthlyPayment * payoffMonths * onePlusRToN / onePlusR;
    
    const newRate = rate - f / df;
    
    if (Math.abs(newRate - rate) < tolerance) {
      rate = newRate;
      break;
    }
    
    rate = newRate;
    
    // Ensure rate stays positive
    if (rate < 0) rate = 0.001;
  }
  
  // Convert monthly rate to annual percentage
  return (Math.pow(1 + rate, 12) - 1) * 100;
}
