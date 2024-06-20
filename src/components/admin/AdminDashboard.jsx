import React from 'react'
import NewUsersChart from './dashboard/NewUsersChart';
import BookingStats from './dashboard/BookingStats';
import UserStats from './dashboard/UserStats'
import ReviewStats from './dashboard/ReviewStats';
import TheaterStats from './dashboard/TheaterStats';


export default function AdminDashboard() {
  return (
    <div className='min-h-screen h-full  '>
      <div className="grid lg:grid-cols-3 md:grid-cols-3  sm:grid-cols-3 mt-4 grid-cols-1 gap-6 ">
        <UserStats />
        <UserStats />
        <BookingStats />
      </div>
      <div className="grid lg:grid-cols-2  md:grid-cols-2 sm:grid-cols-2 mt-8 grid-cols-1 gap-6">
        <NewUsersChart />
        <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1  grid-cols-1 gap-6 ">
          <ReviewStats/>
          <TheaterStats/>
        </div>
        <UserStats />

      </div>
    </div>
  )
}
