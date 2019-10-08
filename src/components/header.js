import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = ({userState}) => (
    <nav className="navbar navbar-expand-lg navbar-dar bg-dark" style={{color: 'white'}}>
        <div className="container">
            <Link to="/" className="navbar-brand" style={{color: 'white'}}>
                Marvel Heroes
            </Link>

            <ul className="navbar-nav mr-auto">
                {userState ? 
                    (<li className="nav-item">
                        <NavLink
                            to="/herogrid"
                            className="nav-link"
                            activeClassName="active"
                            style={{color: 'white'}}
                        >HeroGrid</NavLink>
                    </li>)
                    :
                    (<p></p>)
                }
                
                <li className="nav-item">
                    <NavLink
                        to="/login"
                        className="nav-link"
                        activeClassName="active"
                        style={{color: 'white'}}
                    >Login</NavLink>
                </li>

                <li className="nav-item">
                    <NavLink
                        to="/signup"
                        className="nav-link"
                        activeClassName="active"
                        style={{color: 'white'}}
                    >Signup</NavLink>
                </li>
            </ul>
        </div>
    </nav>
)

export default Header;