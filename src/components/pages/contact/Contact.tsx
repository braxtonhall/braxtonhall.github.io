import React from "react";
import {PageKind, PageProps} from "../Page";
import {IconButton} from "../../IconButton";

const Contact = (props: ContactProps) => {
    const {page} = props;
    const visible = page === PageKind.CONTACT;
    const className = visible ? "opaque" : "transparent no-select";

    return <React.Fragment>
        <div className="contact-palette">
            <IconButton name="Email"
                        link="mailto:braxtonhall@alumni.ubc.ca"
                        icon="gmail.png"
                        visible={visible}
                        offset={1}
            />
            <IconButton name="GitHub"
                        link="https://github.com/braxtonhall/"
                        icon="github.png"
                        visible={visible}
                        offset={0}
            />
            <IconButton name="LinkedIn"
                        link="https://www.linkedin.com/in/braxton-hall-b49718170/"
                        icon="linkedin.png"
                        visible={visible}
                        offset={2}
            />
        </div>
        <p className="contact-text-block">
            <span className={`contact-text one ${className}`}>That's me to the right if you're trying to spot me in person!<br/><br/></span>
            <span className={`contact-text two ${className}`}>Feel free to send me a message about anything,</span>
            <span className={`contact-text three ${className}`}>whether it be work inquiries or a "Hello!"</span>
            <span className={`contact-text four ${className}`}>using the usual links to the left.</span>
        </p>
        <Me visible={visible}/>
    </React.Fragment>;
};

const Me = (props: { visible: boolean }) => {
    const {visible} = props;
    const left = visible ? "65vw" : "110vw";
    const className = visible ? "opaque" : "transparent no-select no-touch";
    return <div
        className={`hong-kong fixed-transition ${className}`}
        style={{backgroundImage: "url(/img/hongkong2018.jpg)", left}}
    />;
}

interface ContactProps extends PageProps {
}

export {Contact};
export type {ContactProps};
