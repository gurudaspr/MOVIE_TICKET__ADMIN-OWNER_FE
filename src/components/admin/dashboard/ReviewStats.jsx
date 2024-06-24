import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup';
import { baseUrl } from '../../../baseUrl/baseUrl';

export default function ReviewStats() {
    const [totalReviews, setTotalReviews] = useState(0);

  useEffect(() => {
    const fetchTotalReviews = async () => {
      try {
        const res = await axios.get(`${baseUrl}/api/admin/total-reviews`, { withCredentials: true });
        setTotalReviews(res.data.totalReviews);
      } catch (error) {
        console.log('Error fetching total reviews:', error.message);
      }
    };

    fetchTotalReviews();
  }, []);

  return (
    <div className="stats bg-base-200  text-center shadow-lg animate-slide-in-bottom">
      <div className="stat">
        <div className="stat-title   text-neutral-content">TOTAL REVIEWS</div>
        <div className="stat-value">
          <CountUp end={totalReviews} duration={1} />
        </div>
        <div className="stat-actions">
        </div>
      </div>
    </div>
  )
}
