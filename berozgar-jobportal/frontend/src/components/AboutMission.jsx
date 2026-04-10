import React from 'react';
import { Sparkles, Target } from 'lucide-react';
import './SharedPages.css';

const AboutMission = () => {
    return (
        <div className="page-main-container">
            <div className="page-card-obsidian">
                <div className="text-center">
                    <Target className="text-[#f59e0b] mx-auto mb-4" size={40} />
                    <h1 className="page-title">Our Mission</h1>
                    <p className="page-subtitle">Architecting the Future of Recruitment</p>
                </div>

                <div className="content-box-glass">
                    <p className="mb-6">
                        At <strong className="text-white">Berozgaars</strong>, we believe the traditional hiring process is broken. We are here to bridge the gap between pioneering companies and exceptional talent using state-of-the-art AI and a high-fidelity ecosystem.
                    </p>
                    <p className="mb-6">
                        Our platform is engineered to eliminate bias, accelerate the ATS pipeline, and provide a quantum leap in user experience. We don't just match resumes to job descriptions; we align human potential with the future of work.
                    </p>
                    <div className="mt-8 flex items-center justify-center gap-2 text-[#f59e0b] font-bold text-sm uppercase tracking-widest">
                        <Sparkles size={16} />
                        <span>Empowering the Next Generation</span>
                        <Sparkles size={16} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMission;
