import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { 
  Phone, Mail, MessageSquare, Send, CheckCircle2, 
  MapPin, ShieldCheck, FileText, AlertCircle, Sparkles 
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    sector: 'General Inquiry',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif text-slate-100">
            Contact <span className="gold-gradient-text">Muslim & Brothers</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Connect directly with our directors, department heads, or client relationship officers across Nigeria, Ghana, or North America.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Phone & Communication Hub */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
                <div className="w-12 h-12 rounded-xl gold-gradient-bg flex items-center justify-center font-bold text-slate-950 text-xl font-serif">
                  MB
                </div>
                <div>
                  <h3 className="text-lg font-bold font-serif text-slate-100">Corporate Hotlines</h3>
                  <p className="text-xs text-amber-400 font-semibold">Reg No: {COMPANY_INFO.registrationNumber}</p>
                </div>
              </div>

              {/* Nigeria Numbers */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Nigeria Head Office Lines</span>
                </div>
                <div className="space-y-1.5">
                  <a href="tel:+2349073407583" className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-amber-500/40 text-sm font-bold text-slate-100 flex items-center justify-between group transition-colors">
                    <span className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-amber-400" />
                      +234 9073407583
                    </span>
                    <span className="text-[10px] text-amber-400 uppercase font-semibold">Call Now</span>
                  </a>

                  <a href="tel:+2348033822068" className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-amber-500/40 text-sm font-bold text-slate-100 flex items-center justify-between group transition-colors">
                    <span className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-amber-400" />
                      +234 8033822068
                    </span>
                    <span className="text-[10px] text-amber-400 uppercase font-semibold">Call Now</span>
                  </a>

                  <a href="tel:+2348031512307" className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-amber-500/40 text-sm font-bold text-slate-100 flex items-center justify-between group transition-colors">
                    <span className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-amber-400" />
                      +234 8031512307
                    </span>
                    <span className="text-[10px] text-amber-400 uppercase font-semibold">Real Estate Desk</span>
                  </a>
                </div>
              </div>

              {/* Ghana & US Numbers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="space-y-1">
                  <div className="text-[11px] font-bold text-amber-400 uppercase">Ghana Branch:</div>
                  <a href="tel:+233591841501" className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-bold text-slate-200 block hover:underline">
                    +233 591841501
                  </a>
                </div>

                <div className="space-y-1">
                  <div className="text-[11px] font-bold text-amber-400 uppercase">United States Line:</div>
                  <a href="tel:+19406170970" className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-bold text-slate-200 block hover:underline">
                    +1 9406170970
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="pt-2 border-t border-slate-800">
                <div className="text-xs font-bold text-slate-400 uppercase mb-2">Corporate Email Address:</div>
                <a
                  href={`mailto:${COMPANY_INFO.mainEmail}`}
                  className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-amber-500/40 text-sm font-bold text-amber-400 flex items-center gap-2 hover:underline truncate"
                >
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="truncate">{COMPANY_INFO.mainEmail}</span>
                </a>
              </div>

              {/* Instant WhatsApp Shortcut */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/2349073407583?text=${encodeURIComponent('Hello Muslim and Brothers General Enterprises, I am reaching out from your corporate website.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Start Instant WhatsApp Chat</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form UI */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl space-y-6">
              <div>
                <h3 className="text-xl font-bold font-serif text-slate-100">Send Us an Inquiry</h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">Fill out the official inquiry form and our team will get back to you within 24 hours.</p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-slate-950 border border-amber-500/40 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold font-serif text-slate-100">Inquiry Received</h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name || 'Valued Client'}</strong>. Your message regarding <strong>{formData.sector}</strong> has been logged. Our corporate department will contact you at <strong>{formData.email || formData.phone}</strong> shortly.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', sector: 'General Inquiry', subject: '', message: '' }); }}
                    className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 gold-gradient-bg hover:brightness-110"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alhaji Ibrahim Danbatta"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-amber-500/60"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. client@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-amber-500/60"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +234 800 000 0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-amber-500/60"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Relevant Sector / Service</label>
                      <select
                        value={formData.sector}
                        onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs sm:text-sm focus:outline-none focus:border-amber-500/60"
                      >
                        <option value="General Inquiry">General Commercial Inquiry</option>
                        <option value="Import & Export Logistics">Importation & Freight Services</option>
                        <option value="Building Materials & Steel">Building Materials & Construction</option>
                        <option value="Real Estate & Land Acquisition">Real Estate & Property Agency</option>
                        <option value="Rice Supply (50kg Bags)">Rice Supply & Grain Sacks</option>
                        <option value="Spices & Commodity Trade">Spices & Agricultural Commodities</option>
                        <option value="Canned Sardines Wholesale">Sardine Fish Distribution</option>
                        <option value="Travel Consultancy & Visa Support">Travel Consultancy & Visas</option>
                        <option value="Corporate Procurement">Corporate & Govt Procurement</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Subject / Headline</label>
                    <input
                      type="text"
                      placeholder="e.g. Bulk Rice Supply Inquiry for Kano Depot"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-amber-500/60"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Message / Quotation Details *</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Please specify quantity, preferred delivery destination (Kano, Accra, etc.), or specific requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-amber-500/60"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 px-6 rounded-xl text-sm font-bold text-slate-950 gold-gradient-bg hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20 disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Processing Inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Corporate Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
