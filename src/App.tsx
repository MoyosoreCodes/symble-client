import React, { createContext, useEffect, useState } from 'react';
// import ReactDOM from "react-dom";
import { Route, Switch } from 'react-router-dom';
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
import Cartegories1 from './modules/display/cartegories/categories-I';
import Cartegories2 from './modules/display/cartegories/cartegories-II';
import { AuthRoutes } from './modules/auth/auth.route';
import { OnboardingRoutes } from './modules/onboarding/onboarding.route';
import { AuthContext } from './modules/auth/auth.context';
import ProtectedRoute from './protectedRoutes.screen';
function App() {
  const [token, setToken]= useState("")
  const [isAuth, setIsAuth]= useState(false)

  const tokens = localStorage.getItem('token')
  console.log(setToken);
  return (
      <AuthContext.Provider value={{token, setToken}}>
      <div className="App">
          <OnboardingRoutes/>
          <AuthRoutes/>
        <Switch>

          <Route exact path={"/"} component={Cartegories1}/>
          <Route exact path={"/cartegories2"} component={Cartegories2}/>
        {/* Routing for pages */}
        </Switch>
        <ProtectedRoute path="/cartegories1" component={Cartegories1} isAuth={tokens}/>
        
      </div> 
      </AuthContext.Provider>
  );
}

export default App;
