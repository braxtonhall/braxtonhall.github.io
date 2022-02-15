import React, {ReactElement} from "react";
import {PageKind, PageProps} from "../Page";
import {Spotify} from "./spotify/Spotify";
import {SubPageKind} from "./SubPage";
import {Minecraft} from "./Minecraft";

const Other = (props: OtherProps): ReactElement => {
    const {page, path} = props;
    const pageOrSubPage = page === PageKind.OTHER ? selectSubPage(path) : page;
    return <React.Fragment>
        <Spotify page={pageOrSubPage}/>
        <Minecraft page={pageOrSubPage}/>
    </React.Fragment>;
};

// TODO maybe the page comes from localStorage?
const selectSubPage = (path: string): SubPageKind => {
    const subPath = path.replace(PageKind.OTHER, "");
    return Object.values(SubPageKind).find(page => page === subPath) ??
        SubPageKind.SPOTIFY;
};

interface OtherProps extends PageProps {
    path: string;
}

export {Other};
export type {OtherProps};
