import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="visit" className="bg-stone-900 text-stone-50 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20 md:mb-24">
          
          {/* Brand & Social */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Judd Frost Clothier</h2>
            <p className="text-stone-400 text-sm leading-relaxed mb-6 max-w-sm">
              Bespoke tailoring and curated menswear in the heart of Wayzata, Minnesota.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-stone-400 hover:text-stone-50 transition-colors">
                <Instagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-stone-400 hover:text-stone-50 transition-colors">
                <Facebook className="w-6 h-6" />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>

          {/* Contact & Hours */}
          <div>
            <h3 className="text-sm tracking-widest uppercase text-stone-500 mb-8">Our Location</h3>
            <ul className="space-y-6 text-stone-300">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-stone-500 shrink-0 mt-1" />
                <span>
                  631 Lake Street East<br />
                  Wayzata, MN 55391
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-stone-500 shrink-0" />
                <a href="tel:+19524734633" className="hover:text-stone-50 transition-colors">
                  (952) 473-4633
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-stone-500 shrink-0" />
                <a href="mailto:info@juddfrost.com" className="hover:text-stone-50 transition-colors break-all">
                  info@juddfrost.com
                </a>
              </li>
            </ul>
            
            <div className="mt-12">
              <h4 className="text-xs tracking-widest uppercase text-stone-500 mb-4">Hours</h4>
              <ul className="space-y-2 text-stone-400 text-sm">
                <li className="flex justify-between gap-4"><span>Mon - Fri</span><span>10am - 6pm</span></li>
                <li className="flex justify-between gap-4"><span>Saturday</span><span>10am - 5pm</span></li>
                <li className="flex justify-between gap-4"><span>Sunday</span><span>Closed</span></li>
                <li className="mt-4 italic text-stone-500">Private appointments available upon request.</li>
              </ul>
            </div>
          </div>

          {/* Map */}
          <div className="flex flex-col">
            <h3 className="text-sm tracking-widest uppercase text-stone-500 mb-8">Visit Us</h3>
            
            {/* Map Placeholder */}
            <div className="w-full flex-1 min-h-[200px] bg-stone-800 relative overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}judd.jpg`}
                alt="Store Location"
                className="w-full h-full object-cover opacity-30"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <a
                  href="https://maps.google.com/?q=631+Lake+Street+East,+Wayzata,+MN+55391"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs tracking-widest uppercase px-6 py-3 border border-stone-500 text-stone-300 hover:bg-stone-50 hover:text-stone-900 transition-colors bg-stone-900/50 backdrop-blur-sm whitespace-nowrap"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-widest uppercase text-stone-600">
          <p>&copy; {new Date().getFullYear()} Judd Frost Clothier. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link to="/about" className="hover:text-stone-400 transition-colors">About Us</Link>
            <Link to="/faq" className="hover:text-stone-400 transition-colors">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
