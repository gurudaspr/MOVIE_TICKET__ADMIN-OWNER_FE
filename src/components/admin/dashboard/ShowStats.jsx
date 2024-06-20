import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { baseUrl } from '../../../baseUrl/baseUrl';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';

export default function ShowStats() {
    const [totalShows, setTotalShows] = useState(0);
    const [totalUpComingShows, setTotalUpComingShows] = useState(0);

    useEffect(() => {
      const fetchShows = async () => {
        try {
          const res = await axios.get(`${baseUrl}/api/admin/total-shows`, { withCredentials: true });
          setTotalShows(res.data.totalShows);
          setTotalUpComingShows(res.data.upComingShows);
        } catch (error) {
          console.log('Error fetching total shows:', error.message);
        }
      };
  
      fetchShows();
    }, []);
  return (
    <div class="stats bg-base-300 text-center shadow  flex flex-col md:flex-row animate-slide-in-right">
         <div className="stat ">
      <div className="stat-title text-2xl  text-neutral-content">TOTAL SHOWS</div>
      <div className="stat-value text-success">
        <CountUp end={totalShows} duration={1} /> </div>
      <div className="stat-actions">
      </div>
    </div>
    <div className="stat ">
      <div className="stat-title text-2xl  text-neutral-content">UPCOMING SHOWS</div>
      <div className="stat-value text-warning ">
        <CountUp end={totalUpComingShows} duration={1} /> </div>
      <div className="stat-actions">
      </div>
    </div>

     </div>   
  )
}
