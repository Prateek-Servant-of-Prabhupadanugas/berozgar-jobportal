import React from 'react';
import { BadgeCheck, ShieldCheck, Cpu, Briefcase, GraduationCap, CreditCard } from 'lucide-react';
import './Certifications.css';

const Certifications = () => {
    const categories = [
        {
            title: "Digital & Tech Academy",
            icon: <GraduationCap size={32} />,
            items: ["Digital Marketing", "SEO (Search Engine)", "Revenue Operations", "Microsoft Office Tools", "Python (Core & Adv)"]
        },
        {
            title: "Healthcare & Safety",
            icon: <ShieldCheck size={32} />,
            items: ["BLS", "ACLS", "PALS", "Bloodborne Pathogens", "First Aid Training"]
        },
        {
            title: "CRM & Sales Mastery",
            icon: <Cpu size={32} />,
            items: ["Salesforce", "Leadsquad", "Hubspot", "C.R.M. Analysis", "Sales Pitch & CX"]
        },
        {
            title: "Premium Candidate Services",
            icon: <BadgeCheck size={32} />,
            items: ["Background Verification", "Scam Job Alert (Free)", "NFC/QR Smart Cards", "Resume & LinkedIn Mgmt", "End-to-End Mentorship"]
        }
    ];

    return (
        <div className="cert-section-container">
            <div className="text-center mb-12">
                <h1 className="cert-main-title">Berozgar Academy & Services</h1>
                <p className="cert-subtitle">Elevate your profile with industry-recognized certifications and smart services</p>
            </div>

            <div className="cert-grid">
                {categories.map((cat, index) => (
                    <div className="cert-card-3d" key={index}>
                        <div className="card-icon-wrapper">
                            {cat.icon}
                        </div>
                        <h3 className="card-category-title">{cat.title}</h3>
                        <ul className="card-list">
                            {cat.items.map((item, i) => (
                                <li key={i} className="card-list-item">
                                    <span className="bullet"></span> {item}
                                </li>
                            ))}
                        </ul>
                        <div className="card-footer">
                            <button className="enroll-btn-3d">Inquire Now</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Specialty Service Highlight */}
            <div className="specialty-banner-3d">
                <div className="flex items-center gap-4">
                    <CreditCard size={40} className="text-[#AD49E1]" />
                    <div>
                        <h4 className="font-bold text-white">NFC / QR Document Cards</h4>
                        <p className="text-sm text-purple-200">Carry your entire portfolio in your pocket.</p>
                    </div>
                </div>
                <button className="posh-badge">POSH Certified Training</button>
            </div>
        </div>
    );
};

export default Certifications;