import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import { MdLightMode } from "react-icons/md";

const Header = ({ theme, setTheme }) => {
    const localTheme = localStorage.theme
    console.log(localTheme);
    setTheme(localTheme)
    const handleTheme = (theme) => {
        setTheme(theme)
        localStorage.setItem('theme', theme)
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
                    <button>
                        {
                            theme === 'dark' ?
                                <button onClick={() => handleTheme('light')}><MdLightMode className='text-3xl' /></button>
                                :
                                <button onClick={() => handleTheme('dark')}><MdLightMode className='text-3xl' /></button>
                        }
                    </button>
                    <Link className='btn bg-blue-200' to="/login">Login</Link>
                    <Link className='btn bg-blue-200' to='/register'>Register</Link>
                </div>
            </div>
        </div>
    );
};

Header.propTypes = {
    theme: PropTypes.string,
    setTheme: PropTypes.func,
};

export default Header;