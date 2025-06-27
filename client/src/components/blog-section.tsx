import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@shared/schema";

export default function BlogSection() {
  // Static SEO-optimized content linking to dedicated pages
  const featuredPosts = [
    {
      id: 1,
      title: "Complete Guide to DSCR Loans for Investment Properties",
      excerpt: "Master debt service coverage ratio loans and unlock your real estate investment potential with expert guidance on qualification, rates, and property types.",
      category: "Investment Loans",
      link: "/blog/dscr-guide",
      gradient: "from-blue-600 to-blue-800",
      icon: "🏢"
    },
    {
      id: 2,
      title: "Startup Business Loans: Fuel Your Entrepreneurial Dreams",
      excerpt: "Comprehensive guide to securing startup funding and business loans for new entrepreneurs, including SBA loans, equipment financing, and alternative funding.",
      category: "Business Funding",
      link: "/blog/business-loans",
      gradient: "from-green-600 to-green-800",
      icon: "💼"
    },
    {
      id: 3,
      title: "Personal Loans: Quick Funding for Life's Opportunities",
      excerpt: "Access flexible personal financing solutions with competitive rates and fast approval for debt consolidation, home improvements, and major purchases.",
      category: "Personal Finance",
      link: "/blog/personal-loans",
      gradient: "from-purple-600 to-purple-800",
      icon: "💳"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Lending Resources</h2>
          <p className="text-xl text-gray-600">Expert insights and guides to help you make informed financing decisions</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <Card key={post.id} className="shadow-lg hover:shadow-xl transition-shadow">
              <div className={`h-48 bg-gradient-to-br ${post.gradient} rounded-t-xl flex items-center justify-center`}>
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">{post.icon}</div>
                  <div className="text-lg font-semibold">{post.category}</div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-blue-600 font-semibold mb-2">{post.category}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <Link href={post.link}>
                  <Button className="w-full accent-gradient text-white hover:opacity-90 flex items-center justify-center">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Resources Button */}
        <div className="text-center mt-12">
          <Link href="/resources">
            <Button size="lg" className="accent-gradient text-white hover:opacity-90 px-8 py-3">
              View All Resources
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
