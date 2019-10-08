import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {Image} from "semantic-ui-react"

const Header = () => (
   
    <nav className="navbar navbar-expand-lg navbar-dar " style={{color: 'white'}}>
         <Image src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/MarvelLogo.svg/1200px-MarvelLogo.svg.png"
        style={{with: 1000 , height: 50, alignSelf:"center"}}
        resizeMode="contain"/>
        <div className="container">
            <Link to="/" className="navbar-brand" style={{color: 'white'}}>
                Marvel Heroes
            </Link>

            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink
                        to="/herogrid"
                        className="nav-link"
                        activeClassName="active"
                        style={{color: 'white'}}
                    >Herogrid</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/login"
                        className="nav-link"
                        activeClassName="active"
                        style={{color: 'white'}}
                    >Login</NavLink>
                </li>
            </ul>
        </div>
    </nav>
)

export default Header;