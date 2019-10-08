import React, {useState} from "react";
import './login.css';
import firebase from './config/Fire';
import {withRouter} from 'react-router-dom';

function Signup (props) {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //const [quote, setQuote] = useState('');

    return(
        <div className="wrapper fadeInDown">
            <div id="formContent">
                <div className="fadeIn first">
                </div>
                <form onSubmit={e => e.preventDefault & console.log(firebase)}>
                    <input 
                        type="text"
                        id="username" 
                        className="fadeIn second" 
                        name="username" 
                        placeholder="username"
                        value={username}
                        onChange={ e => setUsername(e.target.value)}
                    />

                    <input 
                        type="text"
                        id="email" 
                        className="fadeIn second" 
                        name="email" 
                        placeholder="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                        type="text" 
                        id="password" 
                        className="fadeIn third" 
                        name="login" 
                        placeholder="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <input 
                        type="submit" 
                        className="fadeIn fourth" 
                        value="Sign Up"
                    
                    />
                </form>

                
                <div id="formFooter">
                <a className="underlineHover" href="#">Forgot Password?</a>
                </div>

            </div>
        </div>
    )

    async function onRegister() {
        try {
            await firebase.register(username, email, password);
            props.history.replace('/herogrid');
        } catch(error) {
            alert(error.message)
        }
    }


}

export default withRouter(Signup);
