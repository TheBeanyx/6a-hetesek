// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTBGoX-vztuuxOzLz7gkFA4bqiMvKuEwI",
  authDomain: "hetesek-6.firebaseapp.com",
  projectId: "hetesek-6",
  storageBucket: "hetesek-6.firebasestorage.app",
  messagingSenderId: "429344638911",
  appId: "1:429344638911:web:a4dc1bedc94caad6d1830a",
  measurementId: "G-4FQ390YQPS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
