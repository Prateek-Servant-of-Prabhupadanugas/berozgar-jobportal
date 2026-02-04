import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className='hero-root-container'>
            {/* Soft Ambient Orbs for Depth */}
            <div className="purple-orb orb-1"></div>
            <div className="purple-orb orb-2"></div>

            <div className='hero-content-wrapper text-center'>
                <div className='flex flex-col gap-6 my-10'>
                    <div className='badge-3d-container mx-auto'>
                        <span className='badge-3d-text px-6 py-2 rounded-full font-bold uppercase tracking-wider'>
                            India's First Fully Backed By AI Integration <br />HR Tech Platform
                        </span>
                    </div>

                    <h1 className='hero-main-title text-5xl md:text-7xl font-extrabold'>
                        Search, Apply & <br /> 
                        Get Your <span className='text-gradient-royal'>Dream Jobs</span>
                    </h1>

                    <p className='hero-subtitle mx-auto max-w-2xl'>
                        Discover thousands of opportunities across the globe with our 3D-powered recruitment platform. Your next career move starts here.
                    </p>

                    {/* The Royal Search Architecture */}
                    <div className='search-3d-wrapper mx-auto'>
                        <div className='search-glass-inner flex items-center gap-4'>
                            <input
                                type="text"
                                placeholder='Find your dream jobs...'
                                onChange={(e) => setQuery(e.target.value)}
                                className='search-input-3d'
                            />
                            <Button 
                                onClick={searchJobHandler} 
                                className="search-btn-3d group"
                            >
                                <Search className='h-5 w-5 group-hover:scale-110 transition-transform' />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;