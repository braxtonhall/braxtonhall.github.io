import React, {ReactElement, useState} from "react";
import {randomTransition} from "../util/Util";
import {SquareButton} from "./SquareButton";

const ContactButton = (props: ContactButtonProps): ReactElement => {
    const {name, link, icon, visible, offset, download} = props;
    const [hover, setHover] = useState(false);

    const right = (offset + (visible ? 0 : 38)) + "vw";
    const transition = randomTransition(700, 800);
    const backgroundImage = `url(/icon/${icon})`;

    return <div className="page-button-track">
        <div className="contact-button-position" style={{right, transition}}>
            <div className="page-button-centerer">
                <a href={link} target="_blank" rel="noreferrer" download={download}>
                    <SquareButton className="contact-button"
                            style={{backgroundImage}}
                            onMouseLeave={() => setHover(false)}
                            onMouseEnter={() => setHover(true)}
                    />
                </a>
            </div>
            <ContactButtonPreview name={name} visible={hover && visible}/>
        </div>
    </div>;
};

const ContactButtonPreview = (props: ContactButtonPreviewProps) => {
    const {name, visible} = props;
    const visibleClass = visible ? "visible" : "";
    return <span className={`contact-button-preview ${visibleClass}`}>{name}</span>
};

interface ContactButtonProps {
    name: string;
    link: string;
    icon: string;
    visible: boolean;
    offset: number;
    download?: string;
}

interface ContactButtonPreviewProps {
    visible: boolean;
    name: string;
}

export {ContactButton};
export type {ContactButtonProps};
