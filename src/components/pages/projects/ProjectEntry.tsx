import {Entry} from "./Entries";
import {ReactElement} from "react";
import {clickLink} from "../../../util/Util";
import {ProjectPicture} from "./ProjectPicture";
import {SquareButton} from "../../SquareButton";

const ProjectEntry = (props: ProjectEntryProps): ReactElement => {
    const {entry} = props;
    const {name, description, technologies, start, end, link, pictures} = entry;
    const backgroundImage = "url(/icon/external.png)";
    return <div className="entry">
        <span className="name">{name}</span>
        <div className="entry-details">
            <div className="left">
                <span className="technologies">{technologies.join(", ")}</span>
                <span className="date">{`${start}-${end}`}</span>
                {link ?
                    <a href={link} onClick={clickLink(link)}>
                        <SquareButton className="visit-button" style={{backgroundImage}}/>
                    </a> :
                    ""}
            </div>
            <span className="description">{description}</span>
        </div>
        {pictures.map(link => <ProjectPicture link={link}/>)}
    </div>;
};

interface ProjectEntryProps {
    entry: Entry;
}

export {ProjectEntry};
export type {ProjectEntryProps};
