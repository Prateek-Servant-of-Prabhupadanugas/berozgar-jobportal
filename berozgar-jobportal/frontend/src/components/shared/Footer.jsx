import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-root-obsidian">
            <div className="footer-obsidian-slab mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 p-12 lg:p-16">
                    
                    {/* Brand Section */}
                    <div className="footer-column">
                        <h1 className='text-3xl font-black mb-6 logo-royal-footer text-white'>
                            Be<span className='text-[#f59e0b]'>Rozgaars</span>
                        </h1>
                        <p className="text-slate-400 leading-relaxed mb-8 font-medium">
                            Architecting the future of recruitment with a seamless, high-fidelity talent experience.
                        </p>
                        <div className="flex gap-4">
                            <div className="social-pill-royal"><Facebook size={18} /></div>
                            <div className="social-pill-royal"><Twitter size={18} /></div>
                            <div className="social-pill-royal"><Instagram size={18} /></div>
                            <div className="social-pill-royal"><Linkedin size={18} /></div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-column">
                        <h3 className="column-title-royal">Ecosystem</h3>
                        <ul className="space-y-4">
                            <li className="footer-link-royal">About Our Mission</li>
                            <li className="footer-link-royal">Contact Support</li>
                            <li className="footer-link-royal">Service Directory</li>
                            <li className="footer-link-royal">Legal Framework</li>
                        </ul>
                    </div>

                    {/* For Candidates */}
                    <div className="footer-column">
                        <h3 className="column-title-royal">For Pioneers</h3>
                        <ul className="space-y-4">
                            <li className="footer-link-royal">Explore Opportunities</li>
                            <li className="footer-link-royal">User Command Center</li>
                            <li className="footer-link-royal">Priority Alerts</li>
                            <li className="footer-link-royal">Resume Optimization</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-column">
                        <h3 className="column-title-royal">Headquarters</h3>
                        <div className="space-y-5">
                            <div className="flex items-center gap-4 contact-item-royal">
                                <div className="contact-icon-box"><MapPin size={16} /></div>
                                <span className="text-slate-300">Vadodara, Gujarat</span>
                            </div>
                            <div className="flex items-center gap-4 contact-item-royal">
                                <div className="contact-icon-box"><Mail size={16} /></div>
                                <span className="text-slate-300">hq@berozgaars.com</span>
                            </div>
                            <div className="mt-6 flex items-center gap-2 text-[#f59e0b] font-bold text-sm uppercase tracking-widest">
                                <Sparkles size={14} />
                                <span>Powered by AI</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom-royal px-12 py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">
                        © 2026 Berozgaars. Secured & Encrypted.
                    </p>
                    <div className="flex gap-10 text-xs font-bold uppercase tracking-widest text-slate-500">
                        <span className="hover:text-[#f59e0b] cursor-pointer transition-all">Privacy Policy</span>
                        <span className="hover:text-[#f59e0b] cursor-pointer transition-all">Cookies</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;