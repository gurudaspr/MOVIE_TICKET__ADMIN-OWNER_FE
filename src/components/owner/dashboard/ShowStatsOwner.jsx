import React, { useEffect, useState } from 'react'
import { baseUrl } from '../../../baseUrl/baseUrl';
import CountUp from 'react-countup';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ShowStatsOwner() {
    const [totalShows, setTotalShows] = useState(0);

    useEffect(() => {
      const fetchShows = async () => {
        try {
          const res = await axios.get(`${baseUrl}/api/owner/total-shows`, { withCredentials: true });
          setTotalShows(res.data.totalShows);
        } catch (error) {
          console.log('Error fetching total shows:', error.message);
        }
      };
  
      fetchShows();
    }, []);
  return (
    <div className="stats bg-base-200  text-center shadow-lg  flex flex-col md:flex-row animate-slide-in-right">
         <div className="stat ">
      <div className="stat-title    text-neutral-content">TOTAL SHOWS</div>
      <div className="stat-value ">
        <CountUp end={totalShows} duration={1} /> </div>
      <div className="stat-actions">
        <Link to='/shows' className="btn  btn-sm btn-info text-primary-content">View</Link>
      </div>
    </div>
     </div>   
  )
}
