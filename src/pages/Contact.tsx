import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="bg-charcoal text-white pt-40 pb-24 px-6 text-center">
        <h1 className="font-serif text-5xl md:text-6xl mb-6">Contact Us</h1>
        <p className="text-white/70 max-w-2xl mx-auto tracking-wide text-lg">
          We look forward to welcoming you to the store.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Contact Form */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl mb-8">Get in Touch</h2>
            <p className="text-charcoal/70 mb-12 text-lg">
              Whether you wish to schedule a bespoke consultation or have a question about our ready-to-wear collection, please reach out.
            </p>
            
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs tracking-widest uppercase text-charcoal/60 mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full border-b border-charcoal/20 bg-transparent py-3 focus:outline-none focus:border-charcoal transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-charcoal/60 mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full border-b border-charcoal/20 bg-transparent py-3 focus:outline-none focus:border-charcoal transition-colors"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-xs tracking-widest uppercase text-charcoal/60 mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full border-b border-charcoal/20 bg-transparent py-3 focus:outline-none focus:border-charcoal transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-xs tracking-widest uppercase text-charcoal/60 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full border-b border-charcoal/20 bg-transparent py-3 focus:outline-none focus:border-charcoal transition-colors resize-none"
                ></textarea>
              </div>
              
              <button
                type="button"
                className="px-8 py-4 bg-charcoal text-white text-sm tracking-widest uppercase hover:bg-charcoal/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Location Info */}
          <div className="flex flex-col h-full">
            <h2 className="font-serif text-3xl md:text-4xl mb-8">Visit the Store</h2>
            
            <ul className="space-y-8 text-charcoal/80 mb-16 text-lg">
              <li className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-charcoal/50 shrink-0 mt-1" />
                <span>
                  631 Lake Street East<br />
                  Wayzata, MN 55391
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-charcoal/50 shrink-0" />
                <a href="tel:+19524734633" className="hover:text-charcoal transition-colors">
                  (952) 473-4633
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-charcoal/50 shrink-0" />
                <a href="mailto:info@juddfrost.com" className="hover:text-charcoal transition-colors">
                  info@juddfrost.com
                </a>
              </li>
            </ul>

            <div className="w-full grow min-h-75 bg-stone-200 relative overflow-hidden">
        <img
          src="/judd.jpg"
                  alt="Store Location"
                  className="w-full h-full object-cover opacity-60"
                  referrerPolicy="no-referrer"
                />
              <div className="absolute inset-0 flex items-center justify-center">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs tracking-widest uppercase px-6 py-3 border border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-colors bg-white/50 backdrop-blur-sm"
                >
                  Get Directions
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
