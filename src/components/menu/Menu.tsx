import React, {ReactElement, useState} from "react";
import {PageKind} from "../../Types";
import {HomeButton, PageButton} from "./PageButton";
import {Preview} from "./Preview";

const Menu = (props: MenuProps): ReactElement => {
    const {home} = props;

    const [preview, _setPreview] = useState<PageKind | "">("");

    const setPreview = (p: PageKind) => () => _setPreview(p);
    const clearPreview = () => _setPreview("");

    return <React.Fragment>
        <div className="menu">
            <PageButton to={PageKind.RESUME} text={"Résumé"} home={home} offset={4}
                        setPreview={setPreview(PageKind.RESUME)}
                        clearPreview={clearPreview}
            />
            <PageButton to={PageKind.PROJECTS} text={"Projects"} home={home} offset={1}
                        setPreview={setPreview(PageKind.PROJECTS)}
                        clearPreview={clearPreview}
            />
            <PageButton to={PageKind.CONTACT} text={"Contact"} home={home} offset={3}
                        setPreview={setPreview(PageKind.CONTACT)}
                        clearPreview={clearPreview}
            />
            <PageButton to={PageKind.OTHER} text={"Other"} home={home} offset={0}
                        setPreview={setPreview(PageKind.OTHER)}
                        clearPreview={clearPreview}
            />
            <HomeButton home={home} setPreview={setPreview(PageKind.HOME)} clearPreview={clearPreview}/>
        </div>
        <Preview page={preview} home={home} />
    </React.Fragment>
};


interface MenuProps {
    home: boolean;
}

export {Menu};
export type {MenuProps};

