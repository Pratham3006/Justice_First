import React, { useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  BarElement, // Add this line for Bar chart
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
} from 'chart.js';
import './Stats.css';

ChartJS.register(
  LineElement,
  BarElement, // Register BarElement for Bar chart
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
);

// Rest of the code remains unchanged...

export default function Stats() {
  const [error, setError] = useState("");
  const [selectedYear, setSelectedYear] = useState(2023);
  const [selectedType, setSelectedType] = useState("law");
  const [selectedGraphType, setSelectedGraphType] = useState("line");

  const generateDataset = (label, data, color) => ({
    label,
    data,
    backgroundColor: `rgba(${color}, 0.6)`,
    borderColor: `rgba(${color}, 1)`,
    pointBorderColor: `rgba(${color}, 1)`,
    fill: true,
    tension: 0.4,
    tooltip: true,
  });

  const getDataForYear = (year) => {
    const color = selectedType === 'law' ? '0, 123, 255' : selectedType === 'judge' ? '255, 0, 0' : '0, 255, 0';
    const datasetLabel = selectedType.charAt(0).toUpperCase() + selectedType.slice(1) + 's';

    switch (year) {
      case 2023:
        return {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
          datasets: [generateDataset(datasetLabel, [6, 3, 9, 5, 8, 12, 10, 7, 4, 9, 11, 13], color)],
        };
      case 2024:
        return {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
          datasets: [generateDataset(datasetLabel, [8, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], color)],
        };
      default:
        return null;
    }
  };

  const handleYearChange = (year) => {
    setSelectedYear(year);
    const dataForSelectedYear = getDataForYear(year);
    if (!dataForSelectedYear) {
      setError("Data not available for the selected year");
    } else {
      setError("");
    }
  };

  const handleTypeChange = (type) => {
    setSelectedType(type);
    const dataForSelectedType = getDataForYear(selectedYear);
    if (!dataForSelectedType) {
      setError("Data not available for the selected type");
    } else {
      setError("");
    }
  };

  const handleGraphTypeChange = (graphType) => {
    setSelectedGraphType(graphType);
  };

  const options = {
    plugins: {
      legend: true
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Months'
        }
      },
      y: {
        title: {
          display: true,
          text: 'In Thousand'
        }
      }
    }
  };

  return (
    <div className='stats-head'>
      <h1  className="stats-font"style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        Welcome to the analytics of JUSTICE-FIRST
      </h1>
      <div className='year-selector'>
        <label>Select Year: </label>
        <select value={selectedYear} onChange={(e) => handleYearChange(Number(e.target.value))}>
          <option value={2023}>2023</option>
          <option value={2024}>2024</option>
          <option value={2025}>2025</option>
        </select>
        <label>Select Data: </label>
        <select value={selectedType} onChange={(e) => handleTypeChange(e.target.value)}>
          <option value="law">Lawyer</option>
          <option value="judge">Judge</option>
          <option value="case">Case</option>
        </select>
        <label>Select Graph Type: </label>
        <select value={selectedGraphType} onChange={(e) => handleGraphTypeChange(e.target.value)}>
          <option value="line">Line</option>
          <option value="bar">Bar</option>
        </select>
      </div>
      <div className='stats-law'>
        <div className='line'>
          {error ? (
            <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>
          ) : (
            selectedGraphType === 'line' ? (
              <Line data={getDataForYear(selectedYear)} options={options}></Line>
            ) : (
              <Bar data={getDataForYear(selectedYear)} options={options}></Bar>
            )
          )}
        </div>
      </div>
    </div>
  );
}
