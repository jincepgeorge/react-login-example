import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';

export const MainRouter = () => {
    return (
        <>
            <Switch>
                <Route exact path='/' component={Login} />
                <Route path='/dashboard' component={Dashboard} >
                </Route>
            </Switch>
        </>
    );
};
export default MainRouter