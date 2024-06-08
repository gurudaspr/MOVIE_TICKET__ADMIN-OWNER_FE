import React from 'react';
import AdminNavbar from '../components/admin/AdminNavbar';
import { Outlet } from 'react-router-dom';
import LeftSidebar from '../components/admin/LeftSidebar';
import Content from '../components/admin/Content';

const AdminLayout = () => {
  return (
    <>

      <div className="drawer flex lg:drawer-open">
        <input id="left-sidebar-drawer" type="checkbox" className="drawer-toggle" />
        <LeftSidebar />
        <div className="flex flex-col flex-1 w-full">
          <AdminNavbar />
          <Outlet />
        </div>
        
        
        
        
      </div>
    </>
  );
};

export default AdminLayout;
