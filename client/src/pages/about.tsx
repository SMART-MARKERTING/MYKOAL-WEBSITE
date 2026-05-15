import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Star, Calendar, TrendingUp, RefreshCw } from "lucide-react";
import headshotImage from "@assets/IMG_0016_1751000995747.jpeg";
import { useCalModal } from "@/hooks/use-cal";

const LENDING_PAD_URL =
  "https://prod.lendingpad.com/adaxa-home/pos#/?loid=dabbfd28-9b5f-46b8-9029-aa478433a995";

const specializations = [
  {
    category: "Refinance",
    items: ["Cash-out refinance", "Rate & term refinance", "Home equity solutions"],
  },
  {
    category: "Purchase Loans",
    items: ["Conventional & Jumbo", "FHA loans", "VA loans"],
  },
  {
    category: "HELOC & Home Equity",
    items: ["Home equity lines of credit", "Home equity loans", "Second mortgages"],
  },
  {
    category: "Investor Financing",
    items: ["DSCR loans", "Non-QM programs", "Bank statement loans", "Hard money"],
  },
];

const credentials = [
  "7+ years in the mortgage industry",
  "Vice President | Senior Loan Officer at Adaxa Home LLC",
  "Personal NMLS #1912347",
  "Adaxa Home LLC NMLS #2380533",
  "Licensed in Arizona and additional states",
  "Network of 99+ wholesale lenders including Rocket Mortgage, loanDepot, Carrington Mortgage, and CAKE",
];

export default function About() {
  const openCal = useCalModal();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <SiteNav />
      <div className="container max-w-md mx-auto px-4 pt-24 pb-6">

        {/* Hero */}
        <div className="text-center mb-10">
          <img
            src={headshotImage}
            alt="Mykoal DeShazo"
            className="w-36 h-36 rounded-full object-cover shadow-2xl border-4 border-white/20 mx-auto mb-5"
          />
          <h1 className="text-3xl font-bold text-white mb-1">Mykoal DeShazo</h1>
          <p className="text-[#00b4d8] font-semibold text-base uppercase tracking-wide mb-1">
            Vice President | Senior Loan Officer
          </p>
          <p className="text-blue-200/70 text-sm">Adaxa Home LLC · NMLS #1912347</p>
        </div>

        {/* My Story */}
        <section className="mb-10">
          <h2 className="text-white text-xl font-bold mb-5">My Story</h2>
          <div className="space-y-4 text-blue-100/80 text-sm leading-relaxed">
            <p>
              I got into mortgage because I genuinely believe that the right loan — handled by the right person — can change the trajectory of someone's financial life. Whether you're buying your first home, pulling equity to invest, or refinancing to free up cash flow, those decisions matter. I wanted to be the person who helps people make them well.
            </p>
            <p>
              Over the past seven years, I've worked with hundreds of clients across Arizona and beyond — first-time buyers nervous about the process, seasoned investors optimizing their portfolios, veterans using benefits they'd earned and deserved. Every file is different, and that's what keeps me sharp.
            </p>
            <p>
              I'm not a call center. When you work with me, you work with me directly. I answer my phone, I return messages, and I'll be honest with you even when the answer isn't what you hoped for. I'd rather set the right expectations upfront than have you frustrated at the closing table.
            </p>
            <p>
              Outside of mortgages, I'm driven by faith, family, and a deep belief that financial freedom is attainable for more people than most realize. I'm here to help you get there — one smart decision at a time.
            </p>
          </div>
        </section>

        {/* Credentials */}
        <section className="mb-10">
          <h2 className="text-white text-xl font-bold mb-5">Credentials & Experience</h2>
          <div className="bg-white/10 border border-white/20 rounded-xl p-5 space-y-3">
            {credentials.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-[#00b4d8] mt-0.5 flex-shrink-0" />
                <p className="text-blue-100/90 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Specializations */}
        <section className="mb-10">
          <h2 className="text-white text-xl font-bold mb-5">What I Specialize In</h2>
          <div className="space-y-4">
            {specializations.map((s, i) => (
              <div key={i} className="bg-white/10 border border-white/20 rounded-xl p-4">
                <h3 className="text-[#00b4d8] font-semibold text-sm uppercase tracking-wide mb-2">
                  {s.category}
                </h3>
                <ul className="space-y-1">
                  {s.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-blue-100/80 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00b4d8] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTAs */}
        <section className="space-y-3 mb-6">
          {/* HELOC + Refinance 2-col grid */}
          <div className="grid grid-cols-2 gap-3">
            <a
              href="https://smartr8.com/heloc"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 flex items-center justify-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Apply for HELOC
              </Button>
            </a>
            <div>
              <a
                href="https://smartr8.com/apply/cash-out"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="w-full bg-orange-700 hover:bg-orange-800 text-white font-semibold py-3 flex items-center justify-center gap-2">
                  <RefreshCw className="h-5 w-5" />
                  Apply for Refi
                </Button>
              </a>
              <a
                href="https://smartr8.com/apply/rate-reduction"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-blue-300/60 hover:text-blue-200 text-xs mt-1.5 transition-colors"
              >
                Rate reduction instead →
              </a>
            </div>
          </div>
          <Button
            onClick={openCal}
            className="w-full bg-[#0077a8] hover:bg-[#005f85] text-white font-semibold py-3 flex items-center justify-center gap-2"
          >
            <Calendar className="h-5 w-5" />
            Schedule a Call
          </Button>
          <a
            href="https://www.experience.com/reviews/mykoal-deshazo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 flex items-center justify-center gap-2">
              <Star className="h-5 w-5" />
              Client Reviews
            </Button>
          </a>
        </section>
      </div>
      <SiteFooter />
    </div>
  );
}
