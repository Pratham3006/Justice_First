import React, { useState } from "react";
import { Line, Bar } from "react-chartjs-2";

export default function CaseCharts() {
  const [year, setYear] = useState(2024);

  // Sample data for variation of cases over time
  const barChartData2024 = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [{
      label: 'Number of Cases',
      data: [60, 20, 30, 20, 10, 90, 67, 100, 30, 70, 50, 80],
      fill: true,
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }]
  };

  const barChartData2025 = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [{
      label: 'Number of Cases',
      data: [70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180],
      fill: true,
      backgroundColor: 'rgba(255, 159, 64, 0.2)',
      borderColor: 'rgba(255, 159, 64, 1)',
      borderWidth: 1
    }]
  };

  const barChartOptions = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  // Sample data for number of cases per category
  const areaChartData = {
    labels: [
      'PIL', 'Murder', 'Assault', 'Sexual offense', 'Kidnapping', 'Robbery', 'Cybercrime', 'VIOLATION OF FUNDAMENTAL RIGHTS',
      'CHALLENGES TO THE VALIDITY OF LAWS', 'PUBLIC INTEREST LITIGATION CASES', 'Habeas Corpus', 'Mandamus', 'Certiorari',
      'Land acquisition', 'Boundary disputes', 'Tenancy disputes', 'Land title disputes', 'Unfair dismissal or termination',
      'Employment contract', 'Wage and Benefits', 'Workplace Discrimination', 'Workplace Harassment', 'Income Tax disputes',
      'Goods and Services Tax', 'Customs and Excise duty', 'Trademark infringement', 'Patent infringement', 'Trade secret violation',
      'Copyright infringement', 'Copyright violations', 'Bigamy', 'Patent disputes', 'Government and public sector employee grievances',
      'Administrative decisions challenges', 'Service-related disputes', 'Environmental Pollution Cases', 'Wildlife Protection Cases',
      'Public Health-related Cases', 'Matters related to Public Infrastructure and Utilities', 'Dowry-related complaints', 'Domestic Violence',
      'Child Custody', 'Divorce', 'Alimony', 'Child Support', 'Financial Dispute', 'Emotional Abuse', 'Child Abuse', 'Religious Dispute',
      'Dowry Harassment', 'Drug offense', 'Maintenance', 'Parenting Dispute'
    ],
    datasets: [{
      label: 'Number of Cases in a case type',
      data: [
        0,  // PIL
        10, // Murder
        5,  // Assault
        8,  // Sexual offense
        12, // Kidnapping
        15, // Robbery
        20, // Cybercrime
        5,  // VIOLATION OF FUNDAMENTAL RIGHTS
        0,  // CHALLENGES TO THE VALIDITY OF LAWS
        30, // PUBLIC INTEREST LITIGATION CASES
        3,  // Habeas Corpus
        7,  // Mandamus
        0,  // Certiorari
        18, // Land acquisition
        4,  // Boundary disputes
        10, // Tenancy disputes
        8,  // Land title disputes
        0,  // Unfair dismissal or termination
        0,  // Employment contract
        0,  // Wage and Benefits
        0,  // Workplace Discrimination
        0,  // Workplace Harassment
        0,  // Income Tax disputes
        0,  // Goods and Services Tax
        0,  // Customs and Excise duty
        0,  // Trademark infringement
        0,  // Patent infringement
        0,  // Trade secret violation
        10,  // Copyright infringement
        0,  // Copyright violations
        0,  // Bigamy
        0,  // Patent disputes
        0,  // Government and public sector employee grievances
        0,  // Administrative decisions challenges
        0,  // Service-related disputes
        0,  // Environmental Pollution Cases
        0,  // Wildlife Protection Cases
        0,  // Public Health-related Cases
        0,  // Matters related to Public Infrastructure and Utilities
        0,  // Dowry-related complaints
        0,  // Domestic Violence
        0,  // Child Custody
        0,  // Divorce
        0,  // Alimony
        0,  // Child Support
        0,  // Financial Dispute
        0,  // Emotional Abuse
        0,  // Child Abuse
        0,  // Religious Dispute
         0,  // Dowry Harassment
        0,  // Drug offense
        0,  // Maintenance
        0   // Parenting Dispute
      ],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }]
  };

  const areaChartOptions = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  const handleYearChange = (event) => {
    setYear(parseInt(event.target.value));
  };

  return (
    <div>
      <div>
        <h1 style={{textAlign:"center"}}>Variation of Cases Over Time</h1>
        <Line data={areaChartData} options={areaChartOptions} />
      </div>
      <div>
        <h1 style={{textAlign:"center"}}>Number of Cases Per Category</h1>
        <select onChange={handleYearChange}>
          <option value={2024}>2024</option>
          <option value={2025}>2025</option>
        </select>
        <Bar data={year === 2024 ? barChartData2024 : barChartData2025} options={barChartOptions} />
      </div>
    </div>
  );
}
