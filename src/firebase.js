// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDPpXDJMNgZT6ENG_flj-YlbNl8qtTd7w",
  authDomain: "instaclone-f37c7.firebaseapp.com",
  databaseURL: "https://instaclone-f37c7-default-rtdb.firebaseio.com",
  projectId: "instaclone-f37c7",
  storageBucket: "instaclone-f37c7.appspot.com",
  messagingSenderId: "338644176679",
  appId: "1:338644176679:web:96356ab299cc7670b76302",
  measurementId: "G-QRD2ZLT7TC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth;
export default {db,auth};