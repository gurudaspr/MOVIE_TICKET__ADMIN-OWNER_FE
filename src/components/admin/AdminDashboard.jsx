import React from 'react'
import NewUsersChart from './dashboard/NewUsersChart';

import UserStats from './dashboard/UserStats'
import ReviewStats from './dashboard/ReviewStats';
import TheaterStats from './dashboard/TheaterStats';
import ShowStats from './dashboard/ShowStats';
import MovieStats from './dashboard/MovieStats';
import TransactionStats from './dashboard/TransactionStats';
import BookingStats from './dashboard/BookingStats';


export default function AdminDashboard() {
  return (
    <div className='min-h-screen   mx-5 my-8  animate-fade-in '>
      <div className="grid lg:grid-cols-3 md:grid-cols-3  sm:grid-cols-3 mt-4 grid-cols-1 gap-6 ">
        <UserStats />
        <TransactionStats />
        <BookingStats />
      </div>
      <div className="grid lg:grid-cols-2  md:grid-cols-2 sm:grid-cols-2 mt-8 grid-cols-1 gap-6">
        <NewUsersChart />
        <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1  grid-cols-1 gap-6 ">
        <ShowStats/>
          <TheaterStats/>
        </div>
        <ReviewStats/>
        <MovieStats/>

      </div>
    </div>
  )
}
