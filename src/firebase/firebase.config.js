// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
require('dotenv').config();
const firebaseConfig = {
    apiKey: process.env.REACT_SECRET_apiKey,
    authDomain: process.env.REACT_SECRET_authDomain,
    projectId: process.env.REACT_SECRET_projectId,
    storageBucket: process.env.REACT_SECRET_storageBucket,
    messagingSenderId: process.env.REACT_SECRET_messagingSenderId,
    appId: process.env.REACT_SECRET_appId,
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;