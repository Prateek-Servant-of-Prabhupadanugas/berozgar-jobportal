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
            toast.error(error.response?.data?.message || "Logout failed");
        }
    }

    const NavLinks = () => (
        <>
            {user && user.role === 'recruiter' ? (
                <>
                    <li className="nav-item-royal"><Link to="/admin/companies">Companies</Link></li>
                    <li className="nav-item-royal"><Link to="/admin/jobs">Jobs</Link></li>
                </>
            ) : (
                <>
                    <li className="nav-item-royal"><Link to="/">Home</Link></li>
                    <li className="nav-item-royal"><Link to="/jobs">Jobs</Link></li>
                    <li className="nav-item-royal"><Link to="/browse">Browse</Link></li>
                </>
            )}
        </>
    );

    return (
        <>
            {/* Dark overlay for mobile drawer */}
            <div className={`menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)} />

            <nav className="navbar-container px-4">
                <div className="navbar-glass-wrapper mx-auto max-w-7xl h-20 flex items-center justify-between px-8 mt-4">
                    
                    {/* Brand Logo */}
                    <div className="logo-3d">
                        <Link to="/">
                            <h1 className='text-2xl font-black tracking-tighter text-white'>
                                Be<span className='text-amber-500 italic'>Rozgaars</span>
                            </h1>
                        </Link>
                    </div>

                    {/* Navigation Actions */}
                    <div className='flex items-center gap-10'>
                        <ul className='hidden md:flex font-semibold items-center gap-10 nav-links-royal'>
                            <NavLinks />
                        </ul>

                        <div className="flex items-center gap-4">
                            {!user ? (
                                <div className='hidden md:flex items-center gap-4'>
                                    <Link to="/login">
                                        <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/5 transition-all">Login</Button>
                                    </Link>
                                    <Link to="/signup">
                                        <Button className="btn-royal-amber px-6">Join Now</Button>
                                    </Link>
                                </div>
                            ) : (
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <div className="avatar-royal-wrapper cursor-pointer">
                                            <Avatar className="border-2 border-amber-500/30 hover:border-amber-500 transition-all shadow-lg">
                                                <AvatarImage src={user?.profile?.profilePhoto} alt="profile" />
                                            </Avatar>
                                        </div>
                                    </PopoverTrigger>
                                    <PopoverContent className="popover-royal-glass w-80 mt-2">
                                        <div className='flex gap-4 p-2 items-center border-b border-white/10 pb-4'>
                                            <Avatar className="border-2 border-amber-500/20">
                                                <AvatarImage src={user?.profile?.profilePhoto} />
                                            </Avatar>
                                            <div className='overflow-hidden'>
                                                <h4 className='font-bold text-white truncate'>{user?.fullname}</h4>
                                                <p className='text-[10px] text-amber-400 font-bold uppercase tracking-widest'>{user?.role}</p>
                                            </div>
                                        </div>
                                        <div className='flex flex-col gap-1 mt-4'>
                                            {user.role === 'student' && (
                                                <Button variant='ghost' className="justify-start gap-3 text-white/70 hover:text-white hover:bg-white/5 group" asChild>
                                                    <Link to="/profile"><User2 size={18} className="group-hover:text-amber-500" /> My Profile</Link>
                                                </Button>
                                            )}
                                            <Button onClick={logoutHandler} variant='ghost' className="justify-start gap-3 text-red-400 hover:bg-red-500/10 hover:text-red-300">
                                                <LogOut size={18} /> Logout
                                            </Button>
                                        </div>
                                    </PopoverContent>
                                </Popover>
                            )}

                            {/* Mobile Menu Icon */}
                            <button 
                                className="md:hidden p-2 text-white bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Sidebar */}
                <div className={`mobile-sidebar-royal ${isMenuOpen ? 'open' : ''}`}>
                    <ul className="flex flex-col gap-6 p-10">
                        <NavLinks />
                        <div className="h-[1px] bg-white/10 w-full my-2" />
                        {!user ? (
                            <div className="flex flex-col gap-4">
                                <Link to="/login" onClick={() => setIsMenuOpen(false)}><Button className="w-full bg-white/5 border border-white/10 text-white">Login</Button></Link>
                                <Link to="/signup" onClick={() => setIsMenuOpen(false)}><Button className="btn-royal-amber w-full">Signup</Button></Link>
                            </div>
                        ) : (
                            <Button onClick={logoutHandler} variant="ghost" className="justify-start gap-3 text-red-400 bg-red-500/5"><LogOut size={18}/> Logout</Button>
                        )}
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;