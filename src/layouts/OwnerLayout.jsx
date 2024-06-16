import React from 'react';
import Footer from '../components/footer/Footer';
import OwnerSidebar from '../components/owner/OwnerSidebar';
import OwnerContent from '../pages/owner/OwnerContent';
import OwnerNavbar from '../components/owner/OwnerNavbar';

const AdminLayout = () => {
  return (
    <>

      <div className="drawer flex lg:drawer-open">
        <input id="left-sidebar-drawer" type="checkbox" className="drawer-toggle" />
        <OwnerSidebar />
        <div className="flex flex-col flex-1 w-3/4">
          <OwnerNavbar />
          <OwnerContent />
          <Footer />
        </div>
       
      </div>
      
    </>
  );
};

export default AdminLayout;
