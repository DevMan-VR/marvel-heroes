import React, {Fragment} from 'react';
import HeroGrid from './herogrid';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from './login';
import Header from './components/Header';
import './App.css'
import {Image} from "semantic-ui-react"

function App() {
  
  
  
  return(



      <div className="box">
      <Router>
        <Header/>
        <main className="container mt-5">
          <Switch>
            <Route exact path="/login" component={Login} />
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