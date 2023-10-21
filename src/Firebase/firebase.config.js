// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5MQBbLDn6_fChR8SOa_byDfXNF3FrTXU",
  authDomain: "assignment-10-mongodb.firebaseapp.com",
  projectId: "assignment-10-mongodb",
  storageBucket: "assignment-10-mongodb.appspot.com",
  messagingSenderId: "534944480924",
  appId: "1:534944480924:web:d619576ddf26c02889f759"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;