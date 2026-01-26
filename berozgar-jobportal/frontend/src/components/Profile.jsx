import React, { useState } from 'react'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Contact, Mail, Pen } from 'lucide-react'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import AppliedJobTable from './AppliedJobTable'
import UpdateProfileDialog from './UpdateProfileDialog'
import { useSelector } from 'react-redux'
import useGetAppliedJobs from '@/hooks/useGetAppliedJobs'
import './Profile.css'

const Profile = () => {
    useGetAppliedJobs();
    const [open, setOpen] = useState(false);
    const { user } = useSelector(store => store.auth);

    return (
        <div className="profile-page-root">
            <Navbar />
            <div className='profile-container max-w-4xl mx-auto my-5 p-8'>
                <div className='flex justify-between items-start'>
                    <div className='flex items-center gap-6'>
                        <div className="avatar-3d-wrapper">
                            <Avatar className="h-24 w-24 border-4 border-[#EBD3F8]">
                                <AvatarImage src={user?.profile?.profilePhoto || "https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"} alt="profile" />
                            </Avatar>
                        </div>
                        <div>
                            <h1 className='profile-name-3d'>{user?.fullname}</h1>
                            <p className='profile-bio-3d'>{user?.profile?.bio || "No bio added yet."}</p>
                        </div>
                    </div>
                    <Button onClick={() => setOpen(true)} className="edit-btn-3d" variant="outline" size="icon"><Pen size={18} /></Button>
                </div>

                <div className='contact-info-section my-8'>
                    <div className='contact-pill'>
                        <Mail className="text-[#7A1CAC]" size={20} />
                        <span>{user?.email}</span>
                    </div>
                    <div className='contact-pill'>
                        <Contact className="text-[#7A1CAC]" size={20} />
                        <span>{user?.phoneNumber || "Not Provided"}</span>
                    </div>
                </div>

                <div className='my-8'>
                    <h1 className='section-subtitle'>Skills</h1>
                    <div className='flex flex-wrap items-center gap-2 mt-3'>
                        {
                            user?.profile?.skills.length !== 0 
                            ? user?.profile?.skills.map((item, index) => <Badge className="skill-badge-3d" key={index}>{item}</Badge>) 
                            : <span className="text-gray-400 italic">No skills listed</span>
                        }
                    </div>
                </div>

                <div className='resume-section-3d'>
                    <Label className="text-md font-bold text-[#2E073F]">Resume</Label>
                    <div className="mt-2">
                        {
                            user?.profile?.resume 
                            ? <a target='blank' href={user?.profile?.resume} className='resume-link-3d'>{user?.profile?.resumeOriginalName}</a> 
                            : <span className="text-gray-400">NA</span>
                        }
                    </div>
                </div>
            </div>

            <div className='max-w-4xl mx-auto mt-10 px-4'>
                <h1 className='applied-jobs-title'>Applied Jobs</h1>
                <div className="table-container-3d">
                    <AppliedJobTable />
                </div>
            </div>

            <UpdateProfileDialog open={open} setOpen={setOpen} />
        </div>
    )
}

export default Profile