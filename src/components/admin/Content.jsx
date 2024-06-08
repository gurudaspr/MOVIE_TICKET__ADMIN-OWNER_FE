import React from 'react'
import AdminNavbar from './AdminNavbar'
import { Outlet } from 'react-router-dom'

export default function Content() {
  return (
    <div className='w-full'>

        <Outlet />

    </div>

  )
}
