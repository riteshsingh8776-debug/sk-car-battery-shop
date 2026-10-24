import { Phone, ArrowRight, Wrench, Zap, Car, Battery, ShieldCheck, Truck, Clock, RefreshCw, FileCheck, Stethoscope, Bus, AlertTriangle, Settings, Receipt } from 'lucide-react';
import { BUSINESS } from '@/lib/business';

type LucideIcon = typeof Phone;

const services: {
  title: string;
  desc: string;
  icon: LucideIcon;
  image: string;
}[] = [
  {
    title: 'Doorstep Car Battery Replacement Near Me',
    desc: 'Fast doorstep car battery replacement in Sector 121, Noida — we bring the battery to you and fit it on the spot within 30 minutes.',
    icon: Car,
    image: '/car_battery_shop.jpg',
  },
  {
    title: 'Inverter & Home UPS Battery Setup Near Me',
    desc: 'Professional inverter battery installation and setup for uninterrupted power backup at home or office near Cleo County, Noida.',
    icon: Zap,
    image: '/luminous_inverter_battery_dealer.png',
  },
  {
    title: 'Emergency Jump-Start Service Near Me',
    desc: 'Car won\'t start? Our emergency jump-start service gets you back on the road in minutes anywhere in Sector 121 & nearby areas.',
    icon: AlertTriangle,
    image: '/inverter_battery_dealer_near_me.jpg',
  },
  {
    title: 'Old Battery Scrap Buyback Near Me',
    desc: 'Get the best value for your old battery with our scrap buyback and exchange offers — we pick up from your doorstep.',
    icon: RefreshCw,
    image: '/Exide_battery_shop.jpg',
  },
  {
    title: 'Amaron Car Battery Shop Near Me',
    desc: 'Genuine Amaron Hi-Life Pro and Go series car batteries with long life and manufacturer warranty, available at Sector 121 Noida.',
    icon: Battery,
    image: '/Amaron_battery_dealer_near_me.jpg',
  },
  {
    title: 'Exide Battery Dealer Near Me',
    desc: 'Exide Mileage series batteries for cars and SUVs — reliable performance and durable build. Authorised Exide dealer in Noida.',
    icon: Battery,
    image: '/Exide_car_battery.jpg',
  },
  {
    title: 'Start-Stop EFB Batteries',
    desc: 'Enhanced Flooded Batteries for modern start-stop vehicles, delivering consistent power and durability. Available near Sector 121.',
    icon: Battery,
    image: '/Exide_inverter_battery_dealer.jpg',
  },
  {
    title: 'Heavy Duty Commercial Vehicle Batteries',
    desc: 'High-capacity batteries built for trucks, tractors and commercial vehicles under tough conditions across Greater Noida West.',
    icon: Bus,
    image: '/Amaron_battery_dealer_near_me.jpg',
  },
  {
    title: 'Luminous Inverter Battery Store Near Me',
    desc: 'Long-lasting tall tubular inverter batteries from Luminous and Amaron for extended backup. Luminous dealer near Cleo County.',
    icon: Zap,
    image: '/amaron_inverter_battery_dealer.jpg',
  },
  {
    title: 'UPS & Power Backup Solutions',
    desc: 'Complete UPS and power backup solutions for homes, offices and commercial setups in Sector 121, 122, Gaur City & Noida.',
    icon: Battery,
    image: '/greater_Noida_battery_shop.png',
  },
  {
    title: 'Free Battery Health Checkup Near Me',
    desc: 'Complimentary battery health checkup at your doorstep to diagnose strength and prevent unexpected failures across Noida.',
    icon: Stethoscope,
    image: '/car_battery_dealer_near_me.png',
  },
  {
    title: 'Commercial & Fleet Battery Maintenance',
    desc: 'Scheduled battery maintenance plans for commercial fleets to minimise downtime — serving Noida & Greater Noida West.',
    icon: Settings,
    image: '/Amaron_battery_dealer_near_me.jpg',
  },
  {
    title: '24/7 Emergency Roadside Assistance',
    desc: 'Round-the-clock roadside assistance for battery breakdowns anywhere in Sector 121, 122, 119, 120, 70, Cleo County & Gaur City.',
    icon: Clock,
    image: '/greater_Noida_battery_shop.png',
  },
  {
    title: 'Inverter & Battery Repair Troubleshooting',
    desc: 'Expert troubleshooting and repair for inverter and battery issues to restore performance — available near Sector 121 Noida.',
    icon: Wrench,
    image: '/Exide_battery_shop.jpg',
  },
  {
    title: 'Genuine Warranty & Digital Invoicing',
    desc: 'Every battery comes with genuine manufacturer warranty and digital invoicing for complete transparency and peace of mind.',
    icon: Receipt,
    image: '/car_battery_shop.jpg',
  },
];

const brands = [
  { name: 'Amaron', color: 'from-orange-500 to-red-600' },
  { name: 'Exide', color: 'from-blue-600 to-blue-800' },
  { name: 'Luminous', color: 'from-red-500 to-red-700' },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-red-600">
            Our Services
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#0a1a3f]">
            Amaron &amp; Exide Battery Dealers in Noida — Doorstep Car Battery Replacement Near Me
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-500">
            Trusted Battery Shop Near Me in Sector 121, Noida — 30-minute delivery across Sector 121, 122, 119, 120, Cleo County &amp; Gaur City.
          </p>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-yellow-400" />
        </div>

        {/* Brand badges */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className={`rounded-xl bg-gradient-to-r ${brand.color} px-8 py-3 text-center shadow-lg`}
            >
              <span className="text-lg font-extrabold text-white">{brand.name}</span>
            </div>
          ))}
        </div>

        {/* Service grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a3f]/75 to-transparent" />
                <div className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-lg bg-red-600 text-yellow-400 shadow-lg">
                  <service.icon className="h-5 w-5" />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-bold text-[#0a1a3f] leading-snug">{service.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed flex-1">{service.desc}</p>
                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-red-600 hover:text-red-700 transition-colors"
                >
                  <Phone className="h-4 w-4" /> Enquire Now
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl bg-[#0a1a3f] px-6 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-3">
            <Truck className="h-8 w-8 text-yellow-400" />
            <p className="text-white">
              <span className="block font-bold">Need a battery today? Fast 30-min delivery near Cleo County!</span>
              <span className="text-sm text-white/70">Free doorstep delivery &amp; installation across Noida — Sector 121, 122, 119, 120 &amp; Gaur City.</span>
            </p>
          </div>
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-bold text-white shadow-lg hover:bg-red-700 transition-colors"
          >
            <Phone className="h-4 w-4" /> {BUSINESS.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
