// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBf7tDJocG2gtorPuBb_AHB-RWZfGf10mI",
  authDomain: "react-native-login-7989f.firebaseapp.com",
  projectId: "react-native-login-7989f",
  storageBucket: "react-native-login-7989f.appspot.com",
  messagingSenderId: "986473330454",
  appId: "1:986473330454:web:a34dc543d1ba0abcd34237"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app); // Create a Firestore instance