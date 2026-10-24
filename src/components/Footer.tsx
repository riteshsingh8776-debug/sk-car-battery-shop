import { Zap, Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter, Search } from 'lucide-react';
import { BUSINESS } from '@/lib/business';
import { SERVICE_OPTIONS } from '@/lib/services';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

const serviceLinks = SERVICE_OPTIONS.slice(0, 8);

const nearMeSearches = [
  'Car Battery Shop Near Me',
  'Inverter Battery Dealer Near Me',
  'Battery Jump Start Near Me',
  'Exide Battery Shop Near Cleo County',
  'Amaron Battery Store Sector 121 Noida',
  'Doorstep Battery Replacement Sector 122',
];

const serviceAreas = [
  'Sector 121', 'Sector 122', 'Sector 119',
  'Sector 120', 'Sector 70', 'Cleo County',
  'Gaur City', 'Noida Extension', 'Greater Noida West',
];

export default function Footer() {
  return (
    <footer className="bg-[#070f2e] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-red-600 to-red-700">
                <Zap className="h-6 w-6 text-yellow-400" fill="currentColor" />
              </div>
              <div className="leading-tight">
                <span className="block text-lg font-extrabold text-white">SK Car Battery</span>
                <span className="block text-[10px] font-semibold uppercase tracking-widest text-yellow-400">
                  Shop
                </span>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Your trusted car and inverter battery dealer in Sector 121, Noida. Genuine Exide, Amaron &amp; Luminous products, free doorstep delivery, and expert installation.
            </p>
            <div className="mt-5 flex gap-3">
              {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white/80 hover:bg-red-600 hover:text-white transition-colors"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-yellow-400">Quick Links</h4>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white hover:underline transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="mt-8 text-sm font-bold uppercase tracking-wider text-yellow-400">Local Service Areas</h4>
            <ul className="mt-3 flex flex-wrap gap-2">
              {serviceAreas.map((area) => (
                <li key={area}>
                  <a
                    href="#contact"
                    className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs text-white/70 hover:bg-red-600 hover:text-white transition-colors"
                  >
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-yellow-400">Our Services</h4>
            <ul className="mt-4 space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm text-white/70 hover:text-white hover:underline transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-yellow-400">Get In Touch</h4>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-red-500" />
                <span className="text-sm text-white/70">{BUSINESS.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-red-500" />
                <a href={`tel:${BUSINESS.phoneRaw}`} className="text-sm text-white/70 hover:text-white">
                  {BUSINESS.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-red-500" />
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="text-sm text-white/70 hover:text-white break-all"
                >
                  {BUSINESS.email}
                </a>
              </li>
            </ul>

            {/* Google Maps embed */}
            <div className="mt-5 overflow-hidden rounded-xl border border-white/10">
              <iframe
                title="Sk Car Battery Shop Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.7!2d77.3679!3d28.5747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM0JzI5LjEiTiA3N8KwMjInMDQuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="160"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Near Me Searches block */}
        <div className="mt-10 border-t border-white/10 pt-8">
          <div className="flex items-center gap-2 mb-4">
            <Search className="h-4 w-4 text-yellow-400" />
            <h4 className="text-sm font-bold uppercase tracking-wider text-yellow-400">
              Popular 'Near Me' Searches We Serve
            </h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {nearMeSearches.map((search) => (
              <a
                key={search}
                href="#services"
                className="inline-block rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs text-white/70 hover:border-red-500 hover:bg-red-600 hover:text-white transition-colors"
              >
                {search}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-center">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} {BUSINESS.name}. All Rights Reserved. | Car Battery Shop Near Me in Sector 121, Noida
          </p>
        </div>
      </div>
    </footer>
  );
}
