import {PageKind} from "../Page";

enum SubPageKind {
    SPOTIFY = "/spotify",
}

interface SubPageProps {
    page: PageKind | SubPageKind;
}

export {SubPageKind}
export type {SubPageProps};
