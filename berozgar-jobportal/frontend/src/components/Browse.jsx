import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import Job from './Job';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import useGetAllJobs from '@/hooks/useGetAllJobs';
import './Browse.css'

const Browse = () => {
    useGetAllJobs();
    const { allJobs } = useSelector(store => store.job);
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(setSearchedQuery(""));
        }
    }, [])

    return (
        <div className="browse-page-root">
            <Navbar />
            <div className='max-w-7xl mx-auto my-10 px-4'>
                {/* 3D Header Section */}
                <div className="browse-header-3d">
                    <h1 className='font-bold text-2xl my-10 section-title'>
                        Search Results 
                        <span className='results-badge'>{allJobs.length}</span>
                    </h1>
                    <div className="title-underline"></div>
                </div>

                {/* Responsive 3D Grid */}
                <div className='job-grid-3d'>
                    {
                        allJobs.map((job) => {
                            return (
                                <div key={job._id} className="job-card-wrapper">
                                    <Job job={job} />
                                </div>
                            )
                        })
                    }
                </div>
                
                {allJobs.length === 0 && (
                    <div className="empty-state-3d">
                        <p>No jobs found matching your criteria.</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Browse