// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA7dm8xbuAtT0RPHkq5JIyItuZkUyfG1Cw",
  authDomain: "social-media-react-95a1c.firebaseapp.com",
  projectId: "social-media-react-95a1c",
  storageBucket: "social-media-react-95a1c.appspot.com",
  messagingSenderId: "1036257309672",
  appId: "1:1036257309672:web:2eacb58d1c6b71e217aa5d",
  measurementId: "G-Z43B0X5G65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage= getStorage(app);


export{auth,db,storage}