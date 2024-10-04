// import { useEffect, useState } from "react";
// import { getAirQualityData } from "../services/airQualityService";

// export const useAirQuality = (city: string) => {
//   interface AirQualityData {
//     aqi: number;
//     pm25: number;
//     pm10: number;
//     // Add other properties as needed
//   }

//   const [data, setData] = useState<AirQualityData | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const result = await getAirQualityData(city);
//         setData(result);
//       } catch (err) {
//         setError("Failed to fetch air quality data");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [city]);

//   return { data, loading, error };
// };
