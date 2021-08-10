import {ReactElement} from "react";

const ContactButton = (props: ContactButtonProps): ReactElement => <div/>;

interface ContactButtonProps {
    name: string;
    link: string;
    icon: string;
    visible: boolean;
}

export {ContactButton};
export type {ContactButtonProps};
