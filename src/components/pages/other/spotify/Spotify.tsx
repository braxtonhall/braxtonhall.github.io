import React, {ReactElement, useState} from "react";
import {SubPageKind, SubPageProps} from "../SubPage";
import {PLAYLISTS} from "./Playlists";
import {SpotifyPlaylist} from "./SpotifyPlaylist";
import {SpotifyPlaylistCopy} from "./SpotifyPlaylistCopy";

const Spotify = (props: SpotifyProps): ReactElement => {
    const [playlistIndex, setPlaylistIndex] = useState<number | null>(null);
    const {page} = props;
    const visible = page === SubPageKind.SPOTIFY;
    return <div className="spotify-container">
        <SpotifyPalette images={PLAYLISTS.map(p => p.imageLink)} onClick={setPlaylistIndex} visible={visible}/>
        {PLAYLISTS.map((p, i) =>
            <React.Fragment>
                <SpotifyPlaylist className="playlist" visible={visible && playlistIndex === i} playlistId={p.playlistId}
                                 title={p.playlistId}/>
                <SpotifyPlaylistCopy visible={visible && playlistIndex === i} text={p.description}/>
            </React.Fragment>)}
    </div>;
};

const SpotifyPalette = (props: { images: string[], onClick: (index: number) => void, visible: boolean }) => {
    const {images, onClick, visible} = props;
    const className = visible ? "opaque" : "transparent no-select";
    const containerClassName = visible ? "" : "hidden-scrolling no-touch";
    return <div className={`spotify-palette-container embedded-scrolling ${containerClassName}`}>
        <div className={`spotify-palette fixed-transition ${className}`}>
            {images.map((image, index) => <SpotifyImage image={image} onClick={() => onClick(index)}/>)}
        </div>
    </div>;
};

const SpotifyImage = (props: { image: string, onClick: () => void }): ReactElement => {
    const [loaded, setLoaded] = useState(false);
    const className = loaded ? "opaque" : "transparent";
    return <div className="spotify-img-container">
        <img className={`spotify-img ${className}`} alt={props.image} src={props.image}
             onClick={props.onClick} onLoad={() => setLoaded(true)}/>
    </div>;
};

interface SpotifyProps extends SubPageProps {
}

export {Spotify};
export type {SpotifyProps};
