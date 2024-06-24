import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { baseUrl } from '../../../baseUrl/baseUrl';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';

export default function UserStats() {
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    const fetchTotalUsers = async () => {
      try {
        const res = await axios.get(`${baseUrl}/api/admin/total-users`, { withCredentials: true });
        setTotalUsers(res.data.totalUsers);
      } catch (error) {
        console.log('Error fetching total users:', error.message);
      }
    };

    fetchTotalUsers();
  }, []);

  return (
    <div className="stats bg-base-200  text-center shadow-lg animate-slide-in-top">
      <div className="stat">
        <div className="stat-title text-neutral-content">TOTAL USERS</div>
        <div className="stat-value">
          <CountUp end={totalUsers} duration={1} />
        </div>
        <div className="stat-actions">
          <Link to='/users' className="btn  btn-sm btn-info text-primary-content">View</Link>
        </div>
      </div>
    </div>
  );
}
