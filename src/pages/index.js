import React, {useState, useEffect} from "react"
import ReactDOM from "react-dom"
import Hero from "../components/hero"
import { Grid } from 'semantic-ui-react'


const IndexPage = () => {

  var CryptoJS = require("crypto-js");
  var PER_KEY = "1bfa664b1ea019a1ff2389651f0e1b08";
  var PRIV_KEY = "4fee004b323c73ee3f7f7e01715103772d9d0710";

  const [heroes, setHeroes] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(
    () => {
      getHeroes()
    }, []
  );

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
    <div className="Index">
      <div className="Hero">

          {heroes.map(hero =>
              (
                    <Hero
                      id={hero.id}
                      thumbnail={`${hero.thumbnail.path}/landscape_small.${hero.thumbnail.extension}`}
                    />

              )
            )
          }

        
      </div>
    </div>
  );
};

export default IndexPage
