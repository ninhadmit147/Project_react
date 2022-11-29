// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAoGmkn41H1-LAU85h6k_f2e8OCZLAF4a8",
    authDomain: "react-project-f1a10.firebaseapp.com",
    projectId: "react-project-f1a10",
    storageBucket: "react-project-f1a10.appspot.com",
    messagingSenderId: "839182616072",
    appId: "1:839182616072:web:38423ceec67431b5dab3bd",
    measurementId: "G-H6J3K2GDVY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)