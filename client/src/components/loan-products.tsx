import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Shield, Flag, Check } from "lucide-react";

const loanProducts = [
  {
    name: "Conventional",
    subtitle: "Most Popular",
    icon: Home,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    buttonColor: "bg-blue-600 hover:bg-blue-700",
    features: [
      "3% down payment options",
      "Competitive interest rates", 
      "No upfront mortgage insurance",
      "Primary & secondary homes"
    ]
  },
  {
    name: "FHA",
    subtitle: "Low Down Payment",
    icon: Shield,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    buttonColor: "bg-green-500 hover:bg-green-600",
    features: [
      "3.5% down payment",
      "Lower credit score requirements",
      "Government-backed security",
      "First-time buyer friendly"
    ]
  },
  {
    name: "VA",
    subtitle: "Veterans & Military",
    icon: Flag,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    buttonColor: "bg-blue-600 hover:bg-blue-700",
    features: [
      "$0 down payment",
      "No private mortgage insurance",
      "Competitive rates",
      "For eligible veterans"
    ]
  }
];

const currentRates = [
  { loanType: "30-Year Fixed", term: "30 years", rate: "6.375%", apr: "6.421%", points: "0.000" },
  { loanType: "15-Year Fixed", term: "15 years", rate: "5.875%", apr: "5.923%", points: "0.000" },
  { loanType: "FHA 30-Year", term: "30 years", rate: "6.250%", apr: "6.298%", points: "0.000" },
  { loanType: "VA 30-Year", term: "30 years", rate: "6.125%", apr: "6.175%", points: "0.000" },
];

export default function LoanProducts() {
  return (
    <section id="loans" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Loan Products</h2>
          <p className="text-xl text-gray-600">Find the perfect mortgage solution for your needs</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {loanProducts.map((product) => {
            const IconComponent = product.icon;
            return (
              <Card key={product.name} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className={`${product.iconBg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className={`${product.iconColor} h-8 w-8`} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                    <p className={`${product.iconColor} font-semibold`}>{product.subtitle}</p>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <Check className="text-green-500 mr-3 h-5 w-5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className={`w-full ${product.buttonColor} text-white`}>
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Current rates table */}
        <Card className="overflow-hidden">
          <div className="bg-blue-600 text-white py-6 px-8">
            <h3 className="text-2xl font-bold">Current Interest Rates</h3>
            <p className="text-blue-100">Updated daily - rates effective as of today</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Loan Type</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Term</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Rate</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">APR</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Points</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {currentRates.map((rate, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 text-sm text-gray-900">{rate.loanType}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{rate.term}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-blue-600">{rate.rate}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{rate.apr}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{rate.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="bg-gray-50 px-8 py-4">
            <p className="text-sm text-gray-600">
              Rates shown are for qualified borrowers and may vary based on loan amount, credit score, and other factors.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
