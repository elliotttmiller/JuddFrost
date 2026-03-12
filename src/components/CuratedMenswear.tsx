import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const lookbookItems = [
  {
    id: 1,
    image: `${import.meta.env.BASE_URL}ed97dc088eaa27c3fac3b2a97c5bcb58.jpg`,
    title: 'Tailored Elegance',
    subtitle: 'Bespoke Craftsmanship',
  },
  {
    id: 2,
    image: `${import.meta.env.BASE_URL}suits.jpg`,
    title: 'The Perfect Suit',
    subtitle: 'Fine Worsted Wool',
  },
  {
    id: 3,
    image: `${import.meta.env.BASE_URL}Mens++tailor+made+suits.png`,
    title: 'Made-to-Measure',
    subtitle: 'Custom Tailoring',
  },
  {
    id: 4,
    image: `${import.meta.env.BASE_URL}five-kinds-jackets-display-formal-events.png`,
    title: 'Sport Coats',
    subtitle: 'Formal & Casual',
  },
];

export default function CuratedMenswear() {
  return (
    <section id="menswear" className="py-24 md:py-32 bg-white text-charcoal">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h3 className="text-sm tracking-widest uppercase text-charcoal/60 mb-4">The Wayzata Experience</h3>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Curated <br />
              <span className="italic font-light">Menswear</span>
            </h2>
            <p className="text-charcoal/70 leading-relaxed text-lg">
              Beyond our bespoke offerings, we house a highly curated collection of classic, ready-to-wear menswear and accessories. Every piece is selected for its uncompromising quality and timeless appeal.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link
              to="/contact"
              className="text-sm tracking-widest uppercase border-b border-charcoal pb-1 hover:text-charcoal/60 hover:border-charcoal/60 transition-colors whitespace-nowrap"
            >
              Visit the Store
            </Link>
          </motion.div>
        </div>

        {/* Lookbook Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-6 md:gap-12">
          {lookbookItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`group relative overflow-hidden ${index % 2 !== 0 ? 'md:mt-24' : ''}`}
            >
              <div className="aspect-[3/4] sm:aspect-[4/5] overflow-hidden bg-stone-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="mt-3 md:mt-6">
                <h4 className="font-serif text-base sm:text-xl md:text-2xl mb-1">{item.title}</h4>
                <p className="text-xs sm:text-sm tracking-widest uppercase text-charcoal/60">{item.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
