import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BadgeCheck, ShieldCheck, Cpu, GraduationCap, Sparkles } from 'lucide-react';
import './Certifications.css';

const Certifications = () => {
    const navigate = useNavigate();

    const categories = [
        {
            id: "tech",
            title: "Digital & Tech Academy",
            icon: <GraduationCap size={32} />,
            items: ["Digital Marketing", "SEO (Search Engine)", "Revenue Operations", "Microsoft Office Tools", "Python (Core & Adv)"],
            path: "/academy/tech"
        },
        {
            id: "healthcare",
            title: "Healthcare & Safety",
            icon: <ShieldCheck size={32} />,
            items: ["BLS", "ACLS", "PALS", "Bloodborne Pathogens", "First Aid Training"],
            path: "/academy/healthcare"
        },
        {
            id: "crm",
            title: "CRM & Sales Mastery",
            icon: <Cpu size={32} />,
            items: ["Salesforce", "Leadsquad", "Hubspot", "C.R.M. Analysis", "Sales Pitch & CX"],
            path: "/academy/crm"
        },
        {
            id: "services",
            title: "Premium Candidate Services",
            icon: <BadgeCheck size={32} />,
            items: ["Background Verification", "Scam Job Alert", "Resume Building", "End-to-End Mentorship"],
            path: "/academy/services"
        }
    ];

    return (
        <div className="cert-section-container">
            <div className="text-center mb-16">
                <div className="flex justify-center mb-4">
                    <Sparkles className="text-[#f59e0b] animate-pulse" />
                </div>
                <h1 className="cert-main-title text-white">Berozgar Academy & Services</h1>
                <p className="cert-subtitle text-[#f59e0b] opacity-80">Select a category to explore professional tuition and career services</p>
            </div>

            <div className="cert-grid">
                {categories.map((cat) => (
                    <div className="cert-card-obsidian" key={cat.id}>
                        <div className="card-icon-wrapper-royal">
                            {cat.icon}
                        </div>
                        <h3 className="card-category-title text-white">{cat.title}</h3>
                        <ul className="card-list">
                            {cat.items.map((item, i) => (
                                <li key={i} className="card-list-item text-slate-300">
                                    <span className="bullet-royal"></span> {item}
                                </li>
                            ))}
                        </ul>
                        <div className="card-footer mt-auto">
                            <button 
                                onClick={() => navigate(cat.path)} 
                                className="enroll-btn-royal"
                            >
                                View Details & Enroll
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Certifications;