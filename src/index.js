import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Styles.sass'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbhurXcTvQW2UxrA4sRHsP3loe6PM4Hag",
  authDomain: "react-31170-5f3d0.firebaseapp.com",
  projectId: "react-31170-5f3d0",
  storageBucket: "react-31170-5f3d0.appspot.com",
  messagingSenderId: "754217962959",
  appId: "1:754217962959:web:db23517e4f24ea61eb16ba"
};

// Initialize Firebase
initializeApp(firebaseConfig);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
