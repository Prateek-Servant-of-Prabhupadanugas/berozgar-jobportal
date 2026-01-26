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
import { Loader2 } from 'lucide-react'
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
        if (input.file) {
            formData.append("file", input.file);
        }

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
            console.log(error);
            toast.error(error.response?.data?.message || "Registration failed");
        } finally {
            dispatch(setLoading(false));
        }
    }

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [])

    return (
        <div className='signup-page-container'>
            <Navbar />
            <div className='flex items-center justify-center max-w-7xl mx-auto px-4'>
                <form onSubmit={submitHandler} className='signup-form-3d w-full max-w-lg p-8 my-10'>
                    <div className="text-center mb-6">
                        <h1 className='font-extrabold text-3xl text-[#2E073F]'>Create Account</h1>
                        <p className='text-gray-500 text-sm'>Join our community and find your dream job</p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className='input-group'>
                            <Label className="label-style">Full Name</Label>
                            <Input
                                type="text"
                                value={input.fullname}
                                name="fullname"
                                onChange={changeEventHandler}
                                placeholder="John Doe"
                                className="input-3d"
                            />
                        </div>
                        <div className='input-group'>
                            <Label className="label-style">Email</Label>
                            <Input
                                type="email"
                                value={input.email}
                                name="email"
                                onChange={changeEventHandler}
                                placeholder="john@example.com"
                                className="input-3d"
                            />
                        </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
                        <div className='input-group'>
                            <Label className="label-style">Phone Number</Label>
                            <Input
                                type="text"
                                value={input.phoneNumber}
                                name="phoneNumber"
                                onChange={changeEventHandler}
                                placeholder="91XXXXXXXX"
                                className="input-3d"
                            />
                        </div>
                        <div className='input-group'>
                            <Label className="label-style">Password</Label>
                            <Input
                                type="password"
                                value={input.password}
                                name="password"
                                onChange={changeEventHandler}
                                placeholder="••••••••"
                                className="input-3d"
                            />
                        </div>
                    </div>

                    <div className='role-file-section mt-8 p-4 rounded-xl bg-[#FDF8FF] border border-[#EBD3F8]'>
                        <div className='flex flex-col gap-4'>
                            <Label className="label-style">Select Identity & Avatar</Label>
                            <div className='flex flex-wrap items-center justify-between gap-4'>
                                <RadioGroup className="flex items-center gap-4">
                                    <div className="radio-option">
                                        <Input
                                            type="radio"
                                            name="role"
                                            value="student"
                                            checked={input.role === 'student'}
                                            onChange={changeEventHandler}
                                            className="radio-input"
                                        />
                                        <Label className="cursor-pointer font-medium">Student</Label>
                                    </div>
                                    <div className="radio-option">
                                        <Input
                                            type="radio"
                                            name="role"
                                            value="recruiter"
                                            checked={input.role === 'recruiter'}
                                            onChange={changeEventHandler}
                                            className="radio-input"
                                        />
                                        <Label className="cursor-pointer font-medium">Recruiter</Label>
                                    </div>
                                </RadioGroup>
                                <div className='file-upload-wrapper'>
                                    <Input
                                        accept="image/*"
                                        type="file"
                                        onChange={changeFileHandler}
                                        className="file-input-field"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {
                        loading ? (
                            <Button className="signup-btn-3d w-full mt-8" disabled>
                                <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Creating Profile...
                            </Button>
                        ) : (
                            <Button type="submit" className="signup-btn-3d w-full mt-8">Register Now</Button>
                        )
                    }

                    <div className='text-center mt-6'>
                        <span className='text-sm text-gray-600'>
                            Already have an account? <Link to="/login" className='login-link'>Login here</Link>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup