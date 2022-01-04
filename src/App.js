import { BrowserRouter} from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import Homepage from './components/pages/Homepage';
import { auth } from './firebase/firebase.utils'
import { useState, useEffect } from 'react';

function App() {

  const [currentUser, setCurrentUser] = useState({});

  let unsubscribeFromAuth = null;

  useEffect(() => {

      unsubscribeFromAuth = auth.onAuthStateChanged(user =>{
          setCurrentUser(user)
          console.log(user);
      })
      
  }, [])

  return (
    <div>
      <BrowserRouter>
          <Header currentUser={currentUser} auth={auth}/>
          <Homepage/>
      </BrowserRouter>
    </div>
  );
}

export default App;
