import React from 'react'
import { Outlet } from 'react-router-dom'

export default function OwnerContent() {
  return (
    <div className='w-full p-5  bg-base-100'>

        <Outlet />

    </div>

  )
}
