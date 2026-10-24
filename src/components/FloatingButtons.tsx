import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS } from '@/lib/business';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href={`https://wa.me/${BUSINESS.whatsapp}?text=Hi%20SK%20Car%20Battery%20Shop%2C%20I%20have%20a%20query%20about%20a%20battery.`}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all hover:scale-110 hover:bg-green-600"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
        <span className="absolute right-16 hidden whitespace-nowrap rounded-lg bg-[#0a1a3f] px-3 py-1.5 text-xs font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100 sm:block">
          Chat on WhatsApp
        </span>
      </a>
      <a
        href={`tel:${BUSINESS.phoneRaw}`}
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition-all hover:scale-110 hover:bg-red-700"
        aria-label="Call now"
      >
        <Phone className="h-6 w-6" />
        <span className="absolute right-16 hidden whitespace-nowrap rounded-lg bg-[#0a1a3f] px-3 py-1.5 text-xs font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100 sm:block">
          Call Now
        </span>
      </a>
    </div>
  );
}
