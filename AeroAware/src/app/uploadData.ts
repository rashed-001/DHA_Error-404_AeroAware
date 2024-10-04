import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { readFileSync } from "fs";
import path from "path";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyANHWA1D-Gbm6_UyiBaT0UKVeOvloBYh_U",
  authDomain: "airquality-80fb9.firebaseapp.com",
  projectId: "airquality-80fb9",
  storageBucket: "airquality-80fb9.appspot.com",
  messagingSenderId: "875290940282",
  appId: "1:875290940282:web:043f82eea524d3ac633cc3",
  measurementId: "G-3E2ZRMVHMP",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Path to your JSON file
const filePath = path.join(__dirname, "airquality.json");

// Function to upload data to Firestore
async function uploadData() {
  try {
    const fileContent = readFileSync(filePath, "utf-8");
    const airQualityData = JSON.parse(fileContent);

    for (const data of airQualityData) {
      await addDoc(collection(db, "airQuality"), data);
      console.log(`Uploaded data for area: ${data.area}`);
    }
    console.log("All data uploaded successfully");
  } catch (error) {
    console.error("Error uploading data:", error);
  }
}

// Call the upload function
uploadData();
