import React, {ReactElement, useState} from "react";
import {Page} from "../Types";
import {HomeButton, PageButton} from "./PageButton";
import {Preview} from "./Preview";

const Menu = (props: MenuProps): ReactElement => {
    const {location} = props;

    const [preview, _setPreview] = useState<Page | "">("");

    const setPreview = (p: Page) => () => _setPreview(p);
    const clearPreview = () => _setPreview("");

    const home = location === Page.HOME;
    return <React.Fragment>
        <div className="menu">
            <PageButton to={Page.RESUME} text={"Résumé"} home={home} leftOffset={4}
                        setPreview={setPreview(Page.RESUME)}
                        clearPreview={clearPreview}
            />
            <PageButton to={Page.PROJECTS} text={"Projects"} home={home} leftOffset={1}
                        setPreview={setPreview(Page.PROJECTS)}
                        clearPreview={clearPreview}
            />
            <PageButton to={Page.CONTACT} text={"Contact"} home={home} leftOffset={3}
                        setPreview={setPreview(Page.CONTACT)}
                        clearPreview={clearPreview}
            />
            <PageButton to={Page.OTHER} text={"Other"} home={home} leftOffset={0}
                        setPreview={setPreview(Page.OTHER)}
                        clearPreview={clearPreview}
            />
            <HomeButton home={home} setPreview={setPreview(Page.HOME)} clearPreview={clearPreview}/>
        </div>
        <Preview page={preview} home={home} />
    </React.Fragment>
};


interface MenuProps {
    location: string;
}

export {Menu};
export type {MenuProps};

