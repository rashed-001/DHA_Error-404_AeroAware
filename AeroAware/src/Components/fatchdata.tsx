import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../app/firebaseConfig"; // Path to your firebaseConfig.ts

// Define the structure of your Air Quality data
type AirQualityData = {
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
};

// Fetch air quality data by area
const fetchAirQualityDataByArea = async (area: string) => {
  try {
    console.log(area);
    const q = query(collection(db, "1"), where("CityName", "==", area));
    const querySnapshot = await getDocs(q);

    const data: AirQualityData[] = [];
    querySnapshot.forEach((doc) => {
      data.push(doc.data() as AirQualityData);
    });

    if (data.length > 0) {
      return data[0]; // Return the first matching document
    } else {
      console.log("No data found for this area");
      return null;
    }
  } catch (error) {
    console.error("Error fetching data from Firestore:", error);
    return null;
  }
};

export default fetchAirQualityDataByArea;
