import React, { useState } from 'react'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Loader2, User, Mail, Phone, Book, Code, FileUp } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { setUser } from '@/redux/authSlice'
import { toast } from 'sonner'
import './UpdateProfileDialog.css'

const UpdateProfileDialog = ({ open, setOpen }) => {
    const [loading, setLoading] = useState(false);
    const { user } = useSelector(store => store.auth);

    const [input, setInput] = useState({
        fullname: user?.fullname || "",
        email: user?.email || "",
        phoneNumber: user?.phoneNumber || "",
        bio: user?.profile?.bio || "",
        skills: user?.profile?.skills?.map(skill => skill) || "",
        file: user?.profile?.resume || ""
    });
    const dispatch = useDispatch();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const fileChangeHandler = (e) => {
        const file = e.target.files?.[0];
        setInput({ ...input, file })
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("fullname", input.fullname);
        formData.append("email", input.email);
        formData.append("phoneNumber", input.phoneNumber);
        formData.append("bio", input.bio);
        formData.append("skills", input.skills);
        if (input.file) {
            formData.append("file", input.file);
        }
        try {
            setLoading(true);
            const res = await axios.post(`${USER_API_END_POINT}/profile/update`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
                withCredentials: true
            });
            if (res.data.success) {
                dispatch(setUser(res.data.user));
                toast.success(res.data.message);
                setOpen(false);
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Update failed");
        } finally {
            setLoading(false);
        }
    }

    return (
        <Dialog open={open}>
            <DialogContent 
                className="dialog-obsidian-content sm:max-w-[450px]" 
                onInteractOutside={() => setOpen(false)}
            >
                <DialogHeader>
                    <DialogTitle className="dialog-title-royal text-white">Update Identity</DialogTitle>
                </DialogHeader>
                <form onSubmit={submitHandler} className="mt-4">
                    <div className='grid gap-4 py-2'>
                        <div className='input-group-royal'>
                            <Label htmlFor="fullname" className="label-royal"><User size={14} /> Full Name</Label>
                            <Input id="fullname" name="fullname" value={input.fullname} onChange={changeEventHandler} className="input-royal" />
                        </div>
                        <div className='input-group-royal'>
                            <Label htmlFor="email" className="label-royal"><Mail size={14} /> Email</Label>
                            <Input id="email" name="email" type="email" value={input.email} onChange={changeEventHandler} className="input-royal" />
                        </div>
                        <div className='flex gap-4'>
                            <div className='input-group-royal flex-1'>
                                <Label htmlFor="phoneNumber" className="label-royal"><Phone size={14} /> Phone</Label>
                                <Input id="phoneNumber" name="phoneNumber" value={input.phoneNumber} onChange={changeEventHandler} className="input-royal" />
                            </div>
                            <div className='input-group-royal flex-1'>
                                <Label htmlFor="skills" className="label-royal"><Code size={14} /> Skills</Label>
                                <Input id="skills" name="skills" value={input.skills} onChange={changeEventHandler} className="input-royal" />
                            </div>
                        </div>
                        <div className='input-group-royal'>
                            <Label htmlFor="bio" className="label-royal"><Book size={14} /> Bio</Label>
                            <Input id="bio" name="bio" value={input.bio} onChange={changeEventHandler} className="input-royal" />
                        </div>
                        <div className='input-group-royal'>
                            <Label htmlFor="file" className="label-royal"><FileUp size={14} /> Resume (PDF)</Label>
                            <Input id="file" name="file" type="file" accept="application/pdf" onChange={fileChangeHandler} className="file-input-royal" />
                        </div>
                    </div>
                    <DialogFooter className="mt-6">
                        {loading ? (
                            <Button className="update-btn-royal loading-state w-full" disabled>
                                <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Finalizing...
                            </Button>
                        ) : (
                            <Button type="submit" className="update-btn-royal w-full">Save Profile Changes</Button>
                        )}
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default UpdateProfileDialog