import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function AldenCollab() {
  return (
    <section id="alden" className="py-24 md:py-32 bg-stone-100 text-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-sm tracking-widest uppercase text-charcoal/60 mb-4">Exclusive Partnership</h3>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
                The Alden <br />
                <span className="italic font-light">Collaboration</span>
              </h2>
              <p className="text-charcoal/70 leading-relaxed mb-8 max-w-lg text-lg">
                We are proud to partner with the legendary American shoemaker, Alden. 
                Our exclusive collaborations feature unique design tweaks, rare leathers including genuine shell cordovan, and custom lasts available only at Judd Frost Clothier.
              </p>
              <p className="text-charcoal/70 leading-relaxed mb-12 max-w-lg">
                Experience the heritage of New England shoemaking paired with our commitment to uncompromising fit. Visit the store to find your perfect pair.
              </p>
              
              <Link
                to="/services"
                className="px-8 py-4 bg-charcoal text-white text-sm tracking-widest uppercase hover:bg-charcoal/80 transition-colors inline-block"
              >
                Discover the Collection
              </Link>
            </motion.div>
          </div>

          {/* Image Grid */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 relative">
            <div className="grid grid-cols-2 gap-4 md:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-12 md:mt-24"
              >
                <img
                  src="https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=600&auto=format&fit=crop"
                  alt="High End Menswear Detail"
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?q=80&w=600&auto=format&fit=crop"
                  alt="High End Menswear Collection"
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
            {/* Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-charcoal/10 -z-10 rounded-full"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
