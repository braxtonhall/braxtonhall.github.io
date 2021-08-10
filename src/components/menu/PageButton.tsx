import {Link} from "react-router-dom";
import React, {ReactElement} from "react";
import {randomInt} from "../../util/Util";
import {PageKind} from "../../Types";

const PageButton = (props: PageButtonProps): ReactElement => {
    const {to, text, leftOffset, home, setPreview, clearPreview} = props;
    const left = ((2 * leftOffset) + (home ? 0 : 38)) + "vw";
    const time: number = randomInt(700, 800);
    const transition = time + "ms cubic-bezier(0.57,0.35,0.54,1.15)"
    return <div className="page-button-track">
        <div className="page-button-position" style={{left, transition}}>
            <div className="page-button-centerer">
                <Link to={to} style={{color: "inherit"}}>
                    <button className="page-button no-select center"
                            onMouseEnter={setPreview}
                            onMouseLeave={clearPreview}
                    >
                        <span className={home ? "home" : ""}>
                            {text}
                        </span>
                    </button>
                </Link>
            </div>
        </div>
    </div>;
};

const HomeButton = (props: HomeButtonProps) => {
    const {home, setPreview, clearPreview} = props;

    const left = home ? "110%" : "36vw";

    return <div className="page-button-track">
        <div className="home-button-position fixed-transition" style={{left}}>
            <div className="page-button-centerer">
                <Link to={PageKind.HOME} style={{color: "inherit"}}>
                    <button className="home-button center"
                            onMouseEnter={setPreview}
                            onMouseLeave={clearPreview}
                    />
                </Link>
            </div>
        </div>
    </div>;
};

interface PageButtonProps extends HomeButtonProps {
    to: string;
    text: string;
    leftOffset: number;
}

interface HomeButtonProps {
    home: boolean;
    setPreview: () => void;
    clearPreview: () => void;
}

export {PageButton, HomeButton};
export type {PageButtonProps, HomeButtonProps};
