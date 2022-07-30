import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Symble from './symble/symble.screen';
import GettingStarted from './getting-started/getting-started.screem';
import Screen1 from './screen1/screen';
import Screen2 from './screen2/Screen2';
import Screen3 from './screen3/screen3';

export function OnboardingRoutes(){
    return(
        <Switch>
        {/* Routing for Onboarding */}
        <Route exact path="/symble" component={Symble}/>
        <Route exact path="/gettingstarted" component={GettingStarted}/>
        <Route exact path={"/onboardscreen1"} component={Screen1}/>
        <Route exact path={"/onboardscreen2"} component={Screen2}/>
        <Route exact path={"/onboardscreen3"} component={Screen3}/>
        {/* Routing for Onboarding */}
      </Switch>

    )
}