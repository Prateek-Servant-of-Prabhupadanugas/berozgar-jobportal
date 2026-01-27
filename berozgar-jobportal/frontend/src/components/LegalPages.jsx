import React from 'react';
import Navbar from './shared/Navbar';
import './LegalPages.css';

export const PrivacyPolicy = () => (
    <div className="legal-bg">
        <Navbar />
        <div className="legal-container">
            <div className="legal-doc-3d">
                <h1 className="legal-title">Privacy Policy</h1>
                <p className="last-updated">Last Updated: January 2026</p>
                <div className="legal-body">
                    <section>
                        <h3>1. Data Collection</h3>
                        <p>At Berozgar Portal, we collect minimal data required for job matching and certification enrollment, including name, email, and professional history.</p>
                    </section>
                    <section>
                        <h3>2. Local Analysis</h3>
                        <p>Our ATS Checker tool processes your resume locally in your browser. We do not store your raw resume files unless you explicitly upload them to your profile.</p>
                    </section>
                </div>
            </div>
        </div>
    </div>
);

export const TermsConditions = () => (
    <div className="legal-bg">
        <Navbar />
        <div className="legal-container">
            <div className="legal-doc-3d">
                <h1 className="legal-title">Terms & Conditions</h1>
                <p className="last-updated">Effective: Jan 2026</p>
                <div className="legal-body">
                    <section>
                        <h3>1. Service Usage</h3>
                        <p>Users must provide accurate information for background verification and certification services.</p>
                    </section>
                    <section>
                        <h3>2. Scam Alert Disclaimer</h3>
                        <p>While our Scam Job Alert is highly accurate, it is a free advisory service. Users should exercise personal caution.</p>
                    </section>
                </div>
            </div>
        </div>
    </div>
);