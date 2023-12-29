// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZoFcIHaSROTp3G6Z8-0gj7WakuEK5duI",
  authDomain: "codesnap-32dcf.firebaseapp.com",
  projectId: "codesnap-32dcf",
  storageBucket: "codesnap-32dcf.appspot.com",
  messagingSenderId: "187907832697",
  appId: "1:187907832697:web:0acdb7134d0abe3204cda8",
  measurementId: "G-8BVGWJKZJB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);