import React from 'react';
import { Bar } from 'react-chartjs-2';

export default function LawyerCasesChart() {
  // Data for the bar chart (overall cases)
  const overallCasesData = {
    labels: ['Civil Cases', 'Criminal Cases', 'Family Cases'],
    datasets: [
      {
        label: 'Overall Cases',
        data: [100, 150, 75], // Example data (replace with actual data)
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  // Data for the bar chart (monthly cases by year)
  const monthlyCasesData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: '2023',
        data: [10, 20, 15, 25, 30, 20, 18, 22, 28, 35, 40, 45], // Example data (replace with actual data)
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: '2024',
        data: [12, 18, 20, 30, 28, 24, 22, 26, 32, 38, 42, 48], // Example data (replace with actual data)
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
      {
        label: '2025',
        data: [15, 25, 30, 35, 40, 32, 28, 36, 42, 50, 55, 60], // Example data (replace with actual data)
        backgroundColor: 'rgba(255, 206, 86, 0.5)',
      },
    ],
  };

  return (
    <div>
      <div>
        <h2>Overall Cases</h2>
        <Bar data={overallCasesData} />
      </div>
      <div>
        <h2>Monthly Cases by Year</h2>
        <Bar data={monthlyCasesData} />
      </div>
    </div>
  );
}
