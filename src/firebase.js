// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyABK2kU4W907KRVcmp0QfXIfRqyRBhLAow",
  authDomain: "mytwitter-e5795.firebaseapp.com",
  projectId: "mytwitter-e5795",
  storageBucket: "mytwitter-e5795.appspot.com",
  messagingSenderId: "686703412075",
  appId: "1:686703412075:web:9c9d36466685b81992022e",
  measurementId: "G-FFZ81C088N",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
