import { useState, useEffect } from 'react';
import { Menu, X, Phone, Facebook, Instagram, Youtube, Twitter, Zap } from 'lucide-react';
import { BUSINESS } from '@/lib/business';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Top announcement strip */}
      <div className="bg-[#0a1a3f] text-white text-xs sm:text-sm">
        <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between gap-4">
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
          >
            <Phone className="h-3.5 w-3.5 text-yellow-400" />
            <span className="font-medium">{BUSINESS.phone}</span>
          </a>
          <div className="hidden sm:flex items-center gap-3">
            <span className="text-white/60">Follow us:</span>
            {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="text-white/80 hover:text-yellow-400 transition-colors"
                aria-label="Social link"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`transition-all duration-300 ${
          scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-red-600 to-red-700 shadow-md">
              <Zap className="h-6 w-6 text-yellow-400" fill="currentColor" />
            </div>
            <div className="leading-tight">
              <span className="block text-lg font-extrabold text-[#0a1a3f] tracking-tight">
                SK Car Battery
              </span>
              <span className="block text-[10px] font-semibold uppercase tracking-widest text-red-600">
                Shop
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-sm font-semibold text-[#0a1a3f] hover:text-red-600 transition-colors after:absolute after:bottom-[-6px] after:left-0 after:h-0.5 after:w-0 after:bg-yellow-400 after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="rounded-full bg-red-600 px-5 py-2.5 text-sm font-bold text-white shadow-md hover:bg-red-700 transition-colors"
            >
              Call Now
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-[#0a1a3f]"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav className="md:hidden border-t border-gray-100 bg-white">
            <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-semibold text-[#0a1a3f] hover:bg-red-50 hover:text-red-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="mt-2 rounded-lg bg-red-600 px-3 py-3 text-center text-sm font-bold text-white"
              >
                Call {BUSINESS.phone}
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
