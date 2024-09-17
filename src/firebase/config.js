// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBnwjqhbVLe6Wj2074tBlmmuQ2axXQnsYk",
  authDomain: "react-pf-1.firebaseapp.com",
  projectId: "react-pf-1",
  storageBucket: "react-pf-1.appspot.com",
  messagingSenderId: "418516187720",
  appId: "1:418516187720:web:63dd15c31793772ac4767d",
  measurementId: "G-7T54JCTSZW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


//iniciamos la base de datos
export const db = getFirestore (app) 