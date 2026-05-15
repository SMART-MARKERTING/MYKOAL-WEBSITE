import { useState } from "react";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import { ChevronDown, ChevronUp, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCalModal } from "@/hooks/use-cal";

const categories = [
  {
    name: "Refinance",
    faqs: [
      {
        q: "When does it make sense to refinance?",
        a: "Refinancing generally makes sense when you can lower your interest rate by at least 0.5–1%, reduce your monthly payment meaningfully, or access equity for a specific purpose. The key is calculating your break-even point — how many months until the savings offset the closing costs.",
      },
      {
        q: "How much does a refinance cost?",
        a: "Refinance closing costs typically range from 2–3% of the loan amount, covering appraisal, title, origination, and government fees. Some lenders offer no-cost refinance options where fees are rolled into the rate — a trade-off worth analyzing based on how long you plan to stay.",
      },
      {
        q: "Can I refinance if I have a second mortgage or HELOC?",
        a: "Yes, but it requires coordination. If you're refinancing your first mortgage, the second lien holder typically needs to agree to subordinate their lien. This is called subordination and is a standard process, though it adds a step to the timeline.",
      },
      {
        q: "How long does a refinance take?",
        a: "Most refinances close in 20–45 days depending on appraisal timing, title work, and lender capacity. Cash-out refinances or complex files may take longer. I'll give you a realistic timeline upfront so there are no surprises.",
      },
      {
        q: "Will refinancing hurt my credit score?",
        a: "Applying for a refinance triggers a hard credit inquiry, which may temporarily lower your score by a few points. However, if you're rate shopping, multiple mortgage inquiries within a 14–45 day window are typically treated as a single inquiry by credit bureaus.",
      },
    ],
  },
  {
    name: "Purchase",
    faqs: [
      {
        q: "How much do I need for a down payment?",
        a: "It depends on the loan type. Conventional loans start at 3% down, FHA loans require 3.5%, VA loans require zero down for eligible veterans, and DSCR investor loans typically require 20–25%. Down payment assistance programs are also available in many areas.",
      },
      {
        q: "What's the difference between pre-qualification and pre-approval?",
        a: "Pre-qualification is a quick estimate based on self-reported information. Pre-approval involves a full credit pull and income/asset verification — it's a much stronger signal to sellers and agents that you're a serious, qualified buyer.",
      },
      {
        q: "What credit score do I need to buy a home?",
        a: "FHA loans allow scores as low as 580 (or 500 with a larger down payment). Conventional loans typically require a 620 minimum, though better rates come with higher scores. VA loans don't have a published minimum, but most lenders look for 580–620 or above.",
      },
      {
        q: "Can I buy a home if I'm self-employed?",
        a: "Yes. Self-employed borrowers can qualify using tax returns (typically two years), bank statements, or P&L-based programs depending on the loan type. Bank statement loans are specifically designed for business owners with strong cash flow but complex tax returns.",
      },
      {
        q: "How do I know how much home I can afford?",
        a: "Lenders look at your debt-to-income ratio (DTI) — your monthly debt payments compared to your gross income. Most conventional loans cap DTI at 43–45%, though some programs allow higher. I'll run through your numbers in detail during our consultation.",
      },
    ],
  },
  {
    name: "HELOC",
    faqs: [
      {
        q: "How does a HELOC work?",
        a: "A HELOC is a revolving line of credit secured by your home's equity, similar to a credit card. During the draw period (typically 5–10 years), you can borrow, repay, and borrow again up to your credit limit. After the draw period ends, you enter repayment mode.",
      },
      {
        q: "How much can I borrow with a HELOC?",
        a: "Most lenders allow you to borrow up to 80–90% of your home's value minus your existing mortgage balance. So if your home is worth $500K and you owe $300K, you may qualify for a HELOC up to $100–150K depending on the lender's LTV limit.",
      },
      {
        q: "Are HELOC rates fixed or variable?",
        a: "Most HELOCs carry variable rates tied to the prime rate, which means your monthly payment can change. Some lenders offer fixed-rate lock options on a portion of your balance. If rate predictability matters to you, a home equity loan (fixed rate, lump sum) may be a better fit.",
      },
      {
        q: "Can I get a HELOC on an investment property?",
        a: "HELOCs on investment properties are available but harder to find and come with stricter guidelines — lower LTVs, higher rates, and stronger credit requirements. Some investors find a cash-out refinance more accessible on rental properties.",
      },
      {
        q: "What can I use HELOC funds for?",
        a: "HELOC funds can generally be used for anything — home improvements, debt consolidation, education, investing, or emergency reserves. There's no restriction on use, though using home equity wisely means understanding that your home is the collateral.",
      },
    ],
  },
  {
    name: "Credit & Qualifying",
    faqs: [
      {
        q: "How can I improve my credit score before applying?",
        a: "The fastest ways to boost your score: pay down revolving balances below 30% of the limit, avoid opening new accounts, dispute any errors on your credit report, and keep old accounts open to maintain history length. Even 30–60 days of strategic action can move the needle.",
      },
      {
        q: "Does my debt-to-income ratio matter as much as credit score?",
        a: "Both matter, but DTI is often the binding constraint that people overlook. You can have excellent credit but be denied if your monthly debt payments are too high relative to your income. Paying down installment loans or co-signers can sometimes resolve a DTI issue.",
      },
      {
        q: "What counts as income for mortgage qualification?",
        a: "Lenders count W-2 wages, self-employment income (averaged over 2 years), Social Security, pension, rental income, alimony, and more. The key is documentation — income must be verifiable and have a reasonable expectation of continuing.",
      },
      {
        q: "Can I qualify with a recent job change?",
        a: "Generally yes, especially if you stayed in the same field or moved up. Lenders want to see stability and a history of income. A job change within the same industry typically isn't a problem. Starting a new business is more complex and often requires 2 years of self-employment history.",
      },
    ],
  },
  {
    name: "Working with a Broker",
    faqs: [
      {
        q: "What's the difference between a mortgage broker and a bank?",
        a: "A mortgage broker like me works with many wholesale lenders to find you the best rate and program for your situation. A bank can only offer their own products. Brokers often have access to better pricing because wholesale lenders compete for the business.",
      },
      {
        q: "How does Mykoal get paid?",
        a: "I'm compensated through lender-paid compensation, which is disclosed upfront on your Loan Estimate. You don't pay me out of pocket — the lender pays a fee when the loan closes. This is standard for broker-model lending.",
      },
      {
        q: "How long have you been doing this?",
        a: "I've been in mortgage for 7+ years, holding the NMLS license since early in my career. I'm currently a Vice President and Senior Loan Officer at Adaxa Home LLC, working with a network of 99+ wholesale lenders.",
      },
      {
        q: "What makes you different from other loan officers?",
        a: "Direct access — you get my cell, not a call center. Creative problem-solving on complex files that other lenders decline. And I'll tell you the honest answer even when it's not what you want to hear. My 4.91-star rating across 54+ reviews reflects how I operate.",
      },
    ],
  },
];

