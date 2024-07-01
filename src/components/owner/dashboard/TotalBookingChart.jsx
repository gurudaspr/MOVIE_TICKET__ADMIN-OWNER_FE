import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import { baseUrl } from '../../../baseUrl/baseUrl';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function TotalBookngChart() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/owner/total-bookings`,{withCredentials:true});
      const data = response.data;
      formatChartData(data);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const formatChartData = (apiData) => {
 
    const counts = Array.from({ length: 12 }, () => 0);

    apiData.forEach(item => {
      const monthIndex = item._id.month - 1;
      counts[monthIndex] = item.count;
    });
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth(); 

    const labels = counts.slice(0, currentMonth + 1).map((_, index) => {
      const date = new Date(currentDate.getFullYear(), index, 1);
      return date.toLocaleString('default', { month: 'short' });
    });
//     const currentDate = new Date();
// const labels = counts.map((_, index) => {
// const date = new Date(currentDate.getFullYear(), index, 1);
// return date.toLocaleString('default', { month: 'short' });
// });
    const formattedData = {
      labels: labels,
      datasets: [
        {
          label: `Total Booking`,
          data: counts,
          backgroundColor: '#f30468',
          borderColor: '#f30468',
          borderWidth: 1,
        },
      ],
    };

    setChartData(formattedData);
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  return (
    
    <div className="rounded-lg shadow-lg  bg-base-200   h-auto text-neutral-content p-4 animate-slide-in-left">
      <div className="card-title flex items-center justify-center">
          <h2 className="stat-title   text-neutral-content ">Total Booking {year}</h2>
          </div>
      {chartData ? <Bar options={options} data={chartData} /> : <p>Loading chart...</p>}
    </div>
  );
}

export default TotalBookngChart;
