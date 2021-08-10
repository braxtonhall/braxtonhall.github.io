import React from "react";
import {PageProps} from "../Page";
import {PageKind} from "../../../Types";
import {ContactButton} from "./ContactButton";

const Contact = (props: ContactProps) => {
    const {page} = props;
    const visible = page === PageKind.CONTACT;


    return <React.Fragment>
        <div className="contact-palette">
            <ContactButton name="Email"
                           link="mailto:braxtonhall@alumni.ubc.ca"
                           icon="gmail.png"
                           visible={visible}
                           offset={1}
            />
            <ContactButton name="GitHub"
                           link="https://github.com/braxtonhall/"
                           icon="github.png"
                           visible={visible}
                           offset={0}
            />
            <ContactButton name="LinkedIn"
                           link="https://www.linkedin.com/in/braxton-hall-b49718170/"
                           icon="linkedin.png"
                           visible={visible}
                           offset={2}
            />
        </div>
        <Me visible={visible}/>
    </React.Fragment>;
};

const Me = (props: { visible: boolean }) => {
    const {visible} = props;
    const right = visible ? "15vw" : "-17vw";
    return <div
        className="hong-kong fixed-transition"
        style={{backgroundImage: "url(/img/hongkong2018.jpg)", right}}
    />;
}

interface ContactProps extends PageProps {
}

export {Contact};
export type {ContactProps};
