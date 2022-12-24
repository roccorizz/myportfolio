import React from 'react';
import { Document } from 'react-pdf'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className="navbar bg-slate-800  text-neutral-content">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact header-menu dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/services'>Services</Link></li>
                        <li><Link to='/resume' >
                            Resume
                        </Link></li>
                        <li><Link to='/projects'>My Projects</Link></li>
                        <li><Link to='/about'>About Me</Link></li>

                        <li><Link to='/contact'>Contact Me</Link></li>
                    </ul>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal header-menu px-1">
                    <li ><Link to='/' className="m-2 p-2 text-white rounded-xl transition-all duration-300 bg-gradient-to-br to-blue-400 via-black from-slate-500 bg-size-200 hover:bg-right-bottom">Home</Link></li>
                    <li><Link to='/services' className="m-2 p-2 text-white rounded-xl transition-all duration-300 bg-gradient-to-br to-blue-400 via-black from-slate-500 bg-size-200 hover:bg-right-bottom">Services</Link></li>
                    <li><Link to='/resume' className="m-2 p-2 text-white rounded-xl transition-all duration-300 bg-gradient-to-br to-blue-400 via-black from-slate-500 bg-size-200 hover:bg-right-bottom">Resume</Link></li>
                    <li><Link to='/projects' className="m-2 p-2 text-white rounded-xl transition-all duration-300 bg-gradient-to-br to-blue-400 via-black from-slate-500 bg-size-200 hover:bg-right-bottom">My Projects</Link></li>
                    <li><Link to='/about' className="m-2 p-2 text-white rounded-xl transition-all duration-300 bg-gradient-to-br to-blue-400 via-black from-slate-500 bg-size-200 hover:bg-right-bottom">About Me</Link></li>
                    <li><Link to='/contact' className="m-2 p-2 text-white rounded-xl transition-all duration-300 bg-gradient-to-br to-blue-400 via-black from-slate-500 bg-size-200 hover:bg-right-bottom">Contact Me</Link></li>
                </ul>
            </div>
            <div className="navbar-end">

            </div>
        </div>
    );
};

export default Header;