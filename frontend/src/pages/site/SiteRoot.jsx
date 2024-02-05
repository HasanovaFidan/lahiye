
import React from 'react';
import { Outlet, useLocation } from 'react-router';
import Header from '../../layout/site/Header';
import Footer from '../../layout/site/Footer';
import Cads from '../../components/site/Cards/Cads';

const SiteRoot = () => {
  const location = useLocation();
  const isNvdiaPage = location.pathname.includes('nvdia'); 

  return (
    <div className='full'>
      {!isNvdiaPage && <Header />} 
      <Outlet />

      {!isNvdiaPage && <Footer />} 

    </div>
  );
};

export default SiteRoot;
