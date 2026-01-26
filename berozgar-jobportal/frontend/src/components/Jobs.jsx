import React, { useEffect, useState } from 'react'
import Navbar from './shared/Navbar'
import FilterCard from './FilterCard'
import Job from './Job';
import { useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import './Jobs.css';

const Jobs = () => {
    const { allJobs, searchedQuery } = useSelector(store => store.job);
    const [filterJobs, setFilterJobs] = useState(allJobs);

    useEffect(() => {
        if (searchedQuery) {
            const filteredJobs = allJobs.filter((job) => {
                return job.title.toLowerCase().includes(searchedQuery.toLowerCase()) ||
                    job.description.toLowerCase().includes(searchedQuery.toLowerCase()) ||
                    job.location.toLowerCase().includes(searchedQuery.toLowerCase())
            })
            setFilterJobs(filteredJobs)
        } else {
            setFilterJobs(allJobs)
        }
    }, [allJobs, searchedQuery]);

    return (
        <div className="jobs-page-wrapper">
            <Navbar />
            <div className='max-w-7xl mx-auto mt-8 px-4'>
                <div className='flex flex-col md:flex-row gap-8'>
                    {/* Left Sidebar: Filter Section */}
                    <div className='filter-sidebar-container'>
                        <FilterCard />
                    </div>

                    {/* Right Section: Job Listings */}
                    {
                        filterJobs.length <= 0 ? (
                            <div className="no-job-3d">
                                <span className="no-job-text">No Jobs Found matching your search.</span>
                            </div>
                        ) : (
                            <div className='jobs-scroll-area'>
                                <div className='jobs-grid-3d'>
                                    <AnimatePresence>
                                        {
                                            filterJobs.map((job) => (
                                                <motion.div
                                                    layout
                                                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                                    exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
                                                    transition={{ duration: 0.4, ease: "circOut" }}
                                                    key={job?._id}
                                                    className="job-card-motion-wrapper"
                                                >
                                                    <Job job={job} />
                                                </motion.div>
                                            ))
                                        }
                                    </AnimatePresence>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Jobs;