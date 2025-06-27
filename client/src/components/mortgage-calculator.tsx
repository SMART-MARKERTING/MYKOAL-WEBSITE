import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { calculateMortgage } from "@/lib/mortgage-calculations";

export default function MortgageCalculator() {
  const [inputs, setInputs] = useState({
    homePrice: 400000,
    downPayment: 80000,
    downPaymentPercent: 20,
    interestRate: 6.5,
    loanTerm: 30,
    propertyTax: 5000,
    homeInsurance: 1200,
  });

  const [results, setResults] = useState({
    monthlyPayment: 0,
    monthlyPropertyTax: 0,
    monthlyInsurance: 0,
    totalMonthly: 0,
    loanAmount: 0,
    totalPayments: 0,
    totalInterest: 0,
  });

  useEffect(() => {
    const calculation = calculateMortgage(inputs);
    setResults(calculation);
  }, [inputs]);

  const updateInput = (key: string, value: number) => {
    setInputs(prev => {
      const updated = { ...prev, [key]: value };
      
      // Sync down payment percentage and dollar amount
      if (key === 'downPayment') {
        updated.downPaymentPercent = Math.round((value / updated.homePrice) * 100 * 10) / 10;
      } else if (key === 'downPaymentPercent') {
        updated.downPayment = Math.round(updated.homePrice * value / 100);
      }
      
      return updated;
    });
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="calculator" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Mortgage Calculator</h2>
          <p className="text-xl text-gray-600">Calculate your monthly payments and see what you can afford</p>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-start">
          {/* Calculator inputs */}
          <Card>
            <CardHeader>
              <CardTitle>Loan Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="homePrice">Home Price</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <Input
                    id="homePrice"
                    type="number"
                    value={inputs.homePrice}
                    onChange={(e) => updateInput('homePrice', Number(e.target.value))}
                    className="pl-8 text-lg"
                  />
                </div>
              </div>

              <div>
                <Label>Down Payment</Label>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                    <Input
                      type="number"
                      value={inputs.downPayment}
                      onChange={(e) => updateInput('downPayment', Number(e.target.value))}
                      className="pl-8"
                    />
                  </div>
                  <div className="relative">
                    <Input
                      type="number"
                      value={inputs.downPaymentPercent}
                      onChange={(e) => updateInput('downPaymentPercent', Number(e.target.value))}
                      className="pr-8"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">%</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="interestRate">Interest Rate</Label>
                  <div className="relative">
                    <Input
                      id="interestRate"
                      type="number"
                      step="0.01"
                      value={inputs.interestRate}
                      onChange={(e) => updateInput('interestRate', Number(e.target.value))}
                      className="pr-8"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">%</span>
                  </div>
                </div>
                <div>
                  <Label>Loan Term</Label>
                  <Select
                    value={inputs.loanTerm.toString()}
                    onValueChange={(value) => updateInput('loanTerm', Number(value))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="30">30 years</SelectItem>
                      <SelectItem value="15">15 years</SelectItem>
                      <SelectItem value="20">20 years</SelectItem>
                      <SelectItem value="25">25 years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="border-t pt-6">
                <h4 className="text-lg font-medium text-gray-900 mb-4">Additional Costs (Optional)</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="propertyTax">Property Tax (Annual)</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                      <Input
                        id="propertyTax"
                        type="number"
                        value={inputs.propertyTax}
                        onChange={(e) => updateInput('propertyTax', Number(e.target.value))}
                        className="pl-8"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="homeInsurance">Home Insurance (Annual)</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                      <Input
                        id="homeInsurance"
                        type="number"
                        value={inputs.homeInsurance}
                        onChange={(e) => updateInput('homeInsurance', Number(e.target.value))}
                        className="pl-8"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results display */}
          <div className="mt-8 lg:mt-0">
            <Card className="bg-blue-50 border-2 border-blue-100">
              <CardHeader>
                <CardTitle className="text-blue-900">Monthly Payment Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-blue-200">
                  <span className="text-gray-700">Principal & Interest</span>
                  <span className="text-2xl font-bold text-blue-900">
                    ${results.monthlyPayment.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-blue-200">
                  <span className="text-gray-700">Property Tax</span>
                  <span className="text-lg font-semibold text-gray-900">
                    ${results.monthlyPropertyTax.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-blue-200">
                  <span className="text-gray-700">Home Insurance</span>
                  <span className="text-lg font-semibold text-gray-900">
                    ${results.monthlyInsurance.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                  </span>
                </div>
                <div className="flex justify-between items-center py-4 bg-green-50 rounded-lg px-4 border-2 border-green-200">
                  <span className="text-lg font-semibold text-gray-900">Total Monthly Payment</span>
                  <span className="text-3xl font-bold text-green-600">
                    ${results.totalMonthly.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                  </span>
                </div>

                <div className="mt-8 p-6 bg-white rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Loan Summary</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Loan Amount:</span>
                      <span className="font-semibold">
                        ${results.loanAmount.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total of Payments:</span>
                      <span className="font-semibold">
                        ${results.totalPayments.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Interest:</span>
                      <span className="font-semibold">
                        ${results.totalInterest.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                      </span>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={scrollToContact}
                  className="w-full mt-6 accent-gradient text-white hover:opacity-90"
                >
                  Get Pre-Approved Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
