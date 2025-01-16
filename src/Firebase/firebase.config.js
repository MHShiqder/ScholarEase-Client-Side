// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZuhQw2j8T1qQEf3zFiz5tCVuUnzmaLNU",
  authDomain: "scholarease-52ab0.firebaseapp.com",
  projectId: "scholarease-52ab0",
  storageBucket: "scholarease-52ab0.firebasestorage.app",
  messagingSenderId: "92057183444",
  appId: "1:92057183444:web:3f185640bef3522bd08741"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
