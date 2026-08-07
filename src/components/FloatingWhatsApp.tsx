import React, { useState } from 'react';
import { MessageSquare, X, Send, ChevronUp, ChevronDown } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickOptions = [
    { label: "General Business Inquiry", query: "Hello Muslim and Brothers, I have a general corporate inquiry." },
    { label: "Mobile Phones & Gadgets Dealership", query: "Hello, I want to inquire about bulk/retail prices for mobile phones and gadgets." },
    { label: "Textiles & Quality Fabrics Inquiry", query: "Hello, I want to inquire about textiles, lace, and Kwari market fabrics." },
    { label: "Commercial & Industrial Materials", query: "Hello, I am looking for general commercial and industrial materials supply." },
    { label: "Rice Supply Inquiry (50kg)", query: "Hello, I want to inquire about bulk 50kg Rice Supply prices." },
    { label: "Real Estate & Property Agency", query: "Hello, I am interested in property acquisition/agency in Kano/Accra." },
    { label: "Building Materials & Steel Rebar", query: "Hello, I would like a quote for construction building materials." }
  ];

  const handleOpenWhatsApp = (text: string) => {
    const phone = COMPANY_INFO.primaryWhatsApp.replace(/[^0-9]/g, '');
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {isOpen && (
        <div className="mb-3 w-72 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl p-4 space-y-3 animate-fadeIn text-slate-100">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500 text-slate-950 flex items-center justify-center font-bold">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold font-serif text-slate-100">Muslim & Brothers</div>
                <div className="text-[10px] text-emerald-400 font-medium">WhatsApp Support Online</div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-1 rounded text-slate-400 hover:text-slate-100">
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[11px] text-slate-300">Select an inquiry topic to chat directly on WhatsApp:</p>

          <div className="space-y-1.5">
            {quickOptions.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleOpenWhatsApp(opt.query)}
                className="w-full text-left p-2 rounded-xl bg-slate-950 border border-slate-800 hover:border-emerald-500/40 hover:bg-slate-800 text-[11px] font-medium text-slate-200 transition-colors flex items-center justify-between group"
              >
                <span>{opt.label}</span>
                <Send className="w-3 h-3 text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
              </button>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-all flex items-center justify-center shadow-2xl shadow-emerald-500/40 hover:scale-110 active:scale-95 group"
        title="Chat on WhatsApp"
        id="floating-whatsapp-btn"
      >
        <MessageSquare className="w-7 h-7 text-slate-950 fill-slate-950 group-hover:rotate-12 transition-transform" />
      </button>
    </div>
  );
};
