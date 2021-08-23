import {PageKind, PageProps} from "../Page";
import {ReactElement} from "react";
import {ENTRIES} from "./Entries";
import {ProjectEntry} from "./ProjectEntry";

const Projects = (props: ProjectsProps): ReactElement => {
    const {page} = props;
    const visible = page === PageKind.PROJECTS;
    const className = visible ? "opaque" : "transparent no-select";
    const containerClassName = visible ? "" : "hidden-scrolling no-touch";
    return <div className={`projects-container embedded-scrolling ${containerClassName}`}>
        <div className={`projects fixed-transition ${className}`}>
            {ENTRIES.map((entry, i) => <ProjectEntry entry={entry} key={i}/>)}
        </div>
    </div>;
}

interface ProjectsProps extends PageProps {
}

export {Projects};
export type {ProjectsProps};
