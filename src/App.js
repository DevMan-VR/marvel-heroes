import React, {useState, useEffect} from 'react';
import HeroGrid from './herogrid';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from './login';
import Header from './components/header';
import './App.css';
import Signup from './signup';
import {Image} from "semantic-ui-react"
import Fire from './config/Fire';

function App() {
  
  const [state, setState] = useState([{user: null}]);
  useEffect( () => {
    authListener();
  }, []);

  const authListener = () => {
    Fire.auth().onAuthStateChanged((user) => {
      if(user) {
        setState({user});
      } else {
        setState({user: null});
      }
    })
  }

  
  return(



      <div className="box">
      <Router>
        <Header/>
        <main className="container mt-5">
          <Switch>
          <Route exact path="/" component={Login} />
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