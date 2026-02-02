import React from 'react';
import Navbar from './shared/Navbar';
import { ShieldCheck, FileText, Info } from 'lucide-react';
import './LegalPages.css';

export const PrivacyPolicy = () => (
    <div className="legal-root-obsidian">
        <Navbar />
        <div className="legal-container-royal">
            <div className="legal-tablet-3d">
                <div className="flex items-center gap-3 mb-4">
                    <ShieldCheck className="text-[#f59e0b]" size={32} />
                    <h1 className="legal-title-royal text-white">Privacy Policy</h1>
                </div>
                <p className="last-updated-royal text-[#f59e0b]">Last Updated: January 2026</p>
                <div className="legal-divider-royal"></div>
                
                <div className="legal-body-royal">
                    <section>
                        <h3><Info size={18} className="inline mr-2" /> 1. Data Collection</h3>
                        <p className="text-slate-300">At Berozgar Portal, we collect minimal data required for job matching and certification enrollment, including name, email, and professional history.</p>
                    </section>
                    <section>
                        <h3><FileText size={18} className="inline mr-2" /> 2. Local Analysis</h3>
                        <p className="text-slate-300">Our ATS Checker tool processes your resume locally in your browser. We do not store your raw resume files unless you explicitly upload them to your profile.</p>
                    </section>
                </div>
            </div>
        </div>
    </div>
);

export const TermsConditions = () => (
    <div className="legal-root-obsidian">
        <Navbar />
        <div className="legal-container-royal">
            <div className="legal-tablet-3d">
                <div className="flex items-center gap-3 mb-4">
                    <FileText className="text-[#f59e0b]" size={32} />
                    <h1 className="legal-title-royal text-white">Terms & Conditions</h1>
                </div>
                <p className="last-updated-royal text-[#f59e0b]">Effective: January 2026</p>
                <div className="legal-divider-royal"></div>

                <div className="legal-body-royal">
                    <section>
                        <h3>1. Service Usage</h3>
                        <p className="text-slate-300">Users must provide accurate information for background verification and certification services.</p>
                    </section>
                    <section>
                        <h3>2. Scam Alert Disclaimer</h3>
                        <p className="text-slate-300">While our Scam Job Alert is highly accurate, it is a free advisory service. Users should exercise personal caution.</p>
                    </section>
                </div>
            </div>
        </div>
    </div>
);