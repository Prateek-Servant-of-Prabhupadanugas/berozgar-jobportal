import React from 'react';
import { Layers, FileSearch, Target, Rocket } from 'lucide-react';
import './SharedPages.css';

const ServiceDirectory = () => {
    const services = [
        { icon: <FileSearch size={24} />, title: "Quantum ATS Scanner", desc: "Benchmark your resume against strict MERN & enterprise standards." },
        { icon: <Target size={24} />, title: "Precision Matchmaking", desc: "AI-driven algorithms to align your skill vector with pioneering companies." },
        { icon: <Rocket size={24} />, title: "Interview Simulator", desc: "Practice real-world coding and HR scenarios in our sandboxed environment." }
    ];

    return (
        <div className="page-main-container">
            <div className="page-card-obsidian">
                <div className="text-center">
                    <Layers className="text-[#f59e0b] mx-auto mb-4" size={40} />
                    <h1 className="page-title">Service Directory</h1>
                    <p className="page-subtitle">The Berozgaars Ecosystem Capabilities</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="content-box-glass flex flex-col items-center text-center p-6 hover:border-[#f59e0b] transition-colors cursor-pointer group">
                            <div className="text-slate-400 group-hover:text-[#f59e0b] transition-colors mb-4">
                                {service.icon}
                            </div>
                            <h3 className="text-white font-bold text-lg mb-2">{service.title}</h3>
                            <p className="text-sm text-slate-400">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceDirectory;
