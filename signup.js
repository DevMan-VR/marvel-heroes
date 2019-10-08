import React from "react";
import './login.css';
import Fire from './config/Fire';

function Signup () {
    return(
        <div class="wrapper fadeInDown">
            <div id="formContent">
            

            
                <div class="fadeIn first">
                </div>
                <form>
                <input type="text" id="username" className="fadeIn second" name="username" placeholder="username"/>
                <input type="text" id="email" class="fadeIn second" name="email" placeholder="email"/>
                <input type="text" id="password" className="fadeIn third" name="login" placeholder="password"/>
                <input type="submit" class="fadeIn fourth" value="Sign Up"/>
                </form>

                
                <div id="formFooter">
                <a class="underlineHover" href="#">Forgot Password?</a>
                </div>

            </div>
        </div>
    )
}

export default Signup;
