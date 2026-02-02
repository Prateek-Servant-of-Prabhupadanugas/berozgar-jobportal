import React from 'react';
import './ServicePage.css';
import Navbar from './shared/Navbar';
import { ChevronRight, Zap, Sparkles, BookOpen } from 'lucide-react';

const ServicePage = ({ title, subtitle, items, color }) => {
    return (
        <div className="service-root-obsidian">
            <Navbar />
            <div className="hero-obsidian-section" style={{ '--theme-color': color }}>
                <div className="max-w-7xl mx-auto px-6 py-28 flex flex-col items-center text-center">
                    <div className="flex items-center gap-2 mb-4 animate-bounce">
                        <Zap size={20} className="text-[#f59e0b]" fill="#f59e0b" />
                        <span className="text-[#f59e0b] font-black uppercase tracking-[0.3em] text-xs">Premium Service</span>
                    </div>
                    <h1 className="hero-title-royal">{title}</h1>
                    <p className="hero-subtitle-royal text-slate-300">{subtitle}</p>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 -mt-20 mb-24">
                <div className="content-card-obsidian">
                    <div className="flex items-center gap-3 mb-10 border-l-4 border-[#f59e0b] pl-4">
                        <BookOpen className="text-[#f59e0b]" size={24} />
                        <h2 className="text-2xl font-black text-white uppercase tracking-tight">Available Programs</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {items.map((item, index) => (
                            <div key={index} className="program-slot-royal">
                                <div className="flex items-center justify-between">
                                    <span className="font-bold text-slate-200">{item}</span>
                                    <div className="chevron-circle">
                                        <ChevronRight size={18} className="text-white" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <button className="apply-btn-royal-service mt-12">
                        <Sparkles size={18} />
                        Request Full Curriculum
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServicePage;