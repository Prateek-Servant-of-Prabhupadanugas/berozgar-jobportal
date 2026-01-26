import React from 'react'
import LatestJobCards from './LatestJobCards';
import { useSelector } from 'react-redux'; 
import './LatestJobs.css';

const LatestJobs = () => {
    const { allJobs } = useSelector(store => store.job);
   
    return (
        <div className='latest-jobs-section max-w-7xl mx-auto my-20 px-4'>
            <div className="section-header-3d">
                <h1 className='text-4xl font-extrabold main-heading'>
                    <span className='text-purplish-gradient'>Latest & Top </span> 
                    Job Openings
                </h1>
                <div className="header-accent-line"></div>
            </div>

            <div className='latest-grid-3d my-10'>
                {
                    allJobs.length <= 0 ? (
                        <div className="empty-jobs-card">
                            <span>No Job Available at the moment</span>
                        </div>
                    ) : (
                        allJobs?.slice(0, 6).map((job) => (
                            <div key={job._id} className="grid-item-perspective">
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