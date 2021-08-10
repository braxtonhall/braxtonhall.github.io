import React, {ReactElement} from "react";
import {Page} from "../Types";

const Preview = (props: PreviewProps): ReactElement => {
    // TODO one for each type, fade in and out, slide off when on home screen :)
    const {page, home} = props;
    return <div>
        <h1>{page}</h1>
    </div>
};

interface PreviewProps {
    page: Page | "";
    home: boolean;
}

export {Preview};
export type {PreviewProps};
