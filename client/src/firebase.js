// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-4319c.firebaseapp.com",
  projectId: "mern-blog-4319c",
  storageBucket: "mern-blog-4319c.appspot.com",
  messagingSenderId: "962732506242",
  appId: "1:962732506242:web:3aa5e61c67eb4dffb6889b",
  measurementId: "G-J87QRSW2QS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
