import React, {ReactElement, useState} from "react";
import {PageKind, PageProps} from "../Page";
import {Document, Page, pdfjs} from "react-pdf";
import {IconButton} from "../../IconButton";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = (props: ResumeProps): ReactElement => {
    const {page} = props;
    const visible = page === PageKind.RESUME;
    const containerClassName = visible ? "" : "hidden-scrolling no-touch";
    return <React.Fragment>
        <div className={`resume-container embedded-scrolling ${containerClassName}`}>
            <div className="resume-content">
                <ResumePDF visible={visible}/>
            </div>
        </div>
        <div className="download-palette">
            <IconButton name="PDF"
                        link="/resume.pdf"
                        icon="pdf.png"
                        visible={visible}
                        offset={0}
                        download="hallbraxton.pdf"
            />
            <IconButton name="DOCX"
                        link="/resume.docx"
                        icon="word.png"
                        visible={visible}
                        offset={1}
                        download="hallbraxton.docx"
            />
        </div>
    </React.Fragment>;
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
