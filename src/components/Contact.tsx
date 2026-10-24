import { useState } from 'react';
import type { FormEvent } from 'react';
import { Phone, MessageSquare, CheckCircle2, Loader2, Send, MapPin, Mail, ChevronDown } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { BUSINESS } from '@/lib/business';
import { SERVICE_OPTIONS } from '@/lib/services';

function QuickQueryForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setStatus('loading');
    const { error } = await supabase.from('inquiries').insert({
      name: name.trim(),
      phone: phone.trim(),
      source: 'query',
    });
    if (error) {
      setStatus('error');
    } else {
      setStatus('success');
      setName('');
      setPhone('');
    }
  };

  return (
    <div className="relative overflow-hidden rounded-2xl bg-red-600 p-8 shadow-xl">
      <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-white/10" />
      <div className="relative">
        <h3 className="text-2xl font-extrabold text-white">Got A Query?</h3>
        <p className="mt-2 text-sm text-white/80">
          Share your name and number — we&apos;ll call you back with the best battery deal.
        </p>

        {status === 'success' ? (
          <div className="mt-6 flex items-center gap-3 rounded-xl bg-white/15 p-4 text-white">
            <CheckCircle2 className="h-6 w-6 text-yellow-300" />
            <p className="text-sm font-medium">Thank you! We&apos;ll get back to you shortly.</p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full rounded-lg border-0 px-4 py-3 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full rounded-lg border-0 px-4 py-3 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            {status === 'error' && (
              <p className="text-sm text-yellow-200">Something went wrong. Please try calling us instead.</p>
            )}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-yellow-400 px-5 py-3 text-sm font-bold text-[#0a1a3f] hover:bg-yellow-300 disabled:opacity-60 transition-colors"
            >
              {status === 'loading' ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
              Submit Query
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function DetailedForm() {
  const [form, setForm] = useState({ name: '', phone: '', city: '', service: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) return;
    setStatus('loading');
    const { error } = await supabase.from('inquiries').insert({
      name: form.name.trim(),
      phone: form.phone.trim(),
      city: form.city.trim() || null,
      service: form.service.trim() || null,
      source: 'message',
    });
    if (error) {
      setStatus('error');
    } else {
      setStatus('success');
      setForm({ name: '', phone: '', city: '', service: '' });
    }
  };

  const inputClass =
    'w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500';

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-lg">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-600/10 text-red-600">
          <MessageSquare className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#0a1a3f]">Drop A Message For Any Query</h3>
          <p className="text-sm text-gray-500">We&apos;ll respond with a tailored solution.</p>
        </div>
      </div>

      {status === 'success' ? (
        <div className="mt-6 flex items-center gap-3 rounded-xl bg-green-50 p-4">
          <CheckCircle2 className="h-6 w-6 text-green-600" />
          <p className="text-sm font-medium text-green-700">
            Message received! Our team will contact you soon.
          </p>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-gray-600">Full Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className={inputClass}
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-gray-600">Mobile Number</label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                required
                className={inputClass}
                placeholder="Enter your mobile number"
              />
            </div>
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-semibold text-gray-600">City</label>
            <input
              type="text"
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
              className={inputClass}
              placeholder="Enter your city"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-semibold text-gray-600">
              What services do you require?
            </label>
            <div className="relative">
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className={`${inputClass} appearance-none pr-10 ${form.service ? 'text-gray-900' : 'text-gray-400'}`}
              >
                <option value="">Select a service...</option>
                {SERVICE_OPTIONS.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          {status === 'error' && (
            <p className="text-sm text-red-600">Something went wrong. Please try again or call us directly.</p>
          )}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-6 py-3 text-sm font-bold text-white hover:bg-red-700 disabled:opacity-60 transition-colors"
          >
            {status === 'loading' ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-red-600">Contact Us</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#0a1a3f]">
            Get In Touch With Us
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-yellow-400" />
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-6">
            <QuickQueryForm />

            {/* Contact details */}
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-[#0a1a3f]">Reach Us Directly</h3>
              <div className="mt-4 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-600/10 text-red-600">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500">Address</p>
                    <p className="text-sm text-gray-700">{BUSINESS.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-600/10 text-red-600">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500">Phone</p>
                    <a href={`tel:${BUSINESS.phoneRaw}`} className="text-sm text-gray-700 hover:text-red-600">
                      {BUSINESS.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-600/10 text-red-600">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500">Email</p>
                    <a
                      href={`mailto:${BUSINESS.email}`}
                      className="text-sm text-gray-700 hover:text-red-600 break-all"
                    >
                      {BUSINESS.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <DetailedForm />
          </div>
        </div>
      </div>
    </section>
  );
}
