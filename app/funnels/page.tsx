"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const INDUSTRIES = [
  { key: "plumbing", label: "Plumbing", image: "/industries/plumbing.jpg" },
  { key: "hvac", label: "HVAC", image: "/industries/hvac.jpg" },
  { key: "electrical", label: "Electrical", image: "/industries/electrical.jpg" },
  { key: "landscaping", label: "Landscaping", image: "/industries/landscaping.jpg" },
  { key: "roofing", label: "Roofing", image: "/industries/roofing.jpg" },
  {
    key: "handyman",
    label: "Handymen & Small Business",
    image: "/industries/handyman.jpg",
  },
];

export default function FunnelsPage() {
  const [formData, setFormData] = useState({
    businessName: "",
    serviceType: "",
    phone: "",
    email: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Lead captured:", formData);
    alert("Thanks! We'll reach out within 24 hours.");
    setFormData({ businessName: "", serviceType: "", phone: "", email: "" });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* 1) Industry hero strip – Scorpion-style */}
      <section className="border-b border-slate-800 bg-black">
        <div className="mx-auto max-w-6xl px-6 py-12 lg:py-16">
          <div className="relative">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {INDUSTRIES.map((industry) => (
                <div
                  key={industry.key}
                  className="group relative h-56 overflow-hidden rounded-3xl bg-slate-900 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/30 sm:h-64"
                >
                  <div className="absolute inset-0">
                    <Image
                      src={industry.image}
                      alt={industry.label}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 group-hover:from-black/90 group-hover:via-black/40" />
                  </div>
                  <div className="relative flex h-full items-end p-4">
                    <span className="text-sm font-semibold text-slate-50 sm:text-base">
                      {industry.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
                Home service pros
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-50 drop-shadow-lg sm:text-4xl lg:text-5xl">
                Websites built for the people
                <span className="block">who keep homes running.</span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* 2) Main hero + form (your existing message, polished) */}
      <section className="border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 lg:flex-row lg:items-center lg:py-16">
          {/* Left: copy */}
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
              LocalWebsitePro • Websites that ring the phone
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-50 sm:text-4xl lg:text-5xl">
              A website that turns
              <span className="block text-blue-300">Google reviews into booked jobs.</span>
            </h2>
            <p className="mt-4 text-sm text-slate-300 sm:text-base">
              We build fast, done-for-you websites for plumbers, HVAC, and home service pros
              who already win on Google—but lose jobs because they don&apos;t have a real site.
            </p>
            <div className="mt-6 grid gap-4 text-sm text-slate-300 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 text-xs text-emerald-400">
                  ✓
                </span>
                <p>Built custom on Next.js—no bloated WordPress templates or plugin headaches.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 text-xs text-emerald-400">
                  ✓
                </span>
                <p>Designed around your real Google reviews, photos, and services.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 text-xs text-emerald-400">
                  ✓
                </span>
                <p>Clear “call now”, text, and quote-request buttons on every key section.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 text-xs text-emerald-400">
                  ✓
                </span>
                <p>Launch in as little as 10–21 days with done-for-you setup and support.</p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#demo"
                className="inline-flex items-center justify-center rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 hover:bg-blue-400 hover:shadow-xl"
              >
                See a live demo
              </Link>
              <Link
                href="#pricing"
                className="inline-flex items-center justify-center rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-slate-300 hover:text-white"
              >
                View pricing
              </Link>
            </div>
          </div>

          {/* Right: demo form */}
          <div className="flex-1">
            <div
              id="demo"
              className="mx-auto max-w-md rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl shadow-blue-500/10 backdrop-blur"
            >
              <p className="text-sm font-semibold text-slate-100">
                See what your business could look like online
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Share a few details and we&apos;ll send over a personalized demo layout based on
                your Google Business profile.
              </p>
              <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300">
                    Business name
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    required
                    className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 outline-none ring-blue-500/0 transition focus:border-blue-400 focus:ring-2 focus:ring-blue-500/40"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300">
                    What type of work do you do?
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    required
                    className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 outline-none ring-blue-500/0 transition focus:border-blue-400 focus:ring-2 focus:ring-blue-500/40"
                  >
                    <option value="">Select a service</option>
                    <option value="plumbing">Plumbing</option>
                    <option value="hvac">HVAC</option>
                    <option value="electrical">Electrical</option>
                    <option value="roofing">Roofing</option>
                    <option value="landscaping">Landscaping / lawn care</option>
                    <option value="cleaning">Cleaning services</option>
                    <option value="handyman">Handyman / small business</option>
                    <option value="other">Other home services</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-medium text-slate-300">
                      Best phone number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 outline-none ring-blue-500/0 transition focus:border-blue-400 focus:ring-2 focus:ring-blue-500/40"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300">
                      Work email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 outline-none ring-blue-500/0 transition focus:border-blue-400 focus:ring-2 focus:ring-blue-500/40"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-blue-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 hover:bg-blue-400 hover:shadow-xl"
                >
                  Get my free demo layout
                </button>
                <p className="mt-2 text-[11px] leading-relaxed text-slate-500">
                  No long calls. No spam. We&apos;ll send over a link that shows how your business
                  could look online, then you decide if you want to move forward.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 3) Who we build websites for */}
      <section className="border-b border-slate-800 bg-slate-950" id="who">
        <div className="mx-auto max-w-6xl px-6 py-12 lg:py-16">
          <h3 className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Industries
          </h3>
          <h2 className="mt-3 text-center text-2xl font-semibold text-slate-50 sm:text-3xl">
            Built for home service businesses that live on Google.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-slate-300 sm:text-base">
            If you have strong reviews and steady calls from your Google Business profile—but
            either no website or a dated one—we built this for you.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Plumbers & drain cleaning",
              "HVAC & heating",
              "Electricians",
              "Roofers & siding",
              "Landscaping & lawn care",
              "Pressure washing & exterior cleaning",
              "Residential & commercial cleaning",
              "Auto detail & mobile services",
              "Handymen & other small local businesses",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-sm text-slate-100 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 text-xs text-emerald-400">
                  ✓
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4) Simple partners band */}
      <section className="border-b border-slate-800 bg-slate-950/80">
        <div className="mx-auto max-w-5xl px-6 py-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
            Connected tools
          </p>
          <h2 className="mt-3 text-xl font-semibold text-slate-50 sm:text-2xl">
            Plays nicely with the platforms you already use.
          </h2>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 sm:text-sm">
            <span className="rounded-full border border-slate-700 px-4 py-2">
              Google Business Profile
            </span>
            <span className="rounded-full border border-slate-700 px-4 py-2">
              Google Analytics
            </span>
            <span className="rounded-full border border-slate-700 px-4 py-2">
              Call tracking providers
            </span>
            <span className="rounded-full border border-slate-700 px-4 py-2">
              CRM & scheduling tools
            </span>
          </div>
        </div>
      </section>

      {/* 5) Bottom CTA */}
      <section
        id="pricing"
        className="bg-gradient-to-b from-slate-900 via-slate-950 to-black px-6 py-16 text-center"
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
            You keep your community running.
            <span className="block text-blue-300">
              We&apos;ll make sure people can find and hire you.
            </span>
          </h2>
          <p className="mt-4 text-sm text-slate-300 sm:text-base">
            One custom site, simple pricing, built to turn searchers into real conversations.
            No long-term agency retainers.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="#demo"
              className="inline-flex items-center justify-center rounded-full bg-blue-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 hover:bg-blue-400 hover:shadow-xl"
            >
              Get started with a demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
