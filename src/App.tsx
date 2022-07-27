import React from 'react';
// import ReactDOM from "react-dom";
import { Route, Switch} from 'react-router-dom';
import AuthLogin  from './modules/auth/auth-login/auth-login.screen';
import AuthSignup from './modules/auth/auth-signup/auth-signup.screen';
import AuthRecovery from './modules/auth/auth-recovery/auth-recovery.screen';
import AuthResetPassword from './modules/auth/auth-reset-password/auth-reset-password.screen';
import AuthPin from './modules/auth/auth-pin/auth-pin.screen';
import AuthResetPin from './modules/auth/auth-reset-pin/auth-reset-pin.screen';
import Symble from './modules/onboarding/symble/symble.screen';
import GettingStarted from './modules/onboarding/getting-started/getting-started.screem';


function App() {
  return (
      <div className="App">
        <Switch>
        {/* Routing for pages */}
          <Route  path="/login" component={AuthLogin}/>

          <Route exact path="/signup" component={AuthSignup}/>

          <Route exact path="/recovery" component={AuthRecovery}/> 

          <Route exact path="/reset/password" component={AuthResetPassword}/>

          <Route exact path="/pin" component={AuthPin}/>

          <Route exact path="/reset/pin" component={AuthResetPin}/>

          <Route exact path="/symble" component={Symble}/>

          <Route exact path="/gettingstarted" component={GettingStarted}/>
        {/* Routing for pages */}
        </Switch>
      </div> 
  );
}

export default App;
