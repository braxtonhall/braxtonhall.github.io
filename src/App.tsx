import "./scss/index.scss"
import React, {ReactElement} from 'react';
import {BrowserRouter as Router, Route, Switch, useLocation,} from "react-router-dom";
import {Menu} from "./components/menu/Menu";
import {PageKind} from "./Types";
import {Background} from "./components/Background";
import {Contact} from "./components/pages/contact/Contact";
import {PageProps} from "./components/pages/Page";
import {Home} from "./components/pages/Home";
import {Projects} from "./components/pages/projects/Projects";

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

const Resume = (props: PageProps) => <NotDone page={props.page} targetPage={PageKind.RESUME}/>;
const Other = (props: PageProps) => <NotDone page={props.page} targetPage={PageKind.OTHER}/>;
const NotFound = (props: PageProps) => <NotDone page={props.page} targetPage={PageKind.NOT_FOUND}/>;
const NotDone = (props: {page: string, targetPage: string}) =>
    props.page === props.targetPage ? <span>I haven't made this page yet. Please go away.</span> : <div/>;


const selectPage = (path: string): PageKind =>
    Object.values(PageKind).find(page => page === path) ??
    (path.startsWith(PageKind.OTHER) ? PageKind.OTHER : PageKind.NOT_FOUND);

export default App;
