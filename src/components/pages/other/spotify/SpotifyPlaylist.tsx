import React, {ReactElement, useState} from "react";

const SpotifyPlaylist = (props: SpotifyPlaylistProps) => {
    const {visible, children, playlistId, title, className} = props;
    const [loaded, setLoaded] = useState(false);
    const visibilityClass = (loaded && visible) ? "opaque" : "transparent no-touch no-select";
    return <React.Fragment>
        {(visible || loaded) ?
            <React.Fragment>
                <div className={`center ${visibilityClass} ${className ?? ""}`}>
                    <iframe title={title}
                            src={`https://open.spotify.com/embed/playlist/${playlistId}`}
                            width="100%" height="80"
                            frameBorder="0"
                            allowTransparency={true}
                            allow="encrypted-media"
                            onLoad={() => setLoaded(true)}
                    />
                </div>
                {children}
            </React.Fragment> :
            ""}
    </React.Fragment>;
};

interface SpotifyPlaylistProps {
    visible: boolean;
    playlistId: string;
    title: string;
    children?: ReactElement;
    className?: string;
}

export {SpotifyPlaylist};
export type {SpotifyPlaylistProps};
