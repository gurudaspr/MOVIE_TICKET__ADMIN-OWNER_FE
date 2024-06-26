import React from 'react'
import MovieStats from './dashboard/MovieStats'
import ShowStatsOwner from './dashboard/ShowStatsOwner'
import IncomeStats from './dashboard/IncomeStats'
import TotalBookingChart from './dashboard/TotalBookingChart'
import TotalSeatSoldChart from './dashboard/TotalSeatSoldChart'

export default function OwnerDashboard() {
  return (
      <div className='min-h-screen   mx-5 my-8  animate-fade-in '>
        <div className="grid lg:grid-cols-3 md:grid-cols-3  sm:grid-cols-3 mt-4 grid-cols-1 gap-6 ">
          <MovieStats />
          <ShowStatsOwner />
          <IncomeStats />
        </div>
        <div className="grid lg:grid-cols-2  md:grid-cols-2 sm:grid-cols-2 mt-8 grid-cols-1 gap-6">
          <TotalBookingChart />
          <TotalSeatSoldChart />
          
          <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1  grid-cols-1 gap-6 ">
          
          </div>
         
  
        </div>
      </div>
  )
}
