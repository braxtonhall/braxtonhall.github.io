import React, {ReactElement, useState} from "react";
import {PageProps} from "./Page";
import {PageKind} from "../../Types";

const NotFound = (props: NotFoundProps): ReactElement => {
    const {page} = props;
    const [loaded, setLoaded] = useState(false);
    const visible = page === PageKind.NOT_FOUND;
    const className = (loaded && visible) ? "opaque" : "transparent no-touch no-select";
    return <React.Fragment>
        {(visible || loaded) ?
            <React.Fragment>
                <div className={`center fixed-transition ${className}`}>
                    <iframe title="Boreal Kiss Pt.1"
                            src="https://open.spotify.com/embed/playlist/28Xl6doCEIVku4Cwl8HebN"
                            width="100%" height="80"
                            frameBorder="0"
                            allowTransparency={true}
                            allow="encrypted-media"
                            onLoad={() => setLoaded(true)}
                    />
                </div>
                <div className={`four-oh-four fixed-transition ${className}`}><span>404</span></div>
            </React.Fragment> :
            ""}
    </React.Fragment>;
};

interface NotFoundProps extends PageProps {
}

export {NotFound};
