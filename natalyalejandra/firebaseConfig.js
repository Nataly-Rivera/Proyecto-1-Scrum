// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "natalyalejandra.firebaseapp.com",
  projectId: "natalyalejandra",
  storageBucket: "natalyalejandra.appspot.com",
  messagingSenderId: "737365834939",
  appId: "1:737365834939:web:eab3aa9928bd9b22883d9e",
  measurementId: "G-RN51E92YW1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
