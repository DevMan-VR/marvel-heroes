import React, {useEffect, useState} from "react";
import Hero  from "./components/hero"
import firebase from './config/Fire'
import {withRouter} from 'react-router-dom'


function HeroGrid(props) {
    

  var CryptoJS = require("crypto-js");
  var PER_KEY = "1bfa664b1ea019a1ff2389651f0e1b08";
  var PRIV_KEY = "4fee004b323c73ee3f7f7e01715103772d9d0710";

  const [heroes, setHeroes] = useState([]);
  
  useEffect(
    () => {
      getHeroes()
    }, []
  );

  if(!firebase.getCurrentUsername()){
    alert("Login first..");
    props.history.replace('/login');
    return null;
  }

  


  const getHeroes = async () => {

    var ts = new Date().getTime();
    var hash = CryptoJS.MD5(ts + PRIV_KEY + PER_KEY).toString();
    var url = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${PER_KEY}&hash=${hash}`;

    const response = await fetch(url);
    const data = await response.json();
    setHeroes(data.data.results);
    console.log(data.data.results);
  }

    return(
      <div >
        {heroes.map(hero =>
            (
                  <Hero
                  key={hero.id}
                  id={hero.id}
                  name={hero.name}
                  thumbnail={`${hero.thumbnail.path}/landscape_small.${hero.thumbnail.extension}`}
                  description={hero.description}
                  />

            )
          )}
      </div>
        
        
    )
}

export default withRouter(HeroGrid);