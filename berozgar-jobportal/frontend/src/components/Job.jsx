import React from 'react';
import { Button } from './ui/button';
import { Bookmark } from 'lucide-react';
import { Avatar, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { useNavigate } from 'react-router-dom';
import './Job.css';

const Job = ({ job }) => {
    const navigate = useNavigate();

    const daysAgoFunction = (mongodbTime) => {
        const createdAt = new Date(mongodbTime);
        const currentTime = new Date();
        const timeDifference = currentTime - createdAt;
        return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
    }

    return (
        <div className='job-card-3d'>
            {/* Top Section: Date & Bookmark */}
            <div className='flex items-center justify-between mb-4'>
                <p className='days-badge-3d'>
                    {daysAgoFunction(job?.createdAt) === 0 ? "Today" : `${daysAgoFunction(job?.createdAt)} days ago`}
                </p>
                <Button variant="ghost" className="bookmark-btn-3d" size="icon">
                    <Bookmark size={20} />
                </Button>
            </div>

            {/* Company Info Section */}
            <div className='flex items-center gap-4 my-4'>
                <div className='logo-container-3d'>
                    <Avatar className="w-12 h-12 shadow-inner">
                        <AvatarImage src={job?.company?.logo} />
                    </Avatar>
                </div>
                <div>
                    <h1 className='company-name-3d'>{job?.company?.name}</h1>
                    <p className='location-text-3d'>India</p>
                </div>
            </div>

            {/* Job Details Section */}
            <div className='job-content-3d'>
                <h1 className='job-title-3d'>{job?.title}</h1>
                <p className='job-desc-3d line-clamp-2'>{job?.description}</p>
            </div>

            {/* Badges Section */}
            <div className='flex flex-wrap items-center gap-2 mt-5'>
                <Badge className='badge-3d pos-badge' variant="ghost">{job?.position} Positions</Badge>
                <Badge className='badge-3d type-badge' variant="ghost">{job?.jobType}</Badge>
                <Badge className='badge-3d salary-badge' variant="ghost">{job?.salary} LPA</Badge>
            </div>

            {/* Action Buttons Section */}
            <div className='flex items-center gap-4 mt-6'>
                <Button 
                    onClick={() => navigate(`/description/${job?._id}`)} 
                    variant="outline" 
                    className="details-btn-3d w-full"
                >
                    Details
                </Button>
                <Button className="save-btn-3d w-full">
                    Save For Later
                </Button>
            </div>
        </div>
    )
}

export default Job;