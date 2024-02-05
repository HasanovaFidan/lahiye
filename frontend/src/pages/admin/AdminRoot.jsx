import React from 'react'
import { Outlet } from 'react-router'
import FooterAd from '../../layout/admin/FooterAd'
import HeaderAd from '../../layout/admin/HeaderAd'

const AdminRoot = () => {
  return (
    <div>
      <HeaderAd/>
      <Outlet/>
      <FooterAd/>
    </div>
  )
}

export default AdminRoot
