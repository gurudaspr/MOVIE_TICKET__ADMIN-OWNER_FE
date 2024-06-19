import React from 'react'
import UserStats from './dashboard/UserStats';
import BookingStats from './dashboard/BookingStats';
import NewUsersChart from './dashboard/NewUsersChart';
import NewRegistrationsChart from './dashboard/NewUsersChart';


export default function AdminDashboard() {
  return (
    <div className='min-h-screen h-full  '>
      <div className="grid lg:grid-cols-3 md:grid-cols-3  sm:grid-cols-3 mt-4 grid-cols-1 gap-6 ">
        <UserStats />
        <UserStats />
        <BookingStats  />
       </div>
         <div className="grid lg:grid-cols-2  md:grid-cols-2 sm:grid-cols-2 mt-8 grid-cols-1 gap-6">
       <NewRegistrationsChart />
       <div className="grid lg:grid-cols-2  md:grid-cols-2 sm:grid-cols-2  grid-cols-1 gap-6">
       <UserStats />
        <UserStats />
        <UserStats />
        <UserStats />
       </div>
       
       </div>
    </div>
  )
}