export default function FAQ() {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const openCal = useCalModal();

  const toggle = (key: string) => setOpenItem(openItem === key ? null : key);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <SiteNav />
      <div className="container max-w-md mx-auto px-4 pt-24 pb-6">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-white mb-2">Frequently Asked Questions</h1>
          <p className="text-blue-200/70 text-sm">
            Plain answers to common mortgage questions from Mykoal DeShazo
          </p>
        </div>

        <div className="space-y-8">
          {categories.map((cat) => (
            <div key={cat.name}>
              <h2 className="text-[#00b4d8] text-xs font-bold uppercase tracking-widest mb-3">
                {cat.name}
              </h2>
              <div className="space-y-2">
                {cat.faqs.map((faq, i) => {
                  const key = `${cat.name}-${i}`;
                  const isOpen = openItem === key;
                  return (
                    <div
                      key={key}
                      className="bg-white/10 border border-white/20 rounded-xl overflow-hidden"
                    >
                      <button
                        className="w-full text-left px-5 py-4 flex items-center justify-between gap-3"
                        onClick={() => toggle(key)}
                      >
                        <span className="text-white text-sm font-medium">{faq.q}</span>
                        {isOpen ? (
                          <ChevronUp className="h-4 w-4 text-[#00b4d8] flex-shrink-0" />
                        ) : (
                          <ChevronDown className="h-4 w-4 text-blue-300/50 flex-shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-4">
                          <p className="text-blue-200/80 text-sm leading-relaxed">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 bg-[#0077a8]/30 border border-[#00b4d8]/30 rounded-xl p-6 text-center">
          <h3 className="text-white font-bold text-lg mb-2">Still have questions?</h3>
          <p className="text-blue-200/70 text-sm mb-4">
            Get straight answers on your specific situation — no obligation.
          </p>
          <Button
            onClick={openCal}
            className="bg-[#00b4d8] hover:bg-[#0099bb] text-white font-semibold px-6"
          >
            <Calendar className="h-4 w-4 mr-2" />
            Book a Free Call
          </Button>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
