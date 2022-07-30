import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AuthLogin from './auth-login/auth-login.screen';
import AuthSignup from './auth-signup/auth-signup.screen';
import AuthRecovery from './auth-recovery/auth-recovery.screen';
import AuthResetPassword from './auth-reset-password/auth-reset-password.screen';
import AuthPin from './auth-pin/auth-pin.screen';
import AuthResetPin from './auth-reset-pin/auth-reset-pin.screen';

export function AuthRoutes(){
    return(
        <Switch>
            {/* Routing for Auth */}
            <Route  path="/login" component={AuthLogin}/>
            <Route exact path="/signup" component={AuthSignup}/>
            <Route exact path="/recovery" component={AuthRecovery}/> 
            <Route exact path="/reset-password" component={AuthResetPassword}/>
            <Route exact path="/pin" component={AuthPin}/>
            <Route exact path="/reset/pin" component={AuthResetPin}/>
            {/* Routing for Auth */}
            </Switch>
    )

}