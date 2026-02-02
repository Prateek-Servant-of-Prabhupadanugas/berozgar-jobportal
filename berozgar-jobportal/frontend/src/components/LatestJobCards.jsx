import React from 'react'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'
import { MapPin, Sparkles } from 'lucide-react'
import './LatestJobCards.css'

const LatestJobCards = ({ job }) => {
    const navigate = useNavigate();

    return (
        <div 
            onClick={() => navigate(`/description/${job._id}`)} 
            className='latest-job-card-obsidian'
        >
            <div className='card-content-inner-royal'>
                <div className='flex justify-between items-start'>
                    <div className='flex flex-col gap-1'>
                        <h1 className='company-title-royal text-white'>{job?.company?.name}</h1>
                        <div className='flex items-center gap-1 text-[#f59e0b] opacity-70'>
                            <MapPin size={12} />
                            <p className='location-subtext-royal'>India • Remote</p>
                        </div>
                    </div>
                    <Sparkles size={16} className="text-[#f59e0b] opacity-50" />
                </div>
                
                <div className='my-4'>
                    <h1 className='job-role-title-royal text-white'>{job?.title}</h1>
                    <p className='job-desc-snippet-royal text-slate-400'>{job?.description}</p>
                </div>

                <div className='flex flex-wrap items-center gap-2 mt-4'>
                    <Badge className='latest-badge-royal pos-tag' variant="ghost">
                        {job?.position} Positions
                    </Badge>
                    <Badge className='latest-badge-royal type-tag' variant="ghost">
                        {job?.jobType}
                    </Badge>
                    <Badge className='latest-badge-royal salary-tag' variant="ghost">
                        {job?.salary}LPA
                    </Badge>
                </div>
            </div>
            
            {/* The "Royal" Glow Effect */}
            <div className='card-glow-royal'></div>
        </div>
    )
}

export default LatestJobCards