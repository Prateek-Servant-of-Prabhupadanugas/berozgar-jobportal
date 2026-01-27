import React, { useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { Avatar, AvatarImage } from '../ui/avatar'
import { LogOut, User2, Menu, X } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { setUser } from '@/redux/authSlice'
import { toast } from 'sonner'
import './Navbar.css'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user } = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
            if (res.data.success) {
                dispatch(setUser(null));
                navigate("/");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || "Logout failed");
        }
    }

    const NavLinks = () => (
        <>
            {user && user.role === 'recruiter' ? (
                <>
                    <li className="nav-item"><Link to="/admin/companies">Companies</Link></li>
                    <li className="nav-item"><Link to="/admin/jobs">Jobs</Link></li>
                </>
            ) : (
                <>
                    <li className="nav-item"><Link to="/">Home</Link></li>
                    <li className="nav-item"><Link to="/jobs">Jobs</Link></li>
                    <li className="nav-item"><Link to="/browse">Browse</Link></li>
                </>
            )}
        </>
    );

    return (
        <>
            {/* 3D Depth Overlay */}
            <div className={`menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)} />

            <nav className="navbar-container">
                <div className="navbar-glass-wrapper mx-auto max-w-7xl h-16 flex items-center justify-between px-6">
                    
                    {/* Logo Area */}
                    <div className="logo-3d z-50">
                        <Link to="/">
                            <h1 className='text-2xl font-bold tracking-tighter'>
                                Be<span className='text-[#860af3]'>Rozgaars</span>
                            </h1>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className='flex items-center gap-12'>
                        <ul className='hidden md:flex font-medium items-center gap-6 nav-links'>
                            <NavLinks />
                        </ul>

                        <div className="flex items-center gap-4">
                            {/* Desktop Auth Section */}
                            <div className='hidden md:block'>
                                {!user ? (
                                    <div className='flex items-center gap-3'>
                                        <Link to="/login"><Button variant="ghost" className="hover-3d-light">Login</Button></Link>
                                        <Link to="/signup"><Button className="btn-3d-purple">Signup</Button></Link>
                                    </div>
                                ) : (
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <div className="avatar-3d-ring">
                                                <Avatar className="cursor-pointer border-2 border-white">
                                                    <AvatarImage src={user?.profile?.profilePhoto} alt="profile" />
                                                </Avatar>
                                            </div>
                                        </PopoverTrigger>
                                        <PopoverContent className="popover-3d-glass w-80">
                                            <div className='flex gap-4 p-2'>
                                                <Avatar className="shadow-md">
                                                    <AvatarImage src={user?.profile?.profilePhoto} />
                                                </Avatar>
                                                <div>
                                                    <h4 className='font-bold text-gray-800'>{user?.fullname}</h4>
                                                    <p className='text-xs text-gray-500 line-clamp-1'>{user?.profile?.bio}</p>
                                                </div>
                                            </div>
                                            <hr className="my-3 border-gray-100" />
                                            <div className='flex flex-col gap-1'>
                                                {user.role === 'student' && (
                                                    <Button variant='ghost' className="justify-start gap-3 hover:bg-blue-50" asChild>
                                                        <Link to="/profile"><User2 size={18} /> View Profile</Link>
                                                    </Button>
                                                )}
                                                <Button onClick={logoutHandler} variant='ghost' className="justify-start gap-3 text-red-500 hover:bg-red-50">
                                                    <LogOut size={18} /> Logout
                                                </Button>
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                )}
                            </div>

                            {/* Mobile Hamburger Toggle */}
                            <button 
                                className="md:hidden z-50 p-2 text-gray-700 bg-white/50 rounded-xl shadow-inner active:scale-90 transition-all"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* 3D Mobile Sidebar (Sliding Tray) */}
                <div className={`mobile-sidebar-3d ${isMenuOpen ? 'open' : ''}`}>
                    <ul className="flex flex-col gap-3 p-6 pt-12">
                        <NavLinks />
                        <hr className="border-gray-200/50 my-2" />
                        {!user ? (
                            <div className="flex flex-col gap-4">
                                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                                    <Button variant="outline" className="w-full h-12 rounded-xl">Login</Button>
                                </Link>
                                <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                                    <Button className="btn-3d-purple w-full h-12 rounded-xl">Signup</Button>
                                </Link>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-2">
                                <p className="px-4 text-xs font-bold text-gray-400 uppercase tracking-widest">User Menu</p>
                                {user.role === 'student' && (
                                    <Link to="/profile" onClick={() => setIsMenuOpen(false)}>
                                        <Button variant="ghost" className="w-full justify-start gap-3 h-12"><User2 size={18}/> Profile</Button>
                                    </Link>
                                )}
                                <Button onClick={logoutHandler} variant="ghost" className="w-full justify-start gap-3 h-12 text-red-500">
                                    <LogOut size={18}/> Logout
                                </Button>
                            </div>
                        )}
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar