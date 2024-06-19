import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { baseUrl } from '../../../baseUrl/baseUrl';
import { Link } from 'react-router-dom';

export default function UserStats() {
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => { 
    const fetchTotalUsers = async () => {
      try {
        const res = await axios.get(`${baseUrl}/api/admin/total-users`);
        setTotalUsers(res.data.totalUsers);
      } catch (error) {
        console.log('Error fetching total users:', error.message);
      }
    };

    fetchTotalUsers();
  }, []);

  return (
    <div className="stats bg-base-300 text-center  shadow ">
    <div className="stat ">
        <div className="stat-title text-2xl  text-neutral-content">TOTAL USERS</div>
        <div className="stat-value">{totalUsers}</div>
        <div className="stat-actions">
            <Link to='/users' className="btn btn-xs btn-info text-primary-content">View Users</Link> 
        </div>
    </div>
   
    
</div>
  )
}
