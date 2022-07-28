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
import Screen1 from './modules/onboarding/screen1/screen';
import Screen2 from './modules/onboarding/screen2/Screen2';
import Screen3 from './modules/onboarding/screen3/screen3';

function App() {
  return (
      <div className="App">
        <Switch>
        {/* Routing for pages */}
          <Route  path="/login" component={AuthLogin}/>

          <Route exact path="/signup" component={AuthSignup}/>

          <Route exact path="/recovery" component={AuthRecovery}/> 

          <Route exact path="/reset-password" component={AuthResetPassword}/>

          <Route exact path="/pin" component={AuthPin}/>

          <Route exact path="/reset/pin" component={AuthResetPin}/>

          <Route exact path="/symble" component={Symble}/>

          <Route exact path="/gettingstarted" component={GettingStarted}/>

          <Route exact path={"/onboardscreen1"} component={Screen1}/>

          <Route exact path={"/onboardscreen2"} component={Screen2}/>

          <Route exact path={"/onboardscreen3"} component={Screen3}/>
        {/* Routing for pages */}
        </Switch>
      </div> 
  );
}

export default App;
