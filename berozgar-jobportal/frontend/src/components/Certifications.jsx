import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BadgeCheck, ShieldCheck, Cpu, GraduationCap, CreditCard } from 'lucide-react';
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
            <div className="text-center mb-12">
                <h1 className="cert-main-title">Berozgar Academy & Services</h1>
                <p className="cert-subtitle">Select a category to explore professional tution and career services</p>
            </div>

            <div className="cert-grid">
                {categories.map((cat) => (
                    <div className="cert-card-3d" key={cat.id}>
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
                            {/* Connection to the service pages */}
                            <button 
                                onClick={() => navigate(cat.path)} 
                                className="enroll-btn-3d"
                            >
                                View Details & Enroll
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Sticky Specialty Highlight */}
            
        </div>
    );
};

export default Certifications;