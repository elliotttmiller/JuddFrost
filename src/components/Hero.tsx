import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}hero-bg.png`}
          alt="Bespoke Tailoring"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-charcoal/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/80 text-sm md:text-base tracking-[0.3em] uppercase mb-6"
        >
          Wayzata, Minnesota
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-10"
        >
          Uncompromising <br className="hidden md:block" />
          <span className="italic font-light">Precision.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link
            to="/contact"
            className="px-8 py-4 bg-white text-charcoal text-sm tracking-widest uppercase hover:bg-stone-200 transition-colors w-full sm:w-auto"
          >
            Book a Fitting
          </Link>
          <Link
            to="/services"
            className="px-8 py-4 border border-white text-white text-sm tracking-widest uppercase hover:bg-white hover:text-charcoal transition-colors w-full sm:w-auto"
          >
            Discover the Art
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/60 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-white/30 overflow-hidden">
          <motion.div
            animate={{ y: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
            className="w-full h-full bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
}
