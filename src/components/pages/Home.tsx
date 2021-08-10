import {ReactElement, useEffect, useRef} from "react";
import {PageProps} from "./Page";
import {PageKind} from "../../Types";
import {randomInt} from "../../util/Util";

const Home = (props: HomeProps): ReactElement => {
    const {page} = props;
    const text = useRef(textOptions[0]);

    const home = page === PageKind.HOME;
    const className = home ? "opaque" : "transparent no-select";

    useEffect(() => {
        if (page !== PageKind.HOME) {
            text.current = selectText();
        }
    });

    return <p className="home-text-block">
        <span className={`home-text-one ${className}`}>Hi. I'm Braxton.</span>
        <span className={`home-text-two ${className}`}>{text.current}</span>
    </p>;
};

interface HomeProps extends PageProps {}

const textOptions = [
    "I like programming, music, and homework.",
    "Let's put our Minecraft beds together 😳",
    "I go by Q-Tip in Super Smash Bros. Melee.",
    "I like Björk. I also like Animal Collective.",
    "This was my first website. I hope you like it.",
    "Thanks for forgiving mobile view while I learn.",
    // "Please ensure your sound is enabled.",
    // "Sound has not yet been properly implemented.",
    "If you see a bug, can you please open an issue?",
];

const selectText = () => textOptions[randomInt(0, textOptions.length)];

export {Home};
export type {HomeProps};
