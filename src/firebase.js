// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxUkxS7n3_EII6MSMcKUlHb0MdbyYG9NE",
  authDomain: "instagram-reels-clone-7ca37.firebaseapp.com",
  projectId: "instagram-reels-clone-7ca37",
  storageBucket: "instagram-reels-clone-7ca37.appspot.com",
  messagingSenderId: "563876845345",
  appId: "1:563876845345:web:1b867ba996595b48ab9060",
  measurementId: "G-TY19FNB6WN",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default db;
