import {PageProps} from "../Page";
import {ReactElement} from "react";
import {ENTRIES} from "./Entries";
import {ProjectEntry} from "./ProjectEntry";
import {PageKind} from "../../../Types";

const Projects = (props: ProjectsProps): ReactElement => {
    const {page} = props;
    const visible = page === PageKind.PROJECTS;
    const className = visible ? "opaque" : "transparent no-touch no-select";
    const containerClassName = visible ? "" : "hidden-scrolling";
    return <div className={`projects-container embedded-scrolling ${containerClassName}`}>
        <div className={`projects fixed-transition ${className}`}>
            {ENTRIES.map((entry) => <ProjectEntry entry={entry}/>)}
        </div>
    </div>;
}

interface ProjectsProps extends PageProps {
}

export {Projects};
export type {ProjectsProps};
