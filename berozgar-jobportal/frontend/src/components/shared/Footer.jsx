import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            {/* The 3D Glass Card wrapper */}
            <div className="footer-glass-card mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 p-10 lg:p-16">
                    
                    {/* Brand Section */}
                    <div className="footer-section brand-column">
                        <h2 className="text-3xl font-bold mb-4 logo-3d-footer">
                            Job <span className="text-blue-500">Portal</span>
                        </h2>
                        <p className="text-gray-500 leading-relaxed mb-6">
                            Connecting talent with opportunity through a seamless, 3D-driven recruitment experience.
                        </p>
                        <div className="flex gap-4">
                            <div className="social-icon-3d"><Facebook size={20} /></div>
                            <div className="social-icon-3d"><Twitter size={20} /></div>
                            <div className="social-icon-3d"><Instagram size={20} /></div>
                            <div className="social-icon-3d"><Linkedin size={20} /></div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-section">
                        <h3 className="text-lg font-bold mb-6 text-gray-800">Quick Links</h3>
                        <ul className="space-y-4">
                            <li className="footer-link">About Us</li>
                            <li className="footer-link">Contact Support</li>
                            <li className="footer-link">Our Services</li>
                            <li className="footer-link">Terms of Service</li>
                        </ul>
                    </div>

                    {/* For Candidates */}
                    <div className="footer-section">
                        <h3 className="text-lg font-bold mb-6 text-gray-800">For Candidates</h3>
                        <ul className="space-y-4">
                            <li className="footer-link">Browse Jobs</li>
                            <li className="footer-link">Candidate Dashboard</li>
                            <li className="footer-link">Job Alerts</li>
                            <li className="footer-link">Resume Builder</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-section">
                        <h3 className="text-lg font-bold mb-6 text-gray-800">Contact Us</h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-gray-500 footer-contact-item">
                                <MapPin size={18} className="text-blue-500" />
                                <span>123 Tech Avenue, Silicon Valley</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-500 footer-contact-item">
                                <Phone size={18} className="text-blue-500" />
                                <span>+1 (555) 000-1234</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-500 footer-contact-item">
                                <Mail size={18} className="text-blue-500" />
                                <span>support@jobportal.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom-bar px-10 py-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-400">© 2026 Job Portal. All rights reserved.</p>
                    <div className="flex gap-8 text-sm text-gray-400">
                        <span className="hover:text-blue-500 cursor-pointer transition-colors">Privacy Policy</span>
                        <span className="hover:text-blue-500 cursor-pointer transition-colors">Cookies</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;