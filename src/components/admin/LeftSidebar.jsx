import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon';

const links = [
  { name: 'Dashboard', path: '/adminDashboard' },
    { name: 'Movies', path: '/movies' }, 
    { name: 'Users', path: '/users' },
    {name : 'Theaters', path: '/theaters'},
    { name: 'Transactions', path: '/transactions' },
];

function LeftSidebar() {
    const location = useLocation();

    const close = () => {
        document.getElementById('left-sidebar-drawer').click();
    };
    return (
        <div className="drawer-side z-30">
            <label htmlFor="left-sidebar-drawer" className="drawer-overlay"></label>
            <ul className="menu pt-2 w-80 bg-base-200 min-h-full text-base-content">
                <button className="btn btn-ghost bg-base-300 btn-circle z-50 top-0 right-0 mt-4 mr-2 absolute lg:hidden" onClick={close}>
                    <XMarkIcon className="h-5 inline-block w-5" />
                </button>
                <li className="mb-2 font-semibold text-xl">
                    <Link to="/">
                        FilmGo
                    </Link>
                </li>
                <div className='divider mt-0 top-0'></div>
                
                {links.map((link, index) => (
                    <li key={index}>
                        <NavLink
                            end
                            to={link.path}
                            className={({ isActive }) => `${isActive ? 'font-semibold bg-base-200 text-lg'  : 'font-normal text-lg'}`}>
                            {link.name}
                            {location.pathname === link.path && (
                                <span className="absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md  " aria-hidden="true"></span>
                            )}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default LeftSidebar;
