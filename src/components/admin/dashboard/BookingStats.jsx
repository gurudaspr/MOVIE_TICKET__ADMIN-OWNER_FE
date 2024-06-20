import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { baseUrl } from '../../../baseUrl/baseUrl';
import CountUp from 'react-countup';
import { set } from 'date-fns';


export default function BookingStats() {
  const [totalBookings, setTotalBookings] = useState(0);
  const [loading , setLoading] = useState(true);
  useEffect(() => { 
    const fetchTotalBookings = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${baseUrl}/api/admin/total-bookings`,{withCredentials:true});
        setTotalBookings(res.data.totalBookings);
        setLoading(false);
      } catch (error) {
        console.log('Error fetching total Bookings:', error.message);
        setLoading(false);
      }
    };

    fetchTotalBookings();
  }, []);

  return (
   
    <div className="stats bg-base-300 text-center shadow ">
    <div className="stat">
      <div className="stat-title text-2xl  text-neutral-content">TOTAL BOOKINGS</div>
      <div className="stat-value">
      {loading ? ( <CountUp end={100} duration={5} />) : (<CountUp end={totalBookings} duration={1} /> )} </div>
      <div className="stat-actions"></div>
    </div>
  </div>


  )
}


