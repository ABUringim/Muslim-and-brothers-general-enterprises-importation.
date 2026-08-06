import React, { useState } from 'react';
import { LEADERSHIP_TEAM } from '../data/companyData';
import { LeadershipMember } from '../types';
import { 
  Users, Phone, Mail, MessageSquare, Search, 
  MapPin, UserCheck, Shield, ChevronRight, X, Copy, Check 
} from 'lucide-react';

export const LeadershipSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState<string>('all');
  const [activeLeaderModal, setActiveLeaderModal] = useState<LeadershipMember | null>(null);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const departments = [
    { id: 'all', label: 'All Leadership' },
    { id: 'executive', label: 'Executive Board' },
    { id: 'marketing', label: 'Marketing & Kwari/Singers Reps' },
    { id: 'real_estate', label: 'Real Estate Division' },
    { id: 'technical', label: 'IT & Cloud Systems' },
    { id: 'operations', label: 'Secretariat & Operations' },
    { id: 'advisory', label: 'Advisory Board' },
  ];

  const filteredLeaders = LEADERSHIP_TEAM.filter(member => {
    const matchesDept = selectedDept === 'all' || member.department === selectedDept;
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          member.rank.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          member.email.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDept && matchesSearch;
  });

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <section id="leadership" className="py-20 md:py-28 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5" />
            Executive Governance
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif text-slate-100">
            Leadership <span className="gold-gradient-text">& Management Team</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Meet the visionary executives, industry specialists, and commercial representatives steering Muslim and Brothers General Enterprises.
          </p>
        </div>

        {/* Search & Department Filters */}
        <div className="space-y-6 mb-12">
          {/* Search Box */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search team member by name, rank, or keyword..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-amber-500/60"
            />
            {searchTerm && (
              <button onClick={() => setSearchTerm('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200">
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Department Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedDept(dept.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedDept === dept.id
                    ? 'gold-gradient-bg text-slate-950 font-bold shadow-md shadow-amber-500/20'
                    : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-amber-400'
                }`}
              >
                {dept.label}
              </button>
            ))}
          </div>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredLeaders.map((member) => (
            <div
              key={member.id}
              className="group rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 shadow-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                {/* Header Avatar Area */}
                <div className="p-6 pb-4 bg-gradient-to-b from-slate-950 to-slate-900 border-b border-slate-800/80 relative">
                  <div className="flex items-start gap-4">
                    {/* Avatar Silhouette */}
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-slate-800 border-2 border-amber-500/30 shrink-0 shadow-md">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-slate-800 text-amber-400 font-bold text-xl font-serif">
                          {member.name.substring(0, 2)}
                        </div>
                      )}
                    </div>

                    {/* Title Details */}
                    <div className="space-y-1 flex-1 min-w-0">
                      <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20 uppercase tracking-wider">
                        {member.rank}
                      </span>
                      <h3 className="text-lg font-bold font-serif text-slate-100 truncate group-hover:text-amber-400 transition-colors">
                        {member.name}
                      </h3>
                      {member.location && (
                        <div className="flex items-center gap-1 text-[11px] text-slate-400">
                          <MapPin className="w-3 h-3 text-amber-400 shrink-0" />
                          <span className="truncate">{member.location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Details Body */}
                <div className="p-6 space-y-4">
                  {member.bio && (
                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                      {member.bio}
                    </p>
                  )}

                  {/* Phone List */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-800/60">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Direct Contacts:</div>
                    {member.phones.map((phone, pIdx) => (
                      <a
                        key={pIdx}
                        href={`tel:${phone.replace(/\s+/g, '')}`}
                        className="flex items-center gap-2 text-xs text-amber-400 font-medium hover:underline"
                      >
                        <Phone className="w-3.5 h-3.5 shrink-0" />
                        <span>{phone}</span>
                      </a>
                    ))}
                  </div>

                  {/* Email */}
                  {member.email && (
                    <div className="text-xs text-slate-300 pt-1">
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center gap-2 text-slate-300 hover:text-amber-400 truncate"
                      >
                        <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span className="truncate">{member.email}</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-4 bg-slate-950/60 border-t border-slate-800 flex items-center justify-between gap-2">
                <button
                  onClick={() => setActiveLeaderModal(member)}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 hover:text-amber-400 hover:bg-slate-800 inline-flex items-center gap-1 transition-colors"
                >
                  <UserCheck className="w-3.5 h-3.5 text-amber-400" />
                  <span>View Details</span>
                </button>

                <a
                  href={`https://wa.me/${member.phones[0].replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hello ${member.name}, I would like to inquire regarding Muslim and Brothers General Enterprises.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 inline-flex items-center gap-1 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredLeaders.length === 0 && (
          <div className="text-center py-12 bg-slate-900 rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-sm">No leadership profiles found matching your search term.</p>
            <button onClick={() => { setSearchTerm(''); setSelectedDept('all'); }} className="mt-2 text-xs text-amber-400 underline">
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Leader Detail Modal */}
      {activeLeaderModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-6 relative shadow-2xl">
            
            <button
              onClick={() => setActiveLeaderModal(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-800 border-2 border-amber-500/40 shrink-0">
                {activeLeaderModal.image ? (
                  <img src={activeLeaderModal.image} alt={activeLeaderModal.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center font-serif text-amber-400 font-bold text-2xl">
                    {activeLeaderModal.name.substring(0, 2)}
                  </div>
                )}
              </div>
              <div>
                <span className="text-xs text-amber-400 uppercase tracking-wider font-bold block">{activeLeaderModal.rank}</span>
                <h3 className="text-2xl font-bold font-serif text-slate-100">{activeLeaderModal.name}</h3>
                <span className="text-xs text-slate-400 block">{activeLeaderModal.location || 'Muslim & Brothers Executive'}</span>
              </div>
            </div>

            {activeLeaderModal.bio && (
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950 p-4 rounded-xl border border-slate-800">
                {activeLeaderModal.bio}
              </p>
            )}

            <div className="space-y-3">
              <div className="text-xs font-bold text-slate-200">Phone Hotline(s):</div>
              {activeLeaderModal.phones.map((ph, idx) => (
                <div key={idx} className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs">
                  <a href={`tel:${ph.replace(/\s+/g, '')}`} className="text-amber-400 font-semibold hover:underline flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5" />
                    <span>{ph}</span>
                  </a>
                  <button
                    onClick={() => handleCopy(ph, `phone-${idx}`)}
                    className="p-1 rounded text-slate-400 hover:text-amber-400"
                    title="Copy Phone"
                  >
                    {copiedText === `phone-${idx}` ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              ))}

              {activeLeaderModal.email && (
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs mt-2">
                  <a href={`mailto:${activeLeaderModal.email}`} className="text-slate-200 hover:text-amber-400 flex items-center gap-2 truncate">
                    <Mail className="w-3.5 h-3.5 text-amber-400" />
                    <span className="truncate">{activeLeaderModal.email}</span>
                  </a>
                  <button
                    onClick={() => handleCopy(activeLeaderModal.email, 'email')}
                    className="p-1 rounded text-slate-400 hover:text-amber-400"
                    title="Copy Email"
                  >
                    {copiedText === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              )}
            </div>

            <div className="pt-2 flex gap-3">
              <a
                href={`tel:${activeLeaderModal.phones[0].replace(/\s+/g, '')}`}
                className="flex-1 py-3 px-4 rounded-xl text-xs font-bold text-slate-950 gold-gradient-bg flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Directly</span>
              </a>
              <a
                href={`mailto:${activeLeaderModal.email || 'muslimandbrothers1222@gmail.com'}`}
                className="flex-1 py-3 px-4 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 flex items-center justify-center gap-2 border border-slate-700"
              >
                <Mail className="w-4 h-4 text-amber-400" />
                <span>Send Email</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
