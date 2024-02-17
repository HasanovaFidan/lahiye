import React from 'react';
import { Outlet, useLocation } from 'react-router';
import FooterAd from '../../layout/admin/FooterAd';
import HeaderAd from '../../layout/admin/HeaderAd';

const AdminRoot = () => {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith('/dashboard');

  if (isAdminPage) {
    return (
      <div>
      
        <Outlet />
      </div>
    );
  }

  return (
    <div>
      <HeaderAd />
      <Outlet />
      <FooterAd />
    </div>
  );
};

export default AdminRoot;
