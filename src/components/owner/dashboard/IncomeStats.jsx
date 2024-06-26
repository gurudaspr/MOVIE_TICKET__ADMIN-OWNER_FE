import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { baseUrl } from '../../../baseUrl/baseUrl';
import CountUp from 'react-countup';

export default function IncomeStats() {
    const [totalIncome, setTotalIncome,] = useState(0);

    useEffect(() => {
      const fetchIncome = async () => {
        try {
          const res = await axios.get(`${baseUrl}/api/owner/total-income`, { withCredentials: true });
          setTotalIncome(res.data.totalIncome);
        } catch (error) {
          console.log('Error fetching total shows:', error.message);
        }
      };
  
      fetchIncome();
    }, []);
  return (
    <div className="stats bg-base-200  text-center shadow-lg  flex flex-col md:flex-row animate-slide-in-right">
         <div className="stat ">
      <div className="stat-title    text-neutral-content">TOTAL REVENUE</div>
      <div className="stat-value text-success">
      ₹ <CountUp end={totalIncome} duration={1} /> </div>
      <div className="stat-actions">
      </div>
    </div>
     </div>   
  )
}

