import React from 'react';
import { Compass, Search, MapPin, Briefcase } from 'lucide-react';
import './SharedPages.css';

const ExploreOpportunities = () => {
    return (
        <div className="page-main-container">
            <div className="page-card-obsidian" style={{ maxWidth: '1000px' }}>
                <div className="text-center">
                    <Compass className="text-[#f59e0b] mx-auto mb-4" size={40} />
                    <h1 className="page-title">Explore Opportunities</h1>
                    <p className="page-subtitle">Discover high-fidelity roles matching your tech stack</p>
                </div>

                {/* Search Bar Segment */}
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <div className="relative flex-1">
                        <Search className="absolute left-4 top-3.5 text-slate-400" size={20} />
                        <input type="text" placeholder="Search roles, skills, or vectors..." className="glass-input !pl-12 !mb-0" />
                    </div>
                    <button className="glass-btn md:w-auto px-8">Initialize Search</button>
                </div>

                {/* Dummy Job List */}
                <div className="space-y-4">
                    {[1, 2, 3].map((job) => (
                        <div key={job} className="content-box-glass !p-5 flex flex-col md:flex-row justify-between items-center gap-4 hover:border-[#860af3] transition-all">
                            <div>
                                <h3 className="text-white font-bold text-xl">Senior MERN Architect</h3>
                                <div className="flex gap-4 mt-2 text-sm text-slate-400">
                                    <span className="flex items-center gap-1"><Briefcase size={14} /> Full-time</span>
                                    <span className="flex items-center gap-1"><MapPin size={14} /> Remote (India)</span>
                                </div>
                            </div>
                            <button className="text-[#f59e0b] font-bold uppercase text-sm tracking-wider hover:text-white transition-colors border border-[#f59e0b]/30 px-4 py-2 rounded-lg bg-[#f59e0b]/5">
                                View Array
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExploreOpportunities;
