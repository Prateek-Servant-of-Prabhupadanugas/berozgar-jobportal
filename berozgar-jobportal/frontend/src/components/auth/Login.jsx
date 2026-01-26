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
import { setLoading, setUser } from '@/redux/authSlice'
import { Loader2 } from 'lucide-react'
import './Login.css'

const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: "",
        role: "",
    });
    const { loading, user } = useSelector(store => store.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            dispatch(setLoading(true));
            const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true,
            });
            if (res.data.success) {
                dispatch(setUser(res.data.user));
                navigate("/");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
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
        <div className="login-page-bg">
            <Navbar />
            <div className='flex items-center justify-center max-w-7xl mx-auto px-4'>
                <form onSubmit={submitHandler} className='login-form-3d w-full max-w-md p-8 my-16'>
                    <div className="form-header text-center mb-8">
                        <h1 className='font-extrabold text-3xl text-[#2E073F]'>Welcome Back</h1>
                        <p className='text-gray-500 text-sm mt-2'>Login to access your personalized job portal</p>
                    </div>

                    <div className='input-container my-4'>
                        <Label className="label-style">Email Address</Label>
                        <Input
                            type="email"
                            value={input.email}
                            name="email"
                            onChange={changeEventHandler}
                            placeholder="name@company.com"
                            className="input-field-3d"
                        />
                    </div>

                    <div className='input-container my-4'>
                        <Label className="label-style">Password</Label>
                        <Input
                            type="password"
                            value={input.password}
                            name="password"
                            onChange={changeEventHandler}
                            placeholder="••••••••"
                            className="input-field-3d"
                        />
                    </div>

                    <div className='role-selection-wrapper my-6'>
                        <Label className="label-style mb-3 block">Are you a Student or Recruiter?</Label>
                        <RadioGroup className="flex items-center gap-6">
                            <div className="radio-item">
                                <Input
                                    type="radio"
                                    name="role"
                                    value="student"
                                    id="r1"
                                    checked={input.role === 'student'}
                                    onChange={changeEventHandler}
                                    className="radio-input-3d"
                                />
                                <Label htmlFor="r1" className="cursor-pointer font-semibold">Student</Label>
                            </div>
                            <div className="radio-item">
                                <Input
                                    type="radio"
                                    name="role"
                                    value="recruiter"
                                    id="r2"
                                    checked={input.role === 'recruiter'}
                                    onChange={changeEventHandler}
                                    className="radio-input-3d"
                                />
                                <Label htmlFor="r2" className="cursor-pointer font-semibold">Recruiter</Label>
                            </div>
                        </RadioGroup>
                    </div>

                    {
                        loading ? (
                            <Button className="login-btn-3d w-full" disabled>
                                <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Validating...
                            </Button>
                        ) : (
                            <Button type="submit" className="login-btn-3d w-full">Sign In</Button>
                        )
                    }

                    <div className='text-center mt-6'>
                        <span className='text-sm text-gray-600'>
                            New to the portal? <Link to="/signup" className='signup-link'>Create an account</Link>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;