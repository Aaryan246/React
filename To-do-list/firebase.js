import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore';
const firebaseApp= initializeApp({
  apiKey: "AIzaSyAcNYaITHv4sml9AAHXYsAjwUWkPov4DCg",
  authDomain: "todo-react-app-2.firebaseapp.com",
  projectId: "todo-react-app-2",
  storageBucket: "todo-react-app-2.appspot.com",
  messagingSenderId: "1098620180724",
  appId: "1:1098620180724:web:ca752ef211df7161f9a6a1",
  measurementId: "G-GGJV1WLCM1"
});

const db= getFirestore(firebaseApp);
export {db};