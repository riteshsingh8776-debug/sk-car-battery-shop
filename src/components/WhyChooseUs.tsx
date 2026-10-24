import { Truck, Wrench, Clock, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Doorstep Delivery',
    desc: 'Free delivery of batteries to your home or office anywhere in Noida and surrounding areas.',
  },
  {
    icon: Wrench,
    title: 'Professional Installation',
    desc: 'Skilled technicians handle the complete installation so your battery is fitted correctly.',
  },
  {
    icon: Clock,
    title: '24/7 Customer Service',
    desc: 'Round-the-clock support for emergencies, queries and roadside assistance whenever you need.',
  },
  {
    icon: ShieldCheck,
    title: 'Genuine Products',
    desc: '100% authentic batteries from Exide, Amaron and Luminous with full manufacturer warranty.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#0a1a3f] py-16 sm:py-24">
      {/* Decorative accent */}
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-red-600/10" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-yellow-400/10" />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-yellow-400">
            Why Choose Us
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">
            The SK Car Battery Advantage
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-yellow-400" />
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur transition-all hover:border-yellow-400/40 hover:bg-white/10"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-600 text-yellow-400 transition-transform group-hover:scale-110">
                <f.icon className="h-8 w-8" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">{f.title}</h3>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
