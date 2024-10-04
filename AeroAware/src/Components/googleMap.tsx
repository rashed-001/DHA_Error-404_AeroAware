import AirQualityPieChart from "../Components/airQualityPieChart";
import "../styles/card.css";

const Dashboard = () => {
  const airQualityData = {
    aqi: 45,
    pm25: 12,
    pm10: 20,
    co2: 400,
    o3: 60,
    no2: 35,
    so2: 12,
  };

  const temperature = 25; // Example temperature value
  const humidity = 60; // Example humidity value
  const radioactivity = 0.15; // Example radioactivity value
  const badElements =
    airQualityData.aqi + airQualityData.pm25 + airQualityData.pm10; // Example calculation

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Air Quality Dashboard</h1>

      {/* Four cards in the same row */}
      <div className="flex flex-wrap justify-between mb-8">
        {/* Temperature Card */}
        <div className={`card temperature-card`}>
          <h2 className="text-lg font-semibold mb-2">Temperature</h2>
          <p className="text-3xl">{temperature}°C</p>
        </div>

        {/* Humidity Card */}
        <div className={`card humidity-card`}>
          <h2 className="text-lg font-semibold mb-2">Humidity</h2>
          <p className="text-3xl">{humidity}%</p>
        </div>

        {/* Radioactivity Card */}
        <div className={`card radioactivity-card`}>
          <h2 className="text-lg font-semibold mb-2">Radioactivity</h2>
          <p className="text-3xl">{radioactivity} µSv/h</p>
        </div>

        {/* Air Bad Elements Card */}
        <div className={`card bad-elements-card`}>
          <h2 className="text-lg font-semibold mb-2">Air Bad Elements</h2>
          <p className="text-3xl">{badElements}</p>
        </div>
      </div>

      {/* Air Quality Pie Chart */}
      <h2 className="text-xl font-semibold mb-4">Air Quality Indices</h2>
      <div className="chart-container">
        <AirQualityPieChart data={airQualityData} width={800} height={600} />
      </div>
    </div>
  );
};

export default Dashboard;

// {/* Air Quality Pie Chart */}
// <h2 className="text-xl font-semibold mb-4">Air Quality Indices</h2>
// <div className="chart-container">
//   {/* Replace with your Pie Chart component */}
//   <AirQualityPieChart data={airQualityData} width={400} height={400} />
// </div>
