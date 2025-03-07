// import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import { MdLightMode } from "react-icons/md";
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/Contexts';

const Header = () => {

    const [theme, setTheme] = useState('light')
    const { user, logout } = useContext(AuthContext)
    const handleLight = () => {
        setTheme('light')
        localStorage.setItem('theme', 'light')
    }
    const handleDark = () => {
        setTheme('dark')
        localStorage.setItem('theme', 'dark')
    }
    useEffect(() => {
        setTheme(localStorage.getItem('theme'))
        if (localStorage.getItem('theme')) {
            document.querySelector('html').setAttribute('data-theme', localStorage.theme)
        }
    }, [theme])
    const handleLogout = () => {
        logout()
            .then(() => {
                console.log('logged out')
            }).catch((error) => {
                console.log(error)
            });
    }

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/all-spots'>All Spots</NavLink></li>
        <li><NavLink to='/add-spots'>Add Spots</NavLink></li>
        <li><NavLink to='/my-list'>My List</NavLink></li>
    </>

    return (
        <div>
            <div className="navbar shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">TravelNest<img className='hidden md:flex' src="https://img.icons8.com/?size=30&id=q9YwybnZ1h5A&format=png" /></a>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end space-x-4">
                    <>
                        {
                            theme === 'dark' ?
                                <button onClick={handleLight}><MdLightMode className='text-3xl' /></button>
                                :
                                <button onClick={handleDark}><MdLightMode className='text-3xl' /></button>
                        }
                    </>
                    {
                        user ?
                            <>
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                        </div>
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                        <li><a>.... {console.log(user)}</a></li>
                                        <li><a>Settings</a></li>
                                        <li onClick={handleLogout}><a>Logout</a></li>
                                    </ul>
                                </div>
                            </>
                            :
                            <>
                                <Link className='btn bg-blue-400' to="/login">Login</Link>
                                <Link className='btn bg-blue-400' to='/register'>Register</Link>
                            </>
                    }
                </div>
            </div >
        </div >
    );
};
export default Header;