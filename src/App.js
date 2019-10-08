import React, {useState, useEffect} from 'react';
import HeroGrid from './herogrid';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from './login';
import Header from './components/header';
import './App.css';
import Signup from './signup';
import {Image} from "semantic-ui-react";
import firebase from './config/Fire';


function App() {
  
  /*const [state, setState] = useState([{user: null}]);
  useEffect( () => {
    authListener();
  }, []);

  const authListener = () => {
    Firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        setState({user});
      } else {
        setState({user: null});
      }
    })
  }*/
  const [userState, setUserState] = useState(false);
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);

  useEffect(() => {
    firebase.isInitialized().then(val => {
      setFirebaseInitialized(val)
    })
  })

  const handleUserState = (state) => {
    setUserState(state);
    console.log(userState);
  }
  
  return(



      <div className="box">
      <Router>
        <Header userState={firebaseInitialized}/>
        <main className="container mt-5">
          <Switch>
          <Route exact path="/" render={(props) => <Login {...props} handleUser={handleUserState} />} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/herogrid" component={HeroGrid} />
            {/*<Route exact path="/heroes/:id" component={Producto} />
            <Route exact path="/comics/:id" component={EditarProducto} />*/}

          </Switch>
        </main>
      </Router>
     </div>


    
    
    
  );
}

export default App;