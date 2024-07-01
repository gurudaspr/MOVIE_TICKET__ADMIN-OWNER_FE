import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement, LineController } from 'chart.js';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import { baseUrl } from '../../../baseUrl/baseUrl';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, LineController, Title, Tooltip, Legend);

function TotalSeatSoldChart() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/owner/total-tickets-sold`, { withCredentials: true });
      const data = response.data;
      formatChartData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const formatChartData = (apiData) => {
    const theaterData = {};

    apiData.forEach(item => {
      const theaterId = item._id.theater;
      const theaterName = item._id.theaterName.charAt(0).toUpperCase() + item._id.theaterName.slice(1).toLowerCase();
      const date = new Date(item._id.year, item._id.month - 1, item._id.day);
      const dateString = date.toLocaleDateString('default', { month: 'short', day: 'numeric' });

      if (!theaterData[theaterId]) {
        theaterData[theaterId] = { name: theaterName, labels: [], data: [] };
      }

      if (!theaterData[theaterId].labels.includes(dateString)) {
        theaterData[theaterId].labels.push(dateString);
      }

      const dateIndex = theaterData[theaterId].labels.indexOf(dateString);
      theaterData[theaterId].data[dateIndex] = (theaterData[theaterId].data[dateIndex] || 0) + item.count;
    });

    // Ensure labels include the last 7 days
    const labels = generateDateLabels(7);

    const colorPalette = [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)'
    ];

    const borderColorPalette = [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ];

    const datasets = Object.entries(theaterData).map(([theaterId, { name, labels: theaterLabels, data }], index) => ({
      label: name,
      data: labels.map(label => {
        const idx = theaterLabels.indexOf(label);
        return idx !== -1 ? data[idx] : 0;
      }),
      backgroundColor: colorPalette[index % colorPalette.length],
      borderColor: borderColorPalette[index % borderColorPalette.length],
      pointBackgroundColor: borderColorPalette[index % borderColorPalette.length],
      borderWidth: 1,
      fill: true,
    }));

    setChartData({ labels, datasets });
  };

  const generateDateLabels = (days) => {
    const labels = [];
    const today = new Date();
    for (let i = days - 1; i >= 0; i--) {
      const date = new Date();
      date.setDate(today.getDate() - i);
      labels.push(date.toLocaleDateString('default', { month: 'short', day: 'numeric' }));
    }
    return labels;
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <div className="rounded-lg shadow-lg bg-base-200 h-auto text-neutral-content p-4 animate-slide-in-left">
      <div className="card-title flex items-center justify-center">
        <h2 className="stat-title text-neutral-content">Total Seats Booked</h2>
      </div>
      {chartData ? <Line options={options} data={chartData} /> : <p>Loading chart...</p>}
    </div>
  );
}

export default TotalSeatSoldChart;
