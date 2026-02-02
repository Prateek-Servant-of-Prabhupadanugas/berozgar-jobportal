import React from 'react';
import { Button } from './ui/button';
import { Bookmark, MapPin, Briefcase, IndianRupee } from 'lucide-react';
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
        <div className='job-card-obsidian'>
            {/* Date & Bookmark */}
            <div className='flex items-center justify-between mb-4'>
                <p className='days-badge-royal'>
                    {daysAgoFunction(job?.createdAt) === 0 ? "Today" : `${daysAgoFunction(job?.createdAt)} days ago`}
                </p>
                <Button variant="ghost" className="bookmark-btn-royal" size="icon">
                    <Bookmark size={20} />
                </Button>
            </div>

            {/* Company Info Section */}
            <div className='flex items-center gap-4 my-4'>
                <div className='logo-container-royal'>
                    <Avatar className="w-12 h-12 shadow-2xl">
                        <AvatarImage src={job?.company?.logo} />
                    </Avatar>
                </div>
                <div>
                    <h1 className='company-name-royal text-white'>{job?.company?.name}</h1>
                    <div className='flex items-center gap-1 text-[#f59e0b] opacity-80 text-xs'>
                        <MapPin size={12} />
                        <span>India</span>
                    </div>
                </div>
            </div>

            {/* Job Details Section */}
            <div className='job-content-3d'>
                <h1 className='job-title-royal text-white'>{job?.title}</h1>
                <p className='job-desc-royal line-clamp-2 text-slate-400'>{job?.description}</p>
            </div>

            {/* Badges Section */}
            <div className='flex flex-wrap items-center gap-2 mt-5'>
                <Badge className='badge-royal pos-badge' variant="ghost">
                   <Briefcase size={12} className="mr-1" /> {job?.position} Positions
                </Badge>
                <Badge className='badge-royal type-badge' variant="ghost">
                    {job?.jobType}
                </Badge>
                <Badge className='badge-royal salary-badge' variant="ghost">
                   <IndianRupee size={12} className="mr-1" /> {job?.salary} LPA
                </Badge>
            </div>

            {/* Action Buttons Section */}
            <div className='flex items-center gap-4 mt-6'>
                <Button 
                    onClick={() => navigate(`/description/${job?._id}`)} 
                    className="details-btn-royal w-full"
                >
                    Details
                </Button>
                <Button className="save-btn-royal w-full">
                    Save Later
                </Button>
            </div>
        </div>
    )
}

export default Job;