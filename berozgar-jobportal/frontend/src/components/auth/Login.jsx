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
import { Loader2, LockKeyhole, ShieldCheck } from 'lucide-react'
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
                headers: { "Content-Type": "application/json" },
                withCredentials: true,
            });
            if (res.data.success) {
                dispatch(setUser(res.data.user));
                navigate("/");
                toast.success(res.data.message);
            }
        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            dispatch(setLoading(false));
        }
    }

    useEffect(() => {
        if (user) { navigate("/"); }
    }, [])

    return (
        <div className="login-root-obsidian">
            <Navbar />
            <div className='flex items-center justify-center min-h-[80vh] max-w-7xl mx-auto px-4'>
                <form onSubmit={submitHandler} className='login-card-royal w-full max-w-md p-10 my-16'>
                    <div className="form-header-royal text-center mb-10">
                        <div className="icon-vault mx-auto mb-4">
                            <LockKeyhole size={32} className="text-[#f59e0b]" />
                        </div>
                        <h1 className='font-black text-4xl text-white tracking-tighter'>Access Vault</h1>
                        <p className='text-slate-400 text-sm mt-2 font-medium'>Authenticate to enter the command center</p>
                    </div>

                    <div className='input-group-royal my-5'>
                        <Label className="label-royal">Identity (Email)</Label>
                        <Input
                            type="email"
                            value={input.email}
                            name="email"
                            onChange={changeEventHandler}
                            placeholder="agent@berozgaars.com"
                            className="input-royal"
                        />
                    </div>

                    <div className='input-group-royal my-5'>
                        <Label className="label-royal">Security Key</Label>
                        <Input
                            type="password"
                            value={input.password}
                            name="password"
                            onChange={changeEventHandler}
                            placeholder="••••••••"
                            className="input-royal"
                        />
                    </div>

                    <div className='role-selection-royal my-8'>
                        <Label className="label-royal mb-4 block text-center">Select Clearance Level</Label>
                        <RadioGroup className="flex items-center justify-center gap-4">
                            <div className={`role-pill ${input.role === 'student' ? 'active' : ''}`}>
                                <Input
                                    type="radio"
                                    name="role"
                                    value="student"
                                    id="r1"
                                    checked={input.role === 'student'}
                                    onChange={changeEventHandler}
                                    className="hidden-radio"
                                />
                                <Label htmlFor="r1" className="cursor-pointer font-bold px-4 py-2">Student</Label>
                            </div>
                            <div className={`role-pill ${input.role === 'recruiter' ? 'active' : ''}`}>
                                <Input
                                    type="radio"
                                    name="role"
                                    value="recruiter"
                                    id="r2"
                                    checked={input.role === 'recruiter'}
                                    onChange={changeEventHandler}
                                    className="hidden-radio"
                                />
                                <Label htmlFor="r2" className="cursor-pointer font-bold px-4 py-2">Recruiter</Label>
                            </div>
                        </RadioGroup>
                    </div>

                    {loading ? (
                        <Button className="login-btn-royal loading-state w-full" disabled>
                            <Loader2 className='mr-2 h-5 w-5 animate-spin' /> Decrypting...
                        </Button>
                    ) : (
                        <Button type="submit" className="login-btn-royal w-full">Initialize Session</Button>
                    )}

                    <div className='text-center mt-8'>
                        <span className='text-xs font-bold uppercase tracking-widest text-slate-500'>
                            New Operative? <Link to="/signup" className='signup-link-royal'>Register Here</Link>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;