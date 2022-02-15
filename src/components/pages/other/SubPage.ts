import {PageKind} from "../Page";

enum SubPageKind {
    SPOTIFY = "/spotify",
    MINECRAFT = "/minecraft"
}

interface SubPageProps {
    page: PageKind | SubPageKind;
}

export {SubPageKind}
export type {SubPageProps};
