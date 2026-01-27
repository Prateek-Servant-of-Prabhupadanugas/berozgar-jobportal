import React from 'react';
import './ServicePage.css';
import Navbar from './shared/Navbar';
import { ChevronRight, Zap } from 'lucide-react';

const ServicePage = ({ title, subtitle, items, color }) => {
    return (
        <div className="service-page-wrapper">
            <Navbar />
            <div className="hero-3d-section" style={{ '--theme-color': color }}>
                <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col items-center">
                    <h1 className="hero-title-3d">{title}</h1>
                    <p className="hero-subtitle">{subtitle}</p>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 -mt-16 mb-20">
                <div className="content-card-3d">
                    <h2 className="text-2xl font-bold mb-8 text-[#2E073F]">Available Programs</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {items.map((item, index) => (
                            <div key={index} className="program-item-3d">
                                <div className="flex items-center justify-between">
                                    <span className="font-semibold text-gray-700">{item}</span>
                                    <ChevronRight className="text-[#AD49E1]" />
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="apply-now-btn">Request Full Curriculum</button>
                </div>
            </div>
        </div>
    );
};

export default ServicePage;