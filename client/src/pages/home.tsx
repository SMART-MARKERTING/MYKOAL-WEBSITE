import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import LoanProducts from "@/components/loan-products";
import MortgageCalculator from "@/components/mortgage-calculator";
import Testimonials from "@/components/testimonials";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <LoanProducts />
      <MortgageCalculator />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
}
