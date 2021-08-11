import {Link} from "react-router-dom";
import React, {ReactElement} from "react";
import {randomTransition} from "../../util/Util";
import {PageKind} from "../../Types";
import {SquareButton} from "../SquareButton";

const PageButton = (props: PageButtonProps): ReactElement => {
    const {to, text, offset, home, setPreview, clearPreview} = props;
    const left = ((2 * offset) + (home ? 0 : 38)) + "vw";
    const transition = randomTransition(700, 800);
    return <div className="page-button-track">
        <div className="page-button-position" style={{left, transition}}>
            <div className="page-button-centerer">
                <Link to={to}>
                    <button className="page-button no-select center"
                            onMouseEnter={setPreview}
                            onMouseLeave={clearPreview}
                            onClick={clearPreview}
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
                <Link to={PageKind.HOME}>
                    <SquareButton className="home-button"
                                  onMouseEnter={setPreview}
                                  onMouseLeave={clearPreview}
                                  onClick={clearPreview}
                    />
                </Link>
            </div>
        </div>
    </div>;
};

interface PageButtonProps extends HomeButtonProps {
    to: string;
    text: string;
    offset: number;
}

interface HomeButtonProps {
    home: boolean;
    setPreview: () => void;
    clearPreview: () => void;
}

export {PageButton, HomeButton};
export type {PageButtonProps, HomeButtonProps};
