// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-28008.firebaseapp.com",
  projectId: "mern-auth-28008",
  storageBucket: "mern-auth-28008.appspot.com",
  messagingSenderId: "848672897350",
  appId: "1:848672897350:web:01367934a985c83d038d47"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);