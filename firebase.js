// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGUoOj9g2ZM77j8own1LXRDyCfg6ZeVek",
  authDomain: "insta-gram-22304.firebaseapp.com",
  projectId: "insta-gram-22304",
  storageBucket: "insta-gram-22304.appspot.com",
  messagingSenderId: "249518491728",
  appId: "1:249518491728:web:98ce04f5ae0b2cc2426955",
  measurementId: "G-RLV89HPHKF"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export {app , db, storage}; 