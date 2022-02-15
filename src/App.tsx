import "./scss/index.scss"
import React, {ReactElement} from 'react';
import {BrowserRouter as Router, Route, Switch, useLocation,} from "react-router-dom";
import {Menu} from "./components/menu/Menu";
import {Background} from "./components/Background";
import {Contact} from "./components/pages/contact/Contact";
import {PageKind} from "./components/pages/Page";
import {Home} from "./components/pages/Home";
import {Projects} from "./components/pages/projects/Projects";
import {NotFound} from "./components/pages/NotFound";
import {Other} from "./components/pages/other/Other";
import {Resume} from "./components/pages/resume/Resume";

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
    const page = selectPage(location.pathname);

    return <React.Fragment>
        <Background/>
        <Menu home={page === PageKind.HOME}/>
        <Home page={page}/>
        <Resume page={page}/>
        <Contact page={page}/>
        <Projects page={page}/>
        <Other page={page} path={location.pathname}/>
        <NotFound page={page}/>
    </React.Fragment>;
};


const selectPage = (path: string): PageKind =>
    Object.values(PageKind).find(page => page === path) ??
    (path.startsWith(PageKind.OTHER) ? PageKind.OTHER : PageKind.NOT_FOUND);

export default App;
