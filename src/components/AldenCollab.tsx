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

          {/* Single Image */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src={`${import.meta.env.BASE_URL}d4f528ac-8254-4356-9d8b-d5ef7e7bbefa.png`}
                alt="High End Menswear Detail"
                className="w-full h-auto object-cover max-h-[600px]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
