import React, { useEffect, useState } from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from '@/utils/constant';
import { setSingleJob } from '@/redux/jobSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';
import { Briefcase, MapPin, IndianRupee, Users, Calendar, Sparkles } from 'lucide-react';
import './JobDescription.css';

const JobDescription = () => {
    const { singleJob } = useSelector(store => store.job);
    const { user } = useSelector(store => store.auth);
    const isIntiallyApplied = singleJob?.applications?.some(application => application.applicant === user?._id) || false;
    const [isApplied, setIsApplied] = useState(isIntiallyApplied);

    const params = useParams();
    const jobId = params.id;
    const dispatch = useDispatch();

    const applyJobHandler = async () => {
        try {
            const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`, { withCredentials: true });
            if (res.data.success) {
                setIsApplied(true);
                const updatedSingleJob = { ...singleJob, applications: [...singleJob.applications, { applicant: user?._id }] }
                dispatch(setSingleJob(updatedSingleJob));
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }

    useEffect(() => {
        const fetchSingleJob = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, { withCredentials: true });
                if (res.data.success) {
                    dispatch(setSingleJob(res.data.job));
                    setIsApplied(res.data.job.applications.some(application => application.applicant === user?._id))
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchSingleJob();
    }, [jobId, dispatch, user?._id]);

    return (
        <div className='description-root-container'>
            <div className='max-w-7xl mx-auto my-10 px-4'>
                {/* Header Section Card */}
                <div className='desc-header-card-obsidian'>
                    <div className='flex flex-col md:flex-row items-center justify-between gap-6'>
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <Sparkles size={16} className="text-[#f59e0b]" />
                                <span className="text-[#f59e0b] text-xs font-bold uppercase tracking-widest">Premium Listing</span>
                            </div>
                            <h1 className='desc-main-title text-white'>{singleJob?.title}</h1>
                            <div className='flex flex-wrap items-center gap-3 mt-4'>
                                <Badge className='desc-badge-royal pos' variant="ghost">{singleJob?.position} Positions</Badge>
                                <Badge className='desc-badge-royal type' variant="ghost">{singleJob?.jobType}</Badge>
                                <Badge className='desc-badge-royal salary' variant="ghost">{singleJob?.salary} LPA</Badge>
                            </div>
                        </div>
                        <Button
                            onClick={isApplied ? null : applyJobHandler}
                            disabled={isApplied}
                            className={`apply-btn-royal ${isApplied ? 'applied-state' : 'active-state'}`}>
                            {isApplied ? 'Application Sent' : 'Confirm & Apply'}
                        </Button>
                    </div>
                </div>

                {/* Information Grid */}
                <div className='details-obsidian-container mt-10'>
                    <h1 className='details-heading-royal text-white'>Executive Job Overview</h1>
                    <div className='details-grid'>
                        <div className='detail-item-royal'>
                            <div className="flex items-center gap-2">
                                <Briefcase size={16} className="text-[#f59e0b]" />
                                <span className='detail-label-royal'>Role</span>
                            </div>
                            <span className='detail-value-royal text-slate-200'>{singleJob?.title}</span>
                        </div>
                        <div className='detail-item-royal'>
                            <div className="flex items-center gap-2">
                                <MapPin size={16} className="text-[#f59e0b]" />
                                <span className='detail-label-royal'>Location</span>
                            </div>
                            <span className='detail-value-royal text-slate-200'>{singleJob?.location}</span>
                        </div>
                        <div className='detail-item-royal'>
                            <div className="flex items-center gap-2">
                                <Sparkles size={16} className="text-[#f59e0b]" />
                                <span className='detail-label-royal'>Experience</span>
                            </div>
                            <span className='detail-value-royal text-slate-200'>{singleJob?.experience} Years</span>
                        </div>
                        <div className='detail-item-royal'>
                            <div className="flex items-center gap-2">
                                <IndianRupee size={16} className="text-[#f59e0b]" />
                                <span className='detail-label-royal'>Package</span>
                            </div>
                            <span className='detail-value-royal text-slate-200'>{singleJob?.salary} LPA</span>
                        </div>
                        <div className='detail-item-royal'>
                            <div className="flex items-center gap-2">
                                <Users size={16} className="text-[#f59e0b]" />
                                <span className='detail-label-royal'>Applicants</span>
                            </div>
                            <span className='detail-value-royal text-slate-200'>{singleJob?.applications?.length} Candidates</span>
                        </div>
                        <div className='detail-item-royal'>
                            <div className="flex items-center gap-2">
                                <Calendar size={16} className="text-[#f59e0b]" />
                                <span className='detail-label-royal'>Posted Date</span>
                            </div>
                            <span className='detail-value-royal text-slate-200'>{singleJob?.createdAt?.split("T")[0]}</span>
                        </div>
                    </div>

                    <div className='description-section-royal mt-12'>
                        <h2 className='detail-label-royal mb-4 border-l-4 border-[#f59e0b] pl-3'>Detailed Mandate</h2>
                        <p className='detail-text-royal text-slate-400'>{singleJob?.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobDescription;