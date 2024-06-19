import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { baseUrl } from '../../../baseUrl/baseUrl';


export default function BookingStats() {
  const [totalBookings, setTotalBookings] = useState(0);

  useEffect(() => { 
    const fetchTotalBookings = async () => {
      try {
        const res = await axios.get(`${baseUrl}/api/admin/total-bookings`);
        setTotalBookings(res.data.totalBookings);
      } catch (error) {
        console.log('Error fetching total users:', error.message);
      }
    };

    fetchTotalBookings();
  }, []);

  return (
   
    <div className="stats bg-base-300 text-center shadow ">
    <div className="stat">
      <div className="stat-title text-2xl  text-neutral-content">TOTAL BOOKINGS</div>
      <div className="stat-value">{totalBookings}</div>
      <div className="stat-actions"></div>
    </div>
  </div>


  )
}


