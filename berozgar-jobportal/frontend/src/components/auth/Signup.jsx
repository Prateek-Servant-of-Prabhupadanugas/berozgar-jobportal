import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '@/redux/authSlice'
import { Loader2, UserPlus, UploadCloud } from 'lucide-react'
import './Signup.css'

const Signup = () => {
    const [input, setInput] = useState({
        fullname: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "",
        file: ""
    });
    const { loading, user } = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }
    const changeFileHandler = (e) => {
        setInput({ ...input, file: e.target.files?.[0] });
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("fullname", input.fullname);
        formData.append("email", input.email);
        formData.append("phoneNumber", input.phoneNumber);
        formData.append("password", input.password);
        formData.append("role", input.role);
        if (input.file) { formData.append("file", input.file); }

        try {
            dispatch(setLoading(true));
            const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
                headers: { 'Content-Type': "multipart/form-data" },
                withCredentials: true,
            });
            if (res.data.success) {
                navigate("/login");
                toast.success(res.data.message);
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Registration failed");
        } finally {
            dispatch(setLoading(false));
        }
    }

    useEffect(() => {
        if (user) { navigate("/"); }
    }, [])

    return (
        <div className='signup-root-obsidian'>
            <Navbar />
            <div className='flex items-center justify-center min-h-[90vh] max-w-7xl mx-auto px-4'>
                <form onSubmit={submitHandler} className='signup-card-royal w-full max-w-2xl p-10 my-10'>
                    <div className="text-center mb-10">
                        <div className="icon-enroll mx-auto mb-4">
                            <UserPlus size={32} className="text-[#f59e0b]" />
                        </div>
                        <h1 className='font-black text-4xl text-white tracking-tighter'>Create Account</h1>
                        <p className='text-slate-400 text-sm mt-2 font-medium uppercase tracking-widest'>Join the elite talent network</p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className='input-group-royal'>
                            <Label className="label-royal">Full Name</Label>
                            <Input
                                type="text"
                                value={input.fullname}
                                name="fullname"
                                onChange={changeEventHandler}
                                placeholder="John Doe"
                                className="input-royal"
                            />
                        </div>
                        <div className='input-group-royal'>
                            <Label className="label-royal">Email Address</Label>
                            <Input
                                type="email"
                                value={input.email}
                                name="email"
                                onChange={changeEventHandler}
                                placeholder="john@example.com"
                                className="input-royal"
                            />
                        </div>
                        <div className='input-group-royal'>
                            <Label className="label-royal">Phone Number</Label>
                            <Input
                                type="text"
                                value={input.phoneNumber}
                                name="phoneNumber"
                                onChange={changeEventHandler}
                                placeholder="+91 00000 00000"
                                className="input-royal"
                            />
                        </div>
                        <div className='input-group-royal'>
                            <Label className="label-royal">Secret Password</Label>
                            <Input
                                type="password"
                                value={input.password}
                                name="password"
                                onChange={changeEventHandler}
                                placeholder="••••••••"
                                className="input-royal"
                            />
                        </div>
                    </div>

                    <div className='role-file-royal mt-10 p-6 rounded-3xl border border-white/5 bg-black/20'>
                        <div className='flex flex-col md:flex-row items-center justify-between gap-8'>
                            <div className="w-full md:w-1/2">
                                <Label className="label-royal mb-4 block">Identity Type</Label>
                                <RadioGroup className="flex items-center gap-4">
                                    <div className={`role-pill-signup ${input.role === 'student' ? 'active' : ''}`}>
                                        <Input
                                            type="radio"
                                            name="role"
                                            value="student"
                                            checked={input.role === 'student'}
                                            onChange={changeEventHandler}
                                            id="s1"
                                            className="hidden-radio"
                                        />
                                        <Label htmlFor="s1" className="cursor-pointer font-bold px-4 py-2">Student</Label>
                                    </div>
                                    <div className={`role-pill-signup ${input.role === 'recruiter' ? 'active' : ''}`}>
                                        <Input
                                            type="radio"
                                            name="role"
                                            value="recruiter"
                                            checked={input.role === 'recruiter'}
                                            onChange={changeEventHandler}
                                            id="s2"
                                            className="hidden-radio"
                                        />
                                        <Label htmlFor="s2" className="cursor-pointer font-bold px-4 py-2">Recruiter</Label>
                                    </div>
                                </RadioGroup>
                            </div>

                            <div className="w-full md:w-1/2">
                                <Label className="label-royal mb-4 block">Profile Image</Label>
                                <div className='file-royal-container'>
                                    <UploadCloud size={16} className="text-[#f59e0b]" />
                                    <Input
                                        accept="image/*"
                                        type="file"
                                        onChange={changeFileHandler}
                                        className="file-input-royal"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {loading ? (
                        <Button className="signup-btn-royal loading-state w-full mt-10" disabled>
                            <Loader2 className='mr-2 h-5 w-5 animate-spin' /> Finalizing Profile...
                        </Button>
                    ) : (
                        <Button type="submit" className="signup-btn-royal w-full mt-10">Register Now</Button>
                    )}

                    <div className='text-center mt-8'>
                        <span className='text-xs font-bold uppercase tracking-widest text-slate-500'>
                            Already an operative? <Link to="/login" className='login-link-royal'>Login Here</Link>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup;