import React, { useState } from 'react';
import { Button, Input } from "../UI";

import './login-form.sass'

const LoginFormView = props => {
    const [panelState, panelSwitcher] = useState(false);
    const switchPanel = () => {
        panelSwitcher(!panelState);
    };


    return (
        <div className={panelState ? 'login-form' : 'login-form active'}>
            <div className="form-container sign-in-form">
                <form>
                    <span className="title">Sign In</span>
                    <Input type='text' placeholder='E-Mail'/>
                    <Input type='password' placeholder='password'/>
                    <Button>Sign In</Button>
                </form>
            </div>

            <div className="form-container sign-up-form">
                <form>
                    <span className="title">Sign Up</span>
                    <Input type='text' placeholder='login'/>
                    <Input type='email' placeholder='E-Mail'/>
                    <Input type='password' placeholder='password'/>
                    <Button>Sign Up</Button>
                </form>
            </div>

            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-left overlay-panel">
                        <h2>Welcome Back</h2>
                        <p>lorem anars</p>
                        <Button onClick={switchPanel}>Sign In</Button>
                    </div>
                    <div className="overlay-right">
                        <h2>Login </h2>
                        <p>lorem at inars</p>
                        <Button onClick={switchPanel}>Sign UP</Button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default LoginFormView;
