import "./scss/index.scss"
import React, {ReactElement} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation,
} from "react-router-dom";
import {Menu} from "./components/menu/Menu";
import {PageKind} from "./Types";
import {Background} from "./components/Background";
import {Contact} from "./components/pages/contact/Contact";
import {PageProps} from "./components/pages/Page";
import {Home} from "./components/pages/Home";

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
        <Other page={page}/>
        <NotFound page={page}/>
    </React.Fragment>;
};

const Resume = (props: PageProps) => <div/>;
const Projects = (props: PageProps) => <div/>;
const Other = (props: PageProps) => <div/>;
const NotFound = (props: PageProps) => <div/>;

const selectPage = (path: string): PageKind =>
    path as PageKind; // TODO lol

export default App;
