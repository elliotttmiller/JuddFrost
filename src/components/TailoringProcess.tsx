import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  {
    id: '01',
    title: 'The Consultation',
    description: 'A private appointment to discuss your lifestyle, preferences, and the specific requirements for your garment. We guide you through our extensive library of world-class fabrics from mills like Loro Piana, Zegna, and Holland & Sherry.',
  },
  {
    id: '02',
    title: 'The Measurement',
    description: 'Over 30 precise measurements are taken to capture your unique posture, shoulder slope, and body nuances. This ensures a silhouette that is both flattering and incredibly comfortable.',
  },
  {
    id: '03',
    title: 'The Fitting',
    description: 'Once your garment is constructed, we conduct a meticulous fitting in our Wayzata shop. Our master tailors assess the drape and make any necessary micro-adjustments to achieve perfection.',
  },
  {
    id: '04',
    title: 'The Delivery',
    description: 'Your finished bespoke suit, sport coat, or trousers are presented to you. We ensure every detail meets our uncompromising standards before it leaves the shop.',
  },
];

export default function TailoringProcess() {
  const [activeStep, setActiveStep] = useState<string | null>('01');

  return (
    <section id="tailoring" className="py-24 md:py-32 bg-white text-charcoal">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Sticky Image */}
          <div className="relative h-[60vh] lg:h-[80vh] w-full lg:sticky lg:top-32 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1594938298596-03ef66754b81?q=80&w=800&auto=format&fit=crop"
              alt="Tailoring Process"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-charcoal/10 mix-blend-multiply"></div>
          </div>

          {/* Right Column: Accordion */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-sm tracking-widest uppercase text-charcoal/60 mb-4">The Process</h3>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-12">
                The Art of <br />
                <span className="italic font-light">Custom Tailoring</span>
              </h2>
            </motion.div>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border-b border-charcoal/20 pb-6"
                >
                  <button
                    onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                    className="w-full flex items-center justify-between text-left group"
                  >
                    <div className="flex items-center gap-6">
                      <span className="font-mono text-sm text-charcoal/40 group-hover:text-charcoal transition-colors">
                        {step.id}
                      </span>
                      <h4 className="font-serif text-2xl md:text-3xl group-hover:text-charcoal/70 transition-colors">
                        {step.title}
                      </h4>
                    </div>
                    {activeStep === step.id ? (
                      <ChevronUp className="w-5 h-5 text-charcoal/60" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-charcoal/60" />
                    )}
                  </button>
                  
                  <motion.div
                    initial={false}
                    animate={{
                      height: activeStep === step.id ? 'auto' : 0,
                      opacity: activeStep === step.id ? 1 : 0,
                      marginTop: activeStep === step.id ? 24 : 0,
                    }}
                    className="overflow-hidden"
                  >
                    <p className="text-charcoal/70 leading-relaxed pl-12 md:pl-14 max-w-lg">
                      {step.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-16 pl-12 md:pl-14"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm tracking-widest uppercase border-b border-charcoal pb-1 hover:text-charcoal/60 hover:border-charcoal/60 transition-colors"
              >
                Schedule a Consultation
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
