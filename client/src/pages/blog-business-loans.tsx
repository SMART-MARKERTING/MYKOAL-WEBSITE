import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Briefcase, DollarSign, Clock, TrendingUp, Users, Building2 } from "lucide-react";
import { Link } from "wouter";

export default function BusinessLoansGuidePage() {
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
      <section className="py-16 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Startup Business Loans: Fuel Your Entrepreneurial Dreams
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Comprehensive guide to securing startup funding and business loans for new entrepreneurs
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            <Briefcase className="h-5 w-5 mr-2" />
            Start Your Application
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Introduction */}
        <Card className="mb-12 border-l-4 border-l-green-600">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Starting a Business? We Have the Funding Solutions</h2>
            <p className="text-gray-700 mb-4">
              Launching a startup requires capital, and traditional banks often hesitate to fund new businesses. Our specialized startup business loan programs are designed to help entrepreneurs access the funding they need to turn their vision into reality.
            </p>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-green-800 font-semibold">
                We understand startups and have funding solutions when banks say no!
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Loan Types */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <DollarSign className="h-8 w-8 mr-3 text-green-600" />
            Startup Business Loan Options
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">SBA Startup Loans</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Up to $5 million funding</li>
                  <li>• Lower down payments (10-15%)</li>
                  <li>• Longer repayment terms</li>
                  <li>• Government-backed security</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-600">Equipment Financing</h3>
                <ul className="space-y-2 text-sm">
                  <li>• 100% equipment financing</li>
                  <li>• Equipment serves as collateral</li>
                  <li>• Fast approval process</li>
                  <li>• Preserve working capital</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-orange-600">Business Lines of Credit</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Flexible access to funds</li>
                  <li>• Pay interest only on used amount</li>
                  <li>• Perfect for cash flow gaps</li>
                  <li>• Revolving credit facility</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-red-600">Alternative Funding</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Revenue-based financing</li>
                  <li>• Merchant cash advances</li>
                  <li>• Invoice factoring</li>
                  <li>• Quick approval options</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Requirements */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Users className="h-8 w-8 mr-3 text-blue-600" />
            Startup Loan Requirements
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Basic Requirements</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
                    <span>Personal credit score 680+</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
                    <span>Detailed business plan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
                    <span>Industry experience preferred</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
                    <span>Personal investment in business</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Documentation Needed</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                    <span>Business formation documents</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                    <span>Financial projections</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                    <span>Personal financial statements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                    <span>Tax returns (personal)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <TrendingUp className="h-8 w-8 mr-3 text-purple-600" />
            Why Choose Our Startup Funding
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Fast Approval</h3>
                <p className="text-gray-600 text-sm">Many programs offer approval in 24-48 hours with streamlined processes.</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Startup Specialists</h3>
                <p className="text-gray-600 text-sm">We understand startup challenges and have programs specifically designed for new businesses.</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Personal Service</h3>
                <p className="text-gray-600 text-sm">Direct access to funding specialists who guide you through every step.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Industries We Fund</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              "Technology", "Healthcare", "Retail", "Food Service",
              "Professional Services", "Manufacturing", "Construction", "E-commerce",
              "Consulting", "Automotive", "Beauty/Wellness", "Transportation"
            ].map((industry, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-4">
                  <span className="font-medium text-gray-700">{industry}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-green-600 to-green-800 text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Fund Your Startup?</h2>
            <p className="text-xl mb-6 opacity-90">
              Let's discuss your business goals and find the perfect funding solution for your startup.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                Get Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                Call (623) 280-8351
              </Button>
            </div>
            <p className="text-sm mt-4 opacity-75">
              Mykoal DeShazo, NMLS #1912347 | Startup Funding Specialist
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}