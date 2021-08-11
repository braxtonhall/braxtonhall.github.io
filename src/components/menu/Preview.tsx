import React, {ReactElement} from "react";
import {PageKind} from "../../Types";

const Preview = (props: PreviewProps): ReactElement =>
    <div className="preview-container no-select no-touch">
        <PreviewName {...props} target={PageKind.HOME} name={"Home"}/>
        <PreviewName {...props} target={PageKind.RESUME} name={"Résumé"}/>
        <PreviewName {...props} target={PageKind.PROJECTS} name={"Projects"}/>
        <PreviewName {...props} target={PageKind.CONTACT} name={"Contact"}/>
        <PreviewName {...props} target={PageKind.OTHER} name={"Other"}/>
    </div>;

const PreviewName = (props: PreviewNameProps): ReactElement => {
    const {page, home, target, name} = props;
    const visible = !home && (page === target);
    const className = visible ? "opaque" : "transparent";
    return <span className={`preview-name ${className}`}>{name}</span>
}

interface PreviewNameProps extends PreviewProps {
    target: PageKind;
    name: string;
}

interface PreviewProps {
    page: PageKind | "";
    home: boolean;
}

export {Preview};
export type {PreviewProps};
