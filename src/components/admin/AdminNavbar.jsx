import React from 'react';
import { Link } from 'react-router-dom';
import ToggleTheme from '../../ui/ToggleTheme';

function AdminNavbar() {
    const openDrawer = () => {
        document.getElementById('left-sidebar-drawer').click();
    };

    return (
        <div className="navbar sticky top-0 bg-base-200 z-10">
            <div className="navbar-start">
            <button className="btn btn-ghost btn-circle lg:hidden" onClick={openDrawer}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
                </button>
            <div className="flex-1">
                <h1 className="text-2xl font-semibold ml-2 hidden lg:block">Page Title</h1>
            </div>
            </div>
            <div className="navbar-end gap-3">
                <ToggleTheme />
                <Link to="/signup" className="btn bg-primary text-primary-content border-none hover:bg-primary-hover">LOGOUT</Link>
                
            </div>
        </div>
    );
}

export default AdminNavbar;
