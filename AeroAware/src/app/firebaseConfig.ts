// src/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  // authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,

    apiKey: "AIzaSyANHWA1D-Gbm6_UyiBaT0UKVeOvloBYh_U",
    authDomain: "airquality-80fb9.firebaseapp.com",
    projectId: "airquality-80fb9",
    storageBucket: "airquality-80fb9.appspot.com",
    messagingSenderId: "875290940282",
    appId: "1:875290940282:web:043f82eea524d3ac633cc3",
    measurementId: "G-3E2ZRMVHMP"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyANHWA1D-Gbm6_UyiBaT0UKVeOvloBYh_U",
//   authDomain: "airquality-80fb9.firebaseapp.com",
//   projectId: "airquality-80fb9",
//   storageBucket: "airquality-80fb9.appspot.com",
//   messagingSenderId: "875290940282",
//   appId: "1:875290940282:web:043f82eea524d3ac633cc3",
//   measurementId: "G-3E2ZRMVHMP"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);