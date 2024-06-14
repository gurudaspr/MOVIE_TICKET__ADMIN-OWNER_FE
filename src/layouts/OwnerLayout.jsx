import React from 'react'
import OwnerNavbar from '../components/owner/OwnerNavbar'
import { Outlet } from 'react-router-dom'

export default function OwnerLayout() {
  return (
    <div>

    <OwnerNavbar />
    <Outlet/>
    </div>
  )
}
