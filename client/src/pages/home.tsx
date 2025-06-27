import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import MortgageCalculator from "@/components/mortgage-calculator";
import LoanProducts from "@/components/loan-products";
import AboutSection from "@/components/about-section";
import Testimonials from "@/components/testimonials";
import BlogSection from "@/components/blog-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <MortgageCalculator />
      <LoanProducts />
      <AboutSection />
      <Testimonials />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
