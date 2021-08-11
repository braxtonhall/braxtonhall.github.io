import {ReactElement} from "react";

const ProjectPicture = (props: {link: string}): ReactElement => {
    return <img className="project-picture" alt="project-pic" src={props.link}/>;
};

export {ProjectPicture};
