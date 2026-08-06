import React, { useState, useEffect } from 'react';
import { X, FileText, CheckCircle2, Send, ShieldCheck, Calculator } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedSector?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, preselectedSector }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    sector: preselectedSector || 'Rice & Grain Distribution',
    quantity: '',
    destination: 'Kano, Nigeria',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (preselectedSector) {
      setFormData(prev => ({ ...prev, sector: preselectedSector }));
    }
  }, [preselectedSector]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-xl w-full p-6 sm:p-8 space-y-6 relative shadow-2xl max-h-[90vh] overflow-y-auto">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-slate-100"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl gold-gradient-bg text-slate-950 font-bold">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">
              Official Request • BN {COMPANY_INFO.registrationNumber}
            </span>
            <h3 className="text-xl font-bold font-serif text-slate-100">Corporate Quotation Request</h3>
          </div>
        </div>

        {submitted ? (
          <div className="p-8 rounded-2xl bg-slate-950 border border-amber-500/40 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold font-serif text-slate-100">Quotation Request Logged</h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Thank you, <strong>{formData.fullName}</strong>. Your quotation request for <strong>{formData.sector}</strong> has been transmitted to our corporate desk.
            </p>
            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 gold-gradient-bg hover:brightness-110"
            >
              Return to Website
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="font-semibold text-slate-300">Full Name / Officer Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alhaji Sadiq Abubakar"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500/60"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-semibold text-slate-300">Company / Organization</label>
                <input
                  type="text"
                  placeholder="e.g. Kano Commercial Ltd"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500/60"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="font-semibold text-slate-300">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. contact@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500/60"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-semibold text-slate-300">Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +234 9073407583"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500/60"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="font-semibold text-slate-300">Select Commodity / Sector *</label>
                <select
                  value={formData.sector}
                  onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:outline-none focus:border-amber-500/60"
                >
                  <option value="Rice Supply (50kg Bags)">Rice Supply & Grain Sacks (50kg)</option>
                  <option value="Building Materials & Steel">Building Materials, Steel & Rebar</option>
                  <option value="Real Estate Acquisition">Real Estate & Land Acquisition</option>
                  <option value="Spices & Culinary Commodities">Spices & Agricultural Commodities</option>
                  <option value="Canned Sardine Fish">Canned Sardines Distribution</option>
                  <option value="Import Freight & Logistics">Import Freight & Clearance</option>
                  <option value="Travel Consultancy & Visa">Travel Consultancy & Visas</option>
                  <option value="Corporate Procurement">Corporate & Govt Procurement</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="font-semibold text-slate-300">Target Delivery Hub *</label>
                <select
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:outline-none focus:border-amber-500/60"
                >
                  <option value="Kano, Nigeria">Kano Head Office / Market Depots</option>
                  <option value="Abuja / Lagos, Nigeria">Abuja / Lagos, Nigeria</option>
                  <option value="Greater Accra, Ghana">Greater Accra Branch, Ghana</option>
                  <option value="International Destination">International Freight</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="font-semibold text-slate-300">Estimated Volume / Quantity</label>
              <input
                type="text"
                placeholder="e.g. 500 bags of 50kg Rice / 20 Tons Rebar Steel"
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500/60"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-semibold text-slate-300">Additional Instructions</label>
              <textarea
                rows={3}
                placeholder="Specific delivery timelines, branding requirements, or inquiry notes..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500/60"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 px-6 rounded-xl text-xs sm:text-sm font-bold text-slate-950 gold-gradient-bg hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20 disabled:opacity-50"
            >
              {loading ? <span>Generating Quote...</span> : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Transmit Quote Request</span>
                </>
              )}
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
