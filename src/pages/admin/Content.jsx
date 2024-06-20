import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Content() {
  return (
    <div className=' min-h-screen w-full p-5  bg-base-100'>

        <Outlet />

    </div>

  )
}
