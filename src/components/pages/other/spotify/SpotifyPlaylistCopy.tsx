import {ReactElement} from "react";

const SpotifyPlaylistCopy = (props: {visible: boolean, text: string}): ReactElement => {
    const {visible, text} = props;
    const className = visible ? "opaque" : "transparent";
    return <div className="spotify-text-container no-touch">
        <span className={`spotify-text ${className}`}>{text}</span>
    </div>
};

export {SpotifyPlaylistCopy};
