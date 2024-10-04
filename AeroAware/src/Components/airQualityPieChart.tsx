"use client"; // Ensure this is a Client Component

import React from "react";
import { Pie } from "react-chartjs-2";
// import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import "../styles/card.css"; 

import { Chart, registerables } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(...registerables, ChartDataLabels);

// Define the AirQualityData interface
interface AirQualityData {
  aqi: number;
  pm25: number;
  pm10: number;
  co2: number;
  o3: number;
  no2: number;
  so2: number;
}

// Define the interface for the component's props
interface AirQualityPieChartProps {
  data: AirQualityData;
  width: number;
  height: number;
}

const AirQualityPieChart: React.FC<AirQualityPieChartProps> = ({ data, width, height }) => {
  const pieData = {
    labels: ['AQI', 'PM2.5', 'PM10', 'CO2', 'O3', 'NO2', 'SO2'],
    datasets: [
      {
        label: 'Air Quality Indices',
        data: [
          data.aqi,
          data.pm25,
          data.pm10,
          data.co2,
          data.o3,
          data.no2,
          data.so2,
        ],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
          '#FF5733',
        ],
      },
    ],
  };

  const pieOptions = {
    plugins: {
      legend: {
        position: 'top' as const,
      },
      datalabels: {
        formatter: (value: number) => {
          return value; // Only display the value
        },
        color: '#fff', // White color for the text inside the chart
        font: {
          size: 16, // Adjust the font size if needed
        },
      },
    },
  };

  return (
    <div style={{ width: `${width}px`, height: `${height}px`, margin: '0 auto' }}>
      <Pie data={pieData} options={pieOptions} />
    </div>
  );
};

export default AirQualityPieChart;