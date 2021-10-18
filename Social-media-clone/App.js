import './App.css';
import {BrowserRouter as Router} from "react-router-dom"
import Header  from './Components/Header';
import Content from './Components/Content';
import { onAuthStateChanged } from '@firebase/auth';
import { auth } from './firebase';
import { useEffect, useState } from 'react';

function App() {
  const [user,setUser] = useState(null);
  useEffect(() => {
    const unsubsribe = onAuthStateChanged(auth, (authUser)=>{
      if(authUser){
        setUser(authUser);
      }else {
        setUser(null);
      }
    });
    return () => {
      unsubsribe();
    }
  }, [])
  
  return (<Router>
    <Header user={user}/>
    <Content user= {user}/>
  </Router>
  );
}

export default App;
