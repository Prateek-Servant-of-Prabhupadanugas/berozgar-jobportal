import React, { useState } from 'react'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Contact, Mail, Pen, ExternalLink, Sparkles } from 'lucide-react'
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
        <div className="profile-root-obsidian">
            <Navbar />
            <div className='profile-container-royal max-w-4xl mx-auto my-10 p-10'>
                <div className='flex justify-between items-start'>
                    <div className='flex items-center gap-8'>
                        <div className="avatar-royal-wrapper">
                            <Avatar className="h-28 w-28 border-4 border-[#AD49E1] shadow-2xl">
                                <AvatarImage src={user?.profile?.profilePhoto || "https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"} alt="profile" />
                            </Avatar>
                            <div className="status-indicator-royal"></div>
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <h1 className='profile-name-royal text-white'>{user?.fullname}</h1>
                                <Sparkles size={18} className="text-[#f59e0b]" />
                            </div>
                            <p className='profile-bio-royal text-slate-400'>{user?.profile?.bio || "Digital Pioneer & Opportunity Seeker."}</p>
                        </div>
                    </div>
                    <Button onClick={() => setOpen(true)} className="edit-btn-royal" variant="outline" size="icon">
                        <Pen size={18} />
                    </Button>
                </div>

                <div className='contact-info-royal my-10'>
                    <div className='contact-pill-royal'>
                        <Mail className="text-[#f59e0b]" size={18} />
                        <span className="text-slate-200">{user?.email}</span>
                    </div>
                    <div className='contact-pill-royal'>
                        <Contact className="text-[#f59e0b]" size={18} />
                        <span className="text-slate-200">{user?.phoneNumber || "Secure Line Private"}</span>
                    </div>
                </div>

                <div className='my-10'>
                    <h1 className='section-subtitle-royal text-white'>Core Competencies</h1>
                    <div className='flex flex-wrap items-center gap-3 mt-4'>
                        {
                            user?.profile?.skills.length !== 0 
                            ? user?.profile?.skills.map((item, index) => <Badge className="skill-badge-royal" key={index}>{item}</Badge>) 
                            : <span className="text-slate-500 italic">No skill tags detected.</span>
                        }
                    </div>
                </div>

                <div className='resume-section-royal'>
                    <Label className="text-sm font-black uppercase tracking-widest text-[#f59e0b]">Professional Resume</Label>
                    <div className="mt-4">
                        {
                            user?.profile?.resume 
                            ? <a target='blank' href={user?.profile?.resume} className='resume-link-royal'>
                                <ExternalLink size={16} className="mr-2" />
                                {user?.profile?.resumeOriginalName}
                              </a> 
                            : <span className="text-slate-500">Not Uploaded</span>
                        }
                    </div>
                </div>
            </div>

            <div className='max-w-4xl mx-auto mt-16 px-4 pb-20'>
                <div className="flex items-center gap-3 mb-6">
                    <div className="h-1 w-10 bg-[#f59e0b] rounded-full"></div>
                    <h1 className='applied-jobs-title-royal text-white'>Application History</h1>
                </div>
                <div className="table-container-royal">
                    <AppliedJobTable />
                </div>
            </div>

            <UpdateProfileDialog open={open} setOpen={setOpen} />
        </div>
    )
}

export default Profile;