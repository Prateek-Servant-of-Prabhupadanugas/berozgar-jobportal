import React from 'react'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'
import './LatestJobCards.css'

const LatestJobCards = ({ job }) => {
    const navigate = useNavigate();

    return (
        <div 
            onClick={() => navigate(`/description/${job._id}`)} 
            className='latest-job-card-3d'
        >
            <div className='card-content-inner'>
                <div className='flex flex-col gap-1'>
                    <h1 className='company-title-3d'>{job?.company?.name}</h1>
                    <p className='location-subtext'>India • Remote Friendly</p>
                </div>
                
                <div className='my-4'>
                    <h1 className='job-role-title-3d'>{job?.title}</h1>
                    <p className='job-desc-snippet'>{job?.description}</p>
                </div>

                <div className='flex flex-wrap items-center gap-2 mt-4'>
                    <Badge className='latest-badge pos-tag' variant="ghost">
                        {job?.position} Positions
                    </Badge>
                    <Badge className='latest-badge type-tag' variant="ghost">
                        {job?.jobType}
                    </Badge>
                    <Badge className='latest-badge salary-tag' variant="ghost">
                        {job?.salary}LPA
                    </Badge>
                </div>
            </div>
            
            {/* 3D Decorative Accent */}
            <div className='card-glow-accent'></div>
        </div>
    )
}

export default LatestJobCards