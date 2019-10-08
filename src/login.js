import React, {useState} from "react";
import './login.css';
import firebase from './config/Fire';
import {withRouter} from 'react-router-dom';


function Login (props) {

    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    return(
        <div className="wrapper fadeInDown">
            <div id="formContent">
            

            
                <div className="fadeIn first">
                </div>
                <form >

                    <input 
                        type="text"
                        id="email" 
                        className="fadeIn second" 
                        name="email" 
                        placeholder="email"
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                        type="text" 
                        id="password" 
                        className="fadeIn third" 
                        name="login" 
                        placeholder="password"
                        onChange={e => setPassword(e.target.value)}
                    />
                    <input 
                        type="submit" 
                        className="fadeIn fourth" 
                        value="Sign Up"
                        onSubmit={onLogin}
                    
                    />
                </form>

                
                <div id="formFooter">
                <a className="underlineHover" href="#">Forgot Password?</a>
                </div>

            </div>
        </div>
    )

    async function onLogin() {
        try {
            console.log("somethingp");

            await firebase.login(email, password);
            console.log("something");
            props.handleUser(true);
            props.history.replace('/herogrid');
        } catch(error) {
            alert(error.message)
        }
    }
}

export default withRouter(Login);
