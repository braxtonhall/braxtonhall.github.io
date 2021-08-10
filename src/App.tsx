import React, {ReactElement} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation,
} from "react-router-dom";
import {Menu} from "./components/Menu";

const App = (): ReactElement => {
    return (
        <Router>
            <Switch>
                <Route path="*">
                    <LocationApp/>
                </Route>
            </Switch>
        </Router>
    );
};

const LocationApp = () => {
    const location = useLocation();

    return (
        <React.Fragment>
            <Background/>
            <Menu location={location.pathname}/>
        </React.Fragment>
    );
};

const Background = () => <div className="background"/>

export default App;
