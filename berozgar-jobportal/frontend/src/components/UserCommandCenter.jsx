import React from 'react';
import { LayoutDashboard, Activity, CheckCircle, Clock } from 'lucide-react';
import './SharedPages.css';

const UserCommandCenter = () => {
    return (
        <div className="page-main-container">
            <div className="page-card-obsidian" style={{ maxWidth: '900px' }}>
                <div className="text-center">
                    <LayoutDashboard className="text-[#f59e0b] mx-auto mb-4" size={40} />
                    <h1 className="page-title">Command Center</h1>
                    <p className="page-subtitle">Your central hub for career telemetry</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="content-box-glass !p-6 text-center">
                        <Activity className="text-[#860af3] mx-auto mb-2" size={28} />
                        <h4 className="text-3xl font-black text-white">85%</h4>
                        <p className="text-xs uppercase tracking-widest text-slate-400 mt-1">Profile Vector</p>
                    </div>
                    <div className="content-box-glass !p-6 text-center">
                        <Clock className="text-amber-500 mx-auto mb-2" size={28} />
                        <h4 className="text-3xl font-black text-white">12</h4>
                        <p className="text-xs uppercase tracking-widest text-slate-400 mt-1">Pending Syncs</p>
                    </div>
                    <div className="content-box-glass !p-6 text-center">
                        <CheckCircle className="text-green-500 mx-auto mb-2" size={28} />
                        <h4 className="text-3xl font-black text-white">3</h4>
                        <p className="text-xs uppercase tracking-widest text-slate-400 mt-1">Interviews Secured</p>
                    </div>
                </div>

                <div className="content-box-glass">
                    <h3 className="text-white font-bold mb-4 border-b border-white/10 pb-2">Recent Telemetry (Activity)</h3>
                    <ul className="space-y-3 text-sm text-slate-300">
                        <li className="flex justify-between"><span>Applied: Frontend React Dev @ TechCorp</span> <span className="text-slate-500">2h ago</span></li>
                        <li className="flex justify-between"><span>ATS Scan Completed: Score 92%</span> <span className="text-slate-500">1d ago</span></li>
                        <li className="flex justify-between"><span>Profile Vector Updated</span> <span className="text-slate-500">3d ago</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default UserCommandCenter;
