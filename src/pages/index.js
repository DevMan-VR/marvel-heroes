import React, {useEffect, useState} from "react";
import Hero from '../components/Hero';
import { Link } from "gatsby"




const IndexPage = () => {
  var CryptoJS = require("crypto-js");
  var PER_KEY = "1bfa664b1ea019a1ff2389651f0e1b08";
  var PRIV_KEY = "4fee004b323c73ee3f7f7e01715103772d9d0710";
  const[heroes, setHeroes] =useState([]);

  useEffect(
    () => {
      getHeroes();
    }, []
  );
  
  const getHeroes =async () =>
  {
    var ts = new Date().getTime();
    var hash = CryptoJS.MD5(ts + PRIV_KEY + PER_KEY).toString();
    const response = await fetch(`http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${PER_KEY}&hash=${hash}`);
    const data = await response.json();
    setHeroes(Array.from(data.data.results));
    console.log(data.data.results);
  }

  return (
    <div className="IndexPage">

      <div className="heroes">
        {heroes.map(hero =>
          (
          <Hero
            id={hero.id}
            name={hero.name}
            descr={hero.descr}
            thumb={hero.thumbnail.path}
            comics={hero.comics.items}
            />
          ))}
      </div>
    </div>
  );



};
