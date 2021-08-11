import {Entry} from "./Entries";
import {ReactElement} from "react";
import {clickLink} from "../../../util/Util";
import {ProjectPicture} from "./ProjectPicture";

const ProjectEntry = (props: ProjectEntryProps): ReactElement => {
    const {entry} = props;
    const {name, description, technologies, start, end, link, pictures} = entry;
    return <div className="entry">
        <span className="name">{name}</span>
        <div className="entry-details">
            <div className="left">
                <span className="technologies">{technologies.join(", ")}</span>
                <span className="date">{`${start}-${end}`}</span>
                {link ? <a href={link} onClick={clickLink(link)}>Visit</a> : ""}
            </div>
            <span className="description">{description}</span>
        </div>
        {pictures.map(link => <ProjectPicture link={link}/>)}
    </div>;
}; // TODO instead use a button that has the "external link" logo

interface ProjectEntryProps {
    entry: Entry;
}

export {ProjectEntry};
export type {ProjectEntryProps};
