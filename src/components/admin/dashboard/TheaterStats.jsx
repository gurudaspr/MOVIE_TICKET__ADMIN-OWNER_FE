import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { baseUrl } from '../../../baseUrl/baseUrl';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';

export default function TheaterStats() {
    const [totalApprovedTheaters, setTotalApprovedTheaters] = useState(0);
    const [totalPendingTheaters, setTotalPendingTheaters] = useState(0);

    useEffect(() => {
      const fetchTotalTheaters = async () => {
        try {
          const res = await axios.get(`${baseUrl}/api/admin/total-theaters`, { withCredentials: true });
          setTotalApprovedTheaters(res.data.approvedTheater);
        setTotalPendingTheaters(res.data.pendingTheater);
        } catch (error) {
          console.log('Error fetching total users:', error.message);
        }
      };
  
      fetchTotalTheaters();
    }, []);
  return (
    <div class="stats bg-base-300 text-center shadow  flex flex-col md:flex-row">
         <div className="stat ">
      <div className="stat-title text-2xl  text-neutral-content">APPROVED THEATER</div>
      <div className="stat-value text-success">
        <CountUp end={totalApprovedTheaters} duration={1} /> </div>
      <div className="stat-actions">
      <Link to='/theaters/approved' className="btn  btn-sm btn-info text-primary-content">View</Link>
      </div>
    </div>
    <div className="stat ">
      <div className="stat-title text-2xl  text-neutral-content">PENDING THEATERS</div>
      <div className="stat-value text-warning ">
        <CountUp end={totalPendingTheaters} duration={1} /> </div>
      <div className="stat-actions">
      <Link to='/theater/pending-approval' className="btn  btn-sm btn-info text-primary-content">View</Link>
      </div>
    </div>

     </div>   
  )
}