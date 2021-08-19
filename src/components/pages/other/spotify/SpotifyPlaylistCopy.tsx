import {ReactElement} from "react";

const SpotifyPlaylistCopy = (props: {visible: boolean, text: string}): ReactElement => {
    const {visible, text} = props;
    const className = visible ? "opaque" : "transparent";
    return <div className={`spotify-text no-touch ${className}`}>
        <span>{text}</span>
    </div>
};

export {SpotifyPlaylistCopy};
