import React from 'react'
import LatestJobCards from './LatestJobCards';
import { useSelector } from 'react-redux'; 
import { Sparkles } from 'lucide-react';
import './LatestJobs.css';

const LatestJobs = () => {
    const { allJobs } = useSelector(store => store.job);
   
    return (
        <div className='latest-jobs-section max-w-7xl mx-auto my-20 px-4'>
            <div className="section-header-royal">
                <div className="flex items-center gap-3 mb-2">
                    <Sparkles className="text-[#f59e0b] animate-pulse" size={24} />
                    <span className="royal-subtitle">Premier Opportunities</span>
                </div>
                <h1 className='text-5xl font-black main-heading-royal'>
                    <span className='text-amber-gradient'>Latest & Top </span> 
                    <span className="text-white">Job Openings</span>
                </h1>
                <div className="header-accent-line-royal"></div>
            </div>

            <div className='latest-grid-royal my-10'>
                {
                    allJobs.length <= 0 ? (
                        <div className="empty-jobs-card-royal">
                            <div className="glass-inner">
                                <span>No Job Available at the moment</span>
                            </div>
                        </div>
                    ) : (
                        allJobs?.slice(0, 6).map((job) => (
                            <div key={job._id} className="grid-item-perspective-royal">
                                <LatestJobCards job={job} />
                            </div>
                        ))
                    )
                }
            </div>
        </div>
    )
}

export default LatestJobs