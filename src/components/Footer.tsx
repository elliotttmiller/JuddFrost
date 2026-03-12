import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="visit" className="bg-stone-900 text-stone-50 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20 md:mb-24">
          
          {/* Brand & Social */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Judd Frost Clothier</h2>
            <div className="flex gap-6 mt-4">
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

          {/* Contact (Our Location) */}
          <div>
            <h3 className="text-sm tracking-widest uppercase text-stone-500 mb-8">Our Location</h3>
            <ul className="space-y-6 text-stone-300">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-stone-500 shrink-0 mt-1" />
                <a
                  href="https://www.bing.com/maps/search?ty=0&v=2&sV=1&style=r&q=Judd+Frost+Clothiers&ss=id.ypid%3A7ECD53FA05731F9C&cp=44.969579%7E-93.512833&lvl=22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-50 transition-colors"
                >
                  631 Lake Street East<br />
                  Wayzata, MN 55391
                </a>
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
          </div>

          {/* Hours (placed to the right of Our Location) */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-stone-500 mb-4">Hours</h4>
            <ul className="space-y-2 text-stone-400 text-sm">
              <li className="flex justify-between gap-4"><span>Mon - Fri</span><span>10am - 6pm</span></li>
              <li className="flex justify-between gap-4"><span>Saturday</span><span>10am - 5pm</span></li>
              <li className="flex justify-between gap-4"><span>Sunday</span><span>Closed</span></li>
              <li className="mt-4 italic text-stone-500">Private appointments available upon request.</li>
            </ul>
          </div>

          {/* Map column removed (Visit Us header and Get Directions hero image) */}

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-800 pt-8 flex justify-center items-center text-xs tracking-widest uppercase text-stone-600">
          <p className="text-center">&copy; {new Date().getFullYear()} Judd Frost Clothier. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
