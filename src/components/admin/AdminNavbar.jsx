import React from 'react';
import { Link } from 'react-router-dom';
import ToggleTheme from '../../ui/ToggleTheme';

function AdminNavbar() {
    const openDrawer = () => {
        document.getElementById('left-sidebar-drawer').click();
    };

    return (
        <div className="navbar sticky top-0 bg-base-200 z-10">
            <button className="btn btn-ghost btn-circle lg:hidden" onClick={openDrawer}>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            <div className="flex-1">
                <h1 className="text-2xl font-semibold ml-2">Page Title</h1>
            </div>
            

            <div className="navbar-end gap-3">
                <ToggleTheme />
                <Link to="/signup" className="btn bg-primary text-primary-content border-none hover:bg-primary-hover">SIGNUP</Link>
                
            </div>
        </div>
    );
}

export default AdminNavbar;
