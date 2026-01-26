import React, { useEffect, useState } from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from '@/utils/constant';
import { setSingleJob } from '@/redux/jobSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';
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
                <div className='desc-header-card-3d'>
                    <div className='flex flex-col md:flex-row items-center justify-between gap-6'>
                        <div>
                            <h1 className='desc-main-title'>{singleJob?.title}</h1>
                            <div className='flex flex-wrap items-center gap-3 mt-4'>
                                <Badge className='desc-badge pos' variant="ghost">{singleJob?.position} Positions</Badge>
                                <Badge className='desc-badge type' variant="ghost">{singleJob?.jobType}</Badge>
                                <Badge className='desc-badge salary' variant="ghost">{singleJob?.salary}LPA</Badge>
                            </div>
                        </div>
                        <Button
                            onClick={isApplied ? null : applyJobHandler}
                            disabled={isApplied}
                            className={`apply-btn-3d ${isApplied ? 'applied-state' : 'active-state'}`}>
                            {isApplied ? 'Already Applied' : 'Apply Now'}
                        </Button>
                    </div>
                </div>

                {/* Information Grid */}
                <div className='details-glass-container mt-10'>
                    <h1 className='details-heading'>Job Overview</h1>
                    <div className='details-grid'>
                        <div className='detail-item-3d'>
                            <span className='detail-label'>Role</span>
                            <span className='detail-value'>{singleJob?.title}</span>
                        </div>
                        <div className='detail-item-3d'>
                            <span className='detail-label'>Location</span>
                            <span className='detail-value'>{singleJob?.location}</span>
                        </div>
                        <div className='detail-item-3d'>
                            <span className='detail-label'>Experience</span>
                            <span className='detail-value'>{singleJob?.experience} Years</span>
                        </div>
                        <div className='detail-item-3d'>
                            <span className='detail-label'>Salary</span>
                            <span className='detail-value'>{singleJob?.salary} LPA</span>
                        </div>
                        <div className='detail-item-3d'>
                            <span className='detail-label'>Applicants</span>
                            <span className='detail-value'>{singleJob?.applications?.length} Applied</span>
                        </div>
                        <div className='detail-item-3d'>
                            <span className='detail-label'>Posted Date</span>
                            <span className='detail-value'>{singleJob?.createdAt?.split("T")[0]}</span>
                        </div>
                    </div>

                    <div className='description-section mt-8'>
                        <h2 className='detail-label mb-3'>Detailed Description</h2>
                        <p className='detail-text-p'>{singleJob?.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobDescription;