import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';
import './SharedPages.css';

const ContactSupport = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
    };

    return (
        <div className="page-main-container">
            <div className="page-card-obsidian">
                <div className="text-center">
                    <MessageSquare className="text-[#f59e0b] mx-auto mb-4" size={40} />
                    <h1 className="page-title">Command Center Support</h1>
                    <p className="page-subtitle">Initiate a secure comm-link with our team</p>
                </div>

                <form onSubmit={handleSubmit} className="content-box-glass">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input 
                            type="text" 
                            placeholder="Designation / Name" 
                            className="glass-input"
                            required 
                        />
                        <input 
                            type="email" 
                            placeholder="Secure Email Array" 
                            className="glass-input"
                            required 
                        />
                    </div>
                    <input 
                        type="text" 
                        placeholder="Subject Vector" 
                        className="glass-input"
                        required 
                    />
                    <textarea 
                        placeholder="Transmit your message here..." 
                        className="glass-textarea"
                        required
                    ></textarea>
                    
                    <button type="submit" className="glass-btn flex items-center justify-center gap-2">
                        <Mail size={18} />
                        Transmit Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactSupport;
