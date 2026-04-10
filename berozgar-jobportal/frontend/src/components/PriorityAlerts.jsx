import React from 'react';
import { BellRing, Zap, Shield } from 'lucide-react';
import './SharedPages.css';

const PriorityAlerts = () => {
    return (
        <div className="page-main-container">
            <div className="page-card-obsidian">
                <div className="text-center">
                    <BellRing className="text-[#f59e0b] mx-auto mb-4" size={40} />
                    <h1 className="page-title">Priority Alerts</h1>
                    <p className="page-subtitle">Configure your real-time notification arrays</p>
                </div>

                <div className="space-y-4">
                    <div className="content-box-glass flex items-center justify-between !p-5">
                        <div className="flex gap-4 items-center">
                            <Zap className="text-[#f59e0b]" size={24} />
                            <div>
                                <h3 className="text-white font-bold">Quantum Job Matches</h3>
                                <p className="text-sm text-slate-400">Instantly notify me when a job matches my 90%+ skill vector.</p>
                            </div>
                        </div>
                        {/* Custom Glass Toggle */}
                        <div className="w-12 h-6 bg-[#f59e0b]/20 rounded-full flex items-center p-1 border border-[#f59e0b]/50 cursor-pointer">
                            <div className="w-4 h-4 bg-[#f59e0b] rounded-full translate-x-6 transition-transform"></div>
                        </div>
                    </div>

                    <div className="content-box-glass flex items-center justify-between !p-5 opacity-70">
                        <div className="flex gap-4 items-center">
                            <Shield className="text-[#860af3]" size={24} />
                            <div>
                                <h3 className="text-white font-bold">Application Status Updates</h3>
                                <p className="text-sm text-slate-400">Get alerts when recruiters view or process your data blob.</p>
                            </div>
                        </div>
                        <div className="w-12 h-6 bg-slate-800 rounded-full flex items-center p-1 border border-slate-600 cursor-pointer">
                            <div className="w-4 h-4 bg-slate-500 rounded-full transition-transform"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PriorityAlerts;
