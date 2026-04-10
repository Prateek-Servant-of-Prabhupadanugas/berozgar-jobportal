import React from 'react';
import { Link } from 'react-router-dom';
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
                            <a href="https://www.facebook.com/share/18JRzBChfw/" target="_blank" rel="noopener noreferrer" className="social-pill-royal" aria-label="Facebook">
                                <Facebook size={18} />
                            </a>
                            <a href="https://x.com/berozgaars01" target="_blank" rel="noopener noreferrer" className="social-pill-royal" aria-label="Twitter">
                                <Twitter size={18} />
                            </a>
                            <a href="https://www.instagram.com/berozgaars01?igsh=bWdsemV0MWplcnVn" target="_blank" rel="noopener noreferrer" className="social-pill-royal" aria-label="Instagram">
                                <Instagram size={18} />
                            </a>
                            <a href="https://in.linkedin.com/company/berozgaars-com" target="_blank" rel="noopener noreferrer" className="social-pill-royal" aria-label="LinkedIn">
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-column">
                        <h3 className="column-title-royal">Ecosystem</h3>
                        <ul className="space-y-4">
                            <li><Link to="/about-mission" className="footer-link-royal block">About Our Mission</Link></li>
                            <li><Link to="/contact" className="footer-link-royal block">Contact Support</Link></li>
                            <li><Link to="/directory" className="footer-link-royal block">Service Directory</Link></li>
                            <li><Link to="/terms" className="footer-link-royal block">Legal Framework</Link></li>
                        </ul>
                    </div>

                    {/* For Candidates */}
                    <div className="footer-column">
                        <h3 className="column-title-royal">For Pioneers</h3>
                        <ul className="space-y-4">
                            <li><Link to="/opportunities" className="footer-link-royal block">Explore Opportunities</Link></li>
                            <li><Link to="/dashboard" className="footer-link-royal block">User Command Center</Link></li>
                            <li><Link to="/alerts" className="footer-link-royal block">Priority Alerts</Link></li>
                            <li><Link to="/resume" className="footer-link-royal block">Resume Optimization</Link></li>
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
                                <span className="text-slate-300">support@berozgaars.com</span>
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
                        <Link to="/privacy" className="hover:text-[#f59e0b] cursor-pointer transition-all">Privacy Policy</Link>
                        <Link to="/cookies" className="hover:text-[#f59e0b] cursor-pointer transition-all">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
