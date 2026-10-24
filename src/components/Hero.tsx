import { useState, useEffect, useCallback } from 'react';
import { Phone, ChevronLeft, ChevronRight, Truck, ShieldCheck, Wrench } from 'lucide-react';
import { BUSINESS } from '@/lib/business';

const slides = [
  {
    image: '/car_battery_shop.jpg',
    badge: 'Doorstep Car Battery Replacement Near Me',
    title: 'Sk Car Battery Shop — Top Car & Inverter Battery Dealer in Sector 121 Noida',
    subtitle: 'Fastest Doorstep Car Battery Replacement & Jump Start Service Near You in Noida. Genuine Exide, Amaron & Luminous batteries with 30-minute delivery.',
  },
  {
    image: '/greater_Noida_battery_shop.png',
    badge: 'Inverter Battery Dealer Near Me',
    title: 'Amaron & Exide Battery Dealers in Noida — Free Delivery & Installation',
    subtitle: 'Top brands delivered and installed at your doorstep across Sector 121, 122, 119, 120, Cleo County & Gaur City.',
  },
  {
    image: '/Exide_battery_shop.jpg',
    badge: 'Emergency Jump-Start Service Sector 121',
    title: 'Genuine Batteries, Honest Prices — Trusted Battery Shop Near Me',
    subtitle: 'Your nearest trusted battery store at Gate No 01, Cleo County Society, Sector 121 Noida. 24/7 roadside assistance available.',
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => setIndex((i) => (i + 1) % slides.length), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section id="home" className="relative">
      {/* Slider */}
      <div className="relative h-[520px] sm:h-[600px] overflow-hidden">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a3f]/90 via-[#0a1a3f]/70 to-transparent" />
          </div>
        ))}

        {/* Content */}
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4">
          <div className="max-w-xl text-white">
            {slides.map((slide, i) => (
              <div
                key={i}
                className={`transition-all duration-700 ${
                  i === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 hidden'
                }`}
              >
                {i === index && (
                  <>
                    <span className="inline-flex items-center gap-2 rounded-full bg-red-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                      {slide.badge}
                    </span>
                    <h1 className="mt-5 text-3xl sm:text-5xl font-extrabold leading-tight">
                      {slide.title}
                    </h1>
                    <p className="mt-4 text-base sm:text-lg text-white/85 leading-relaxed">
                      {slide.subtitle}
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                      <a
                        href={`tel:${BUSINESS.phoneRaw}`}
                        className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-bold text-white shadow-lg hover:bg-red-700 transition-colors"
                      >
                        <Phone className="h-4 w-4" /> Call Now
                      </a>
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-6 py-3 text-sm font-bold text-[#0a1a3f] shadow-lg hover:bg-yellow-300 transition-colors"
                      >
                        Get a Quote
                      </a>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 z-20 hidden sm:flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur hover:bg-white/40 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 z-20 hidden sm:flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur hover:bg-white/40 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2.5 rounded-full transition-all ${
                i === index ? 'w-8 bg-yellow-400' : 'w-2.5 bg-white/50'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Highlights strip */}
      <div className="bg-[#0a1a3f] text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {[
            { icon: Truck, title: 'Free Doorstep Delivery', text: 'Across Noida & nearby areas' },
            { icon: Wrench, title: 'Expert Installation', text: 'Professional fitting on the spot' },
            { icon: ShieldCheck, title: 'Genuine Products', text: '100% authentic with warranty' },
          ].map((item) => (
            <div key={item.title} className="flex items-center gap-4 px-6 py-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-600/20 text-yellow-400">
                <item.icon className="h-6 w-6" />
              </div>
              <div>
                <p className="font-bold text-sm">{item.title}</p>
                <p className="text-xs text-white/60">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
