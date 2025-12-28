"use client";

import Link from "next/link";
import { useState } from "react";

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
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 lg:flex-row lg:items-center lg:py-20">
          <div className="flex-1 text-center lg:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              LocalWebsitePro • Websites that ring the phone
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-50 sm:text-5xl lg:text-6xl">
              A website that turns
              <span className="block text-blue-300">Google reviews into booked jobs.</span>
            </h1>
            <p className="mt-5 text-base text-slate-300 sm:text-lg">
              We build fast, done-for-you websites for plumbers, HVAC, and home service pros
              who already win on Google—but lose jobs because they don&apos;t have a real site.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="#demo"
                className="inline-flex items-center justify-center rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-400"
              >
                See a live demo
              </Link>
              <Link
                href="#pricing"
                className="inline-flex items-center justify-center rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-400 hover:text-white"
              >
                View pricing
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 lg:justify-start">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span>Built custom on Next.js, not WordPress templates</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span>Launch in as little as 10 days</span>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="mx-auto max-w-md rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl backdrop-blur">
              <p className="text-sm font-semibold text-slate-200">
                See what your business could look like online
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Tell us a bit about your business and we&apos;ll send over a personalized demo
                layout based on your Google profile.
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
                    <option value="landscaping">Landscaping / Lawn care</option>
                    <option value="cleaning">Cleaning services</option>
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
                  className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-blue-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-400"
                >
                  Get my free demo layout
                </button>
                <p className="mt-2 text-[11px] leading-relaxed text-slate-500">
                  No long calls. No spam. We&apos;ll send over a link that shows exactly how your
                  business could look online, then you decide if you want to move forward.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* TODO: additional sections (who this is for, what's included, process, pricing, FAQ) can follow here */}
    </div>
  );
}
