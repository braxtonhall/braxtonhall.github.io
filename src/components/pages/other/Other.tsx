import React, {ReactElement} from "react";
import {PageKind, PageProps} from "../Page";
import {Spotify} from "./spotify/Spotify";
import {SubPageKind} from "./SubPage";

const Other = (props: OtherProps): ReactElement => {
    const {page} = props;
    const pageOrSubPage = page === PageKind.OTHER ? selectSubPage() : page;
    return <React.Fragment>
        <Spotify page={pageOrSubPage}/>
    </React.Fragment>;
};

// TODO maybe the page comes from localStorage?
const selectSubPage = () =>
    SubPageKind.SPOTIFY;

interface OtherProps extends PageProps {}

export {Other};
export type {OtherProps};
