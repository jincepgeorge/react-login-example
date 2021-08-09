import React from "react";
import { Switch, Route } from "react-router-dom";
import About from '../pages/About';
import Contact from '../pages/Contact';

export const DashboardRouter = () => {
    return (
        <>
            <Switch>
                <Route exact path='/dashboard/about' component={About} />
                <Route exact path='/dashboard/contact' component={Contact} />
            </Switch>
        </>
    );
};
export default DashboardRouter