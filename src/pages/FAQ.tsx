import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    q: "How long does a bespoke suit take to create?",
    a: "From the initial consultation to the final delivery, the bespoke process typically takes 6 to 8 weeks. This allows for multiple fittings to ensure absolute perfection."
  },
  {
    q: "Do I need an appointment?",
    a: "While we welcome walk-ins for our curated menswear collection, we highly recommend booking an appointment for custom tailoring consultations to ensure you receive our undivided attention."
  },
  {
    q: "What is the starting price for a custom suit?",
    a: "Our made-to-measure suits start at $1,800, while our fully bespoke suits start at $3,500. Pricing varies based on fabric selection and construction details."
  },
  {
    q: "Do you offer alterations on outside garments?",
    a: "Our master tailors dedicate their time to garments crafted in-house. However, we do offer select alteration services for existing clients on a case-by-case basis."
  },
  {
    q: "What brands do you carry in your ready-to-wear collection?",
    a: "We curate a selection of the finest heritage brands, including premium footwear, specialized knitwear from Scotland and Italy, and premium accessories that complement our bespoke offerings."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="bg-charcoal text-white pt-32 md:pt-40 pb-16 md:pb-24 px-6 text-center">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">Frequently Asked Questions</h1>
        <p className="text-white/70 max-w-2xl mx-auto tracking-wide text-base md:text-lg">
          Everything you need to know about the Judd Frost experience.
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 py-24 md:py-32">
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-charcoal/20 pb-6 mb-6">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center text-left group"
              >
                <h3 className="font-serif text-2xl group-hover:text-charcoal/70 transition-colors pr-8">
                  {faq.q}
                </h3>
                {openIndex === i ? (
                  <ChevronUp className="w-6 h-6 text-charcoal/60 shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-charcoal/60 shrink-0" />
                )}
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === i ? 'auto' : 0,
                  opacity: openIndex === i ? 1 : 0,
                  marginTop: openIndex === i ? 16 : 0,
                }}
                className="overflow-hidden"
              >
                <p className="text-charcoal/70 leading-relaxed text-lg">
                  {faq.a}
                </p>
              </motion.div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="text-charcoal/60 mb-6 text-sm tracking-widest uppercase">Still have questions?</p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-charcoal text-white text-sm tracking-widest uppercase hover:bg-charcoal/90 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
