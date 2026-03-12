import { motion } from 'motion/react';

const teamMembers = [
  {
    name: 'Warren Lester',
    initials: 'WL',
    title: "Men's Custom Clothier",
    quote: "Give people great service, a great product and fit, and you'll have a customer for life.",
    bio: 'With over 64 years in the business — having started at age 13 — Warren brings an unmatched depth of knowledge to every appointment. His timeless sense of style and meticulous attention to detail ensure that clients of every shape and size leave looking and feeling their absolute best.',
  },
  {
    name: 'Erica Jacobs',
    initials: 'EJ',
    title: 'Office Manager',
    quote: 'Every great experience begins with seamless support behind the scenes.',
    bio: 'Erica joined the Judd Frost team in 2014 and quickly became the backbone of daily operations. Armed with a Fashion and Business Management degree, she handles the office, bookkeeping, and steps onto the sales floor whenever needed — the true lifeline of the store.',
  },
  {
    name: 'KR',
    initials: 'KR',
    title: 'Master Tailor',
    quote: 'Precision in every stitch — that is the promise I make to every garment.',
    bio: "KR trained at a prestigious tailoring school in Cambodia before relocating to Minnesota in 2010 and joining the Judd Frost team in 2015. Universally regarded as the finest tailor the team has ever worked with, she oversees all in-store alterations and welcomes outside tailoring projects for both men's and women's apparel.",
  },
  {
    name: 'Jessie',
    initials: 'J',
    title: "Judd's Daughter & Style Ambassador",
    quote: 'Style is personal — and so is the care we bring to every client.',
    bio: "Growing up alongside the shop, Jessie has always been part of the Judd Frost story. From co-managing a boutique on Lake Minnetonka to her current work as a Life and Wellness Coach, she brings warmth, charm, and genuine passion for helping clients look and feel their best whenever she's in the store.",
  },
];

export default function MeetTheTeam() {
  return (
    <section className="py-24 md:py-32 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <h3 className="text-sm tracking-widest uppercase text-charcoal/50 mb-4">The People Behind the Craft</h3>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">Meet the Team</h2>
          <div className="w-12 h-px bg-charcoal/30 mx-auto"></div>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex flex-col items-center text-center group"
            >
              {/* Avatar */}
              <div className="w-28 h-28 rounded-full bg-charcoal flex items-center justify-center mb-6 ring-4 ring-charcoal/10 group-hover:ring-charcoal/25 transition-all duration-300">
                <span className="font-serif text-2xl text-stone-100 tracking-wider select-none">
                  {member.initials}
                </span>
              </div>

              {/* Name & Title */}
              <h4 className="font-serif text-xl md:text-2xl mb-1">{member.name}</h4>
              <p className="text-xs tracking-widest uppercase text-charcoal/50 mb-5">{member.title}</p>

              {/* Divider */}
              <div className="w-8 h-px bg-charcoal/20 mb-5"></div>

              {/* Quote */}
              <p className="text-charcoal/60 italic text-sm leading-relaxed mb-4">
                "{member.quote}"
              </p>

              {/* Bio */}
              <p className="text-charcoal/70 text-sm leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
