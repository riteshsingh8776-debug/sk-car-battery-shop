import { useState } from 'react';
import { Car, Zap, Store, CheckCircle2, Award, Truck, Wrench, MapPin } from 'lucide-react';

const categories = [
  {
    id: 'inverter',
    label: 'Inverter Battery',
    icon: Zap,
    image: '/luminous_inverter_battery_dealer.png',
    desc: 'Reliable inverter batteries for uninterrupted power backup at home and office. Long-lasting performance with extended warranty.',
    points: ['Luminous, Amaron & Exide inverter batteries', 'Low maintenance & high efficiency', 'Free delivery in Noida'],
  },
  {
    id: 'car',
    label: 'Car Battery',
    icon: Car,
    image: '/Exide_car_battery.jpg',
    desc: 'Premium car batteries for all vehicle models. Genuine products with manufacturer warranty and expert on-site installation.',
    points: ['Amaron & Exide car batteries', 'All car models covered', 'Roadside assistance available'],
  },
  {
    id: 'dealer',
    label: 'Battery Dealer',
    icon: Store,
    image: '/Amaron_battery_dealer_near_me.jpg',
    desc: 'Your trusted authorised battery dealer in Noida for top brands. Wholesale & retail supply with competitive pricing.',
    points: ['Authorised dealer of top brands', 'Wholesale & retail supply', 'Genuine products with bill'],
  },
];

export default function About() {
  const [active, setActive] = useState(0);

  return (
    <section id="about" className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* Section heading */}
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-red-600">About Us</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#0a1a3f]">
            Your Trusted Battery Partner in Noida
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-yellow-400" />
        </div>

        {/* Category tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {categories.map((cat, i) => (
            <button
              key={cat.id}
              onClick={() => setActive(i)}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition-all ${
                active === i
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-white text-[#0a1a3f] hover:bg-red-50 border border-gray-200'
              }`}
            >
              <cat.icon className="h-4 w-4" />
              {cat.label}
            </button>
          ))}
        </div>

        {/* Category content */}
        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <img
              src={categories[active].image}
              alt={categories[active].label}
              className="h-72 w-full object-cover sm:h-96 transition-all duration-500"
              key={active}
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#0a1a3f]">{categories[active].label}</h3>
            <p className="mt-4 text-gray-600 leading-relaxed">{categories[active].desc}</p>
            <ul className="mt-5 space-y-3">
              {categories[active].points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-red-600" />
                  <span className="text-sm text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* LOCAL SEO DESCRIPTION BLOCK */}
        <div className="mt-16 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
          <div className="flex items-start gap-3 mb-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-600/10 text-red-600">
              <MapPin className="h-5 w-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0a1a3f] leading-snug">
              Best Car &amp; Inverter Battery Shop Near You in Sector 121, Noida
            </h2>
          </div>
          <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
            <p>
              Looking for a reliable <strong className="text-[#0a1a3f]">'car battery shop near me'</strong> or{' '}
              <strong className="text-[#0a1a3f]">'inverter battery dealer near me'</strong> in Noida?{' '}
              <strong className="text-[#0a1a3f]">Sk Car Battery Shop</strong> (located at Gate No 01, Cleo County Society, Shop 119, Sector 121, Noida) is your one-stop destination for all automotive and home power backup needs.
            </p>
            <p>
              We offer <strong className="text-[#0a1a3f]">100% genuine car batteries and inverter batteries</strong> from top brands like{' '}
              <strong className="text-[#0a1a3f]">Amaron, Exide, and Luminous</strong> at competitive prices. Whether your car battery died unexpectedly and you need{' '}
              <strong className="text-[#0a1a3f]">emergency doorstep replacement or jump-start assistance</strong>, or you are looking to upgrade your home inverter system, our technicians reach your location in minutes.
            </p>
            <p>
              We proudly serve <strong className="text-[#0a1a3f]">Sector 121, Sector 122, Sector 119, Sector 120, Sector 70, Cleo County, Gaur City, and Greater Noida West</strong> with free delivery, professional installation, old battery scrap buyback, and 24/7 customer support.
            </p>
          </div>

          {/* Service area pills */}
          <div className="mt-5 flex flex-wrap gap-2">
            {['Sector 121', 'Sector 122', 'Sector 119', 'Sector 120', 'Sector 70', 'Cleo County', 'Gaur City', 'Greater Noida West'].map((area) => (
              <span
                key={area}
                className="rounded-full bg-red-50 px-4 py-1.5 text-xs font-semibold text-red-700 border border-red-100"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Award, value: '10+', label: 'Years of Experience' },
            { icon: Truck, value: '5000+', label: 'Batteries Delivered' },
            { icon: Wrench, value: '100%', label: 'Expert Installation' },
            { icon: CheckCircle2, value: '24/7', label: 'Customer Support' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-red-600/10 text-red-600">
                <stat.icon className="h-7 w-7" />
              </div>
              <p className="mt-4 text-3xl font-extrabold text-[#0a1a3f]">{stat.value}</p>
              <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
