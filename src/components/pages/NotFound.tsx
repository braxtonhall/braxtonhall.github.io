import React, {ReactElement} from "react";
import {PageKind, PageProps} from "./Page";
import {SpotifyPlaylist} from "./other/spotify/SpotifyPlaylist";

const NotFound = (props: NotFoundProps): ReactElement => {
    const visible = props.page === PageKind.NOT_FOUND;
    const className = visible ? "opaque" : "transparent no-touch no-select";
    return <SpotifyPlaylist className={"fixed-transition"} playlistId={"28Xl6doCEIVku4Cwl8HebN"}
                            title={"You Can't Be Here!"} visible={visible}>
        <div className={`four-oh-four fixed-transition ${className}`}><span>404</span></div>
    </SpotifyPlaylist>;
};

interface NotFoundProps extends PageProps {
}

export {NotFound};
