import React from 'react';
import { Wand2, Cpu } from 'lucide-react';
// import { Link } from 'react-router-dom'; // Uncomment when ready to link
import './SharedPages.css';

const ResumeOptimization = () => {
    return (
        <div className="page-main-container">
            <div className="page-card-obsidian text-center">
                <Wand2 className="text-[#f59e0b] mx-auto mb-4" size={50} />
                <h1 className="page-title">Resume Optimization</h1>
                <p className="page-subtitle">Inject AI intelligence into your career blob</p>

                <div className="content-box-glass mt-8 mb-8 text-left">
                    <p className="mb-4">
                        Modern Application Tracking Systems (ATS) ruthlessly filter out top talent simply because their document formatting disrupts the parsing algorithms.
                    </p>
                    <p className="mb-4">
                        Our <strong className="text-white">Quantum ATS Scanner</strong> acts as a compiler for your resume. It runs your PDF through the same logic engines used by Fortune 500 companies, detecting missing node dependencies (skills) and formatting syntax errors.
                    </p>
                    
                    <div className="bg-[#0f172a] border border-[#860af3]/30 rounded-lg p-4 mt-6 flex items-center gap-4">
                        <Cpu className="text-[#860af3]" size={30} />
                        <div>
                            <h4 className="text-white font-bold text-sm">Powered by Client-Side Processing</h4>
                            <p className="text-xs text-slate-400">Your PDF blob never leaves your browser. 100% privacy maintained.</p>
                        </div>
                    </div>
                </div>

                {/* Replace standard button with React Router Link when ready */}
                <button className="glass-btn !w-auto px-12 py-4 text-lg shadow-[0_0_20px_rgba(245,158,11,0.3)]">
                    Launch ATS Scanner
                </button>
            </div>
        </div>
    );
};

export default ResumeOptimization;
