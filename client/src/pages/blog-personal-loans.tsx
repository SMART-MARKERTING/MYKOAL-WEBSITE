import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, User, DollarSign, Clock, Shield, CheckCircle, CreditCard } from "lucide-react";
import { Link } from "wouter";

export default function PersonalLoansGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/">
              <Button variant="ghost" className="flex items-center">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <div className="text-lg font-semibold text-blue-600">Mykoal DeShazo, NMLS #1912347</div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Personal Loans: Quick Funding for Life's Opportunities
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Access flexible personal financing solutions with competitive rates and fast approval
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            <User className="h-5 w-5 mr-2" />
            Check Your Rate
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Introduction */}
        <Card className="mb-12 border-l-4 border-l-purple-600">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Personal Loans for Every Need</h2>
            <p className="text-gray-700 mb-4">
              Whether you're consolidating debt, funding a major purchase, or covering unexpected expenses, our personal loan programs offer the flexibility and competitive rates you need. No collateral required - just your creditworthiness.
            </p>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="text-purple-800 font-semibold">
                Fast funding with rates as low as 5.99% APR for qualified borrowers
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Loan Uses */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <DollarSign className="h-8 w-8 mr-3 text-purple-600" />
            What You Can Use Personal Loans For
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-green-600">Debt Consolidation</h3>
                <p className="text-gray-700 text-sm">Combine multiple high-interest debts into one lower payment</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-blue-600">Home Improvements</h3>
                <p className="text-gray-700 text-sm">Kitchen remodel, bathroom upgrades, or major repairs</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-500">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-orange-600">Major Purchases</h3>
                <p className="text-gray-700 text-sm">Appliances, furniture, or other large expenses</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-red-600">Medical Expenses</h3>
                <p className="text-gray-700 text-sm">Cover healthcare costs not covered by insurance</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-yellow-500">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-yellow-600">Special Events</h3>
                <p className="text-gray-700 text-sm">Wedding, vacation, or other life celebrations</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-purple-600">Emergency Expenses</h3>
                <p className="text-gray-700 text-sm">Unexpected costs that need immediate attention</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Loan Details */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <CreditCard className="h-8 w-8 mr-3 text-blue-600" />
            Personal Loan Details
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Loan Terms</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span>Loan Amount:</span>
                    <span className="font-semibold">$2,500 - $100,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Interest Rates:</span>
                    <span className="font-semibold">5.99% - 35.99% APR</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Loan Terms:</span>
                    <span className="font-semibold">2-7 years</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Monthly Payments:</span>
                    <span className="font-semibold">Fixed</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Prepayment:</span>
                    <span className="font-semibold">No penalties</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Requirements</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></span>
                    <span>Credit score 580+ (varies by program)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></span>
                    <span>Stable income verification</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></span>
                    <span>Debt-to-income ratio below 50%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></span>
                    <span>Valid bank account</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></span>
                    <span>Age 18+ and US citizen/resident</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <CheckCircle className="h-8 w-8 mr-3 text-green-600" />
            Why Choose Our Personal Loans
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Fast Funding</h3>
                <p className="text-gray-600 text-sm">Get approved in minutes and funded as soon as the next business day.</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">No Collateral</h3>
                <p className="text-gray-600 text-sm">Unsecured loans based on your creditworthiness - no assets at risk.</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Competitive Rates</h3>
                <p className="text-gray-600 text-sm">Access to multiple lenders ensures you get the best available rate.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Application Process */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Simple Application Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                <h3 className="font-semibold mb-2">Apply Online</h3>
                <p className="text-gray-600 text-sm">Complete our secure application in just 5 minutes</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                <h3 className="font-semibold mb-2">Get Approved</h3>
                <p className="text-gray-600 text-sm">Receive approval decision within minutes</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                <h3 className="font-semibold mb-2">Review Terms</h3>
                <p className="text-gray-600 text-sm">Review and accept your loan terms and rate</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                <h3 className="font-semibold mb-2">Get Funded</h3>
                <p className="text-gray-600 text-sm">Funds deposited directly to your bank account</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Your Personal Loan?</h2>
            <p className="text-xl mb-6 opacity-90">
              Check your rate in minutes without affecting your credit score.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Check My Rate
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                Call (623) 280-8351
              </Button>
            </div>
            <p className="text-sm mt-4 opacity-75">
              Mykoal DeShazo, NMLS #1912347 | Personal Lending Specialist
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}