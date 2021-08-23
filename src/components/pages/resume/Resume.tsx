import React, {ReactElement, useState} from "react";
import {PageKind, PageProps} from "../Page";
import {Document, Page, pdfjs} from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = (props: ResumeProps): ReactElement => {
    const {page} = props;
    const visible = page === PageKind.RESUME;
    const containerClassName = visible ? "" : "hidden-scrolling no-touch";
    return <div className={`resume-container embedded-scrolling ${containerClassName}`}>
        <div className="resume-content">
            <ResumePDF visible={visible}/>
        </div>
    </div>;
};

const ResumePDF = (props: { visible: boolean }): ReactElement => {
    const [loaded, setLoaded] = useState(false);
    const {visible} = props;

    const visibilityClass = (loaded && visible) ? "opaque" : "transparent no-touch no-select";

    return <React.Fragment>
        {(visible || loaded) ?
            <Document className={`resume-pdf fixed-transition ${visibilityClass}`} file="/resume.pdf"
                      onLoadSuccess={() => setLoaded(true)}>
                <Page pageNumber={1}/>
            </Document> : ""}
    </React.Fragment>;
};

interface ResumeProps extends PageProps {
}

export {Resume};
export type {ResumeProps};
