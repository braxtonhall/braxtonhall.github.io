import React, {ReactElement, useState} from "react";
import {randomTransition} from "../../../util/Util";

const ContactButton = (props: ContactButtonProps): ReactElement => {
    const {name, link, icon, visible, offset} = props;
    const [hover, setHover] = useState(false);

    const right = (offset + (visible ? 0 : 38)) + "vw";
    const transition = randomTransition(700, 800);
    const backgroundImage = `url(/icon/${icon})`;

    return <div className="page-button-track">
        <div className="contact-button-position" style={{right, transition}}>
            <div className="page-button-centerer">
                <a href={link} onClick={clickLink(link)}>
                    <button className="contact-button center"
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

const clickLink = (link: string) => (event: React.MouseEvent) => {
    event.preventDefault();
    window.open(link, "_blank");
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
}

interface ContactButtonPreviewProps {
    visible: boolean;
    name: string;
}

export {ContactButton};
export type {ContactButtonProps};
