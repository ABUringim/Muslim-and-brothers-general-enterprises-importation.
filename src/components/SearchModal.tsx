import React, { useState } from 'react';
import { Search, X, ArrowRight, UserCheck, Building2, Layers, Briefcase, Phone } from 'lucide-react';
import { SERVICES_DATA, BUSINESS_SECTORS, LEADERSHIP_TEAM, OFFICE_LOCATIONS } from '../data/companyData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuoteModal: (sector?: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onOpenQuoteModal }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const matchedServices = query.trim() ? SERVICES_DATA.filter(s => 
    s.title.toLowerCase().includes(query.toLowerCase()) || 
    s.shortDesc.toLowerCase().includes(query.toLowerCase())
  ) : [];

  const matchedSectors = query.trim() ? BUSINESS_SECTORS.filter(sec => 
    sec.name.toLowerCase().includes(query.toLowerCase()) || 
    sec.description.toLowerCase().includes(query.toLowerCase())
  ) : [];

  const matchedLeaders = query.trim() ? LEADERSHIP_TEAM.filter(m => 
    m.name.toLowerCase().includes(query.toLowerCase()) || 
    m.rank.toLowerCase().includes(query.toLowerCase()) ||
    m.email.toLowerCase().includes(query.toLowerCase())
  ) : [];

  const matchedLocations = query.trim() ? OFFICE_LOCATIONS.filter(loc => 
    loc.country.toLowerCase().includes(query.toLowerCase()) || 
    loc.type.toLowerCase().includes(query.toLowerCase()) ||
    loc.address.some(a => a.toLowerCase().includes(query.toLowerCase()))
  ) : [];

  const totalResults = matchedServices.length + matchedSectors.length + matchedLeaders.length + matchedLocations.length;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full p-6 space-y-6 relative shadow-2xl max-h-[80vh] overflow-y-auto">
        
        {/* Search Header Input */}
        <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
          <Search className="w-5 h-5 text-amber-400 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search services, rice supply, leadership, offices, real estate..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-slate-100 placeholder-slate-500 text-sm sm:text-base focus:outline-none"
          />
          <button onClick={onClose} className="p-1 rounded-lg text-slate-400 hover:text-slate-100">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Body */}
        {query.trim() === '' ? (
          <div className="py-8 text-center space-y-2">
            <p className="text-xs text-slate-400">Type keywords to search across Muslim and Brothers General Enterprises portal.</p>
            <div className="flex flex-wrap justify-center gap-2 pt-2">
              {['Rice Supply', 'Habib Umar Usman', 'Building Materials', 'Ghana Office', 'Sardines', 'Travel Consultancy'].map((k, i) => (
                <button
                  key={i}
                  onClick={() => setQuery(k)}
                  className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-[11px] text-amber-400 hover:border-amber-500/40"
                >
                  {k}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="text-xs text-slate-400">Found {totalResults} result(s) for "{query}"</div>

            {/* Services Results */}
            {matchedServices.length > 0 && (
              <div className="space-y-2">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>Services ({matchedServices.length})</span>
                </div>
                <div className="space-y-2">
                  {matchedServices.map(service => (
                    <div key={service.id} className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-slate-100">{service.title}</div>
                        <div className="text-[11px] text-slate-400 line-clamp-1">{service.shortDesc}</div>
                      </div>
                      <button
                        onClick={() => { onClose(); onOpenQuoteModal(service.title); }}
                        className="px-3 py-1.5 rounded-lg text-[11px] font-bold text-slate-950 gold-gradient-bg shrink-0 ml-2"
                      >
                        Quote
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Leadership Results */}
            {matchedLeaders.length > 0 && (
              <div className="space-y-2">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <UserCheck className="w-3.5 h-3.5" />
                  <span>Leadership & Team ({matchedLeaders.length})</span>
                </div>
                <div className="space-y-2">
                  {matchedLeaders.map(leader => (
                    <div key={leader.id} className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-slate-100">{leader.name}</div>
                        <div className="text-[11px] text-amber-400 font-medium">{leader.rank}</div>
                      </div>
                      <a
                        href={`tel:${leader.phones[0].replace(/\s+/g, '')}`}
                        className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-amber-400 hover:bg-slate-800 text-xs font-bold flex items-center gap-1 shrink-0"
                      >
                        <Phone className="w-3 h-3" />
                        <span>Call</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Offices Results */}
            {matchedLocations.length > 0 && (
              <div className="space-y-2">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Office Locations ({matchedLocations.length})</span>
                </div>
                <div className="space-y-2">
                  {matchedLocations.map(loc => (
                    <div key={loc.id} className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                      <div className="text-xs font-bold text-slate-100">{loc.type} ({loc.country})</div>
                      <div className="text-[11px] text-slate-400">{loc.address.join(', ')}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {totalResults === 0 && (
              <div className="py-8 text-center text-xs text-slate-400">
                No matching services or leadership contacts found for "{query}".
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
