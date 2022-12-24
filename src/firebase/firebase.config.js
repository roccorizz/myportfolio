// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAVpyktFo5XijHR-j9x3qs67BI5Fl2mdm8",
    authDomain: "myportfolio-d94a9.firebaseapp.com",
    projectId: "myportfolio-d94a9",
    storageBucket: "myportfolio-d94a9.appspot.com",
    messagingSenderId: "282020963209",
    appId: "1:282020963209:web:64c0e30b3c855deece3758"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;