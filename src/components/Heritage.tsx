import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Heritage() {
  return (
    <section id="heritage" className="py-32 md:py-48 bg-charcoal text-stone-50 relative overflow-hidden">
      {/* Background Texture/Image */}
      <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay">
        <img
          src="https://images.unsplash.com/photo-1585045089338-1644e5485458?q=80&w=1920&auto=format&fit=crop"
          alt="Heritage Texture"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-sm tracking-widest uppercase text-stone-50/60 mb-8">Heritage & Philosophy</h3>
          
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl leading-relaxed mb-12">
            "True luxury is not found in a label, but in the <span className="italic font-light text-stone-300">uncompromising precision</span> of the fit and the personal connection forged in the shop."
          </h2>

          <div className="w-px h-24 bg-stone-50/30 mx-auto mb-12"></div>

          <p className="text-stone-50/80 leading-relaxed text-lg max-w-2xl mx-auto mb-12">
            Rooted in the Wayzata community, Judd Frost Clothier is dedicated to preserving the heritage of bespoke tailoring while presenting it in a modern, elegant context. We believe that a well-crafted garment is an investment in confidence and timeless style.
          </p>

          <Link
            to="/contact"
            className="inline-block px-8 py-4 border border-stone-50 text-stone-50 text-sm tracking-widest uppercase hover:bg-stone-50 hover:text-charcoal transition-colors"
          >
            Experience the Difference
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
