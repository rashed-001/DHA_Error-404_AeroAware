"use client";
import { useState } from "react";
import fetchAirQualityDataByArea from "../Components/fatchdata";
import AirQualityPieChart from "@/Components/airQualityPieChart";
import "../styles/card.css";



interface AirQualityData {
  aqi: number;
  pm25: number;
  pm10: number;
  co2: number;
  o3: number;
  no2: number;
  so2: number;
  temperature: number;
  humidity: number;
  radioactivity: number;
  area: string;
}


const Dashboard = () => {  
  const [area, setArea] = useState("");
  const [airQualityData, setAirQualityData] = useState<AirQualityData | null>(
    null
  );

  const handleFetchData = async () => {
    const data = await fetchAirQualityDataByArea(area);
    setAirQualityData(data);
  };

  return (
    <div className="custom-container">
      <div className="flex justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Enter area"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          className="custom-input"
        />
        <button onClick={handleFetchData} className="custom-button">
          click
        </button>
      </div>

      {airQualityData ? (
        <div>
          <h1 className="index-text">Air Quality Dashboard</h1>

          {/* Four cards in the same row */}
          <div className="card-container">
            {/* Temperature Card */}
            <div className="card temperature-card">
              <h2 className="text-lg font-semibold mb-2">Temperature</h2>
              <p className="text-3xl">{airQualityData.temperature}°C</p>
            </div>

            {/* Humidity Card */}
            <div className="card humidity-card">
              <h2 className="text-lg font-semibold mb-2">Humidity</h2>
              <p className="text-3xl">{airQualityData.humidity}%</p>
            </div>

            {/* Radioactivity Card */}
            <div className="card radioactivity-card ">
              <h2 className="text-lg font-semibold mb-2">Radioactivity</h2>
              <p className="text-3xl">{airQualityData.radioactivity} µSv/h</p>
            </div>

            {/* Air Bad Elements Card */}
            <div className="card bad-elements-card ">
              <h2 className="text-lg font-semibold mb-2">Air Bad Elements</h2>
              <p className="text-3xl">{airQualityData.so2}</p>
            </div>
          </div>

          {/* Air Quality Pie Chart */}
          <h2 className="index-text">Air Quality Indices</h2>
          <div className="chart-container">
            <AirQualityPieChart
              data={airQualityData}
              width={800}
              height={600}
            />
          </div>
        </div>
      ) : (
        <p>No data available for this area</p>
      )}
    </div>
  );
};

export default Dashboard;
