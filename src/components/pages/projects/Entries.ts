interface Entry {
    name: string;
    start: string;
    end: string;
    technologies: string[];
    description: string;
    pictures: string[];
    link?: string;
}

const CRDTree: Entry = {
    name: "CRDTree",
    start: "Oct 2021",
    end: "Dec 2021",
    technologies: ["TypeScript", "libp2p", "Express"],
    description: "CRDTree is a conflict-free replicated datatype implementation with support for complex datatypes and a git-like workflows. We also built designed and implemented a network protocol to go with it!",
    pictures: [],
    link: "https://github.com/Haotian-Yang/CRDTree",
};

const OfficeHours: Entry = {
    name: "The Efficacy of Online Office Hours",
    start: "Jun 2021",
    end: "Aug 2021",
    technologies: [],
    description: "During the COVID-19 pandemic, we transitioned to online office hours, facilitated by an online queue, which gave us unprecedented visibility into the goings on in office hours.",
    pictures: [],
    link: "https://dl.acm.org/doi/10.1145/3484272.3484966",
}

const NthPass: Entry = {
    name: "NthPass",
    start: "Oct 2020",
    end: "Dec 2020",
    technologies: ["TypeScript", "Racket", "React.js", "Express"],
    description: "NthPass is an interactive visualization of the implicit graph created by a multi-pass compiler. Here I built the API and Frontend of the application.",
    pictures: [
        "/img/compiler-viz/overview.png",
        // "/img/compiler-viz/detail.png",
    ],
    link: "https://se.cs.ubc.ca/compiler-viz",
};

const LivelyRecorder: Entry = {
    description: "Lively Recorder for Confluence Cloud is a video recording and embedding tool of which I was the sole owner. It went on to win the second place $43,000 prize at Atlassian's Codegeist 2021.",
    end: "Jul 2020",
    name: "Lively Recorder",
    pictures: [
        "/img/recorder/recorder.png",
    ],
    start: "May 2020",
    technologies: ["Java", "TypeScript", "AWS"],
    link: "https://devpost.com/software/lively-recorder-for-confluence-audio-video-screen",
};

const Surface: Entry = {
    description: "Surface is an endless platforming video game, where I built the particle, collision and state transition systems of the underlying game engine.",
    end: "Dec 2019",
    name: "Surface",
    pictures: [
        "/img/surface/shine.png",
    ],
    start: "Sep 2019",
    technologies: ["C++", "OpenGL"],
};

const CodeShovel: Entry = {
    name: "CodeShovel",
    description: "CodeShovel is a syntactically aware version control analysis tool written in Java. During my time with UBC's Software Practices Lab, I extended it to analyze Python, TypeScript and Ruby, and contributed to its paper published in SIGCSE 2021.",
    start: "Aug 2019",
    end: "Nov 2019",
    technologies: ["Java", "TypeScript", "Python", "Ruby"],
    pictures: [
        // "/img/codeshovel/welcome.png",
        "/img/codeshovel/changes.png",
    ],
    link: "https://se.cs.ubc.ca/CodeShovel",
};

const Fermata: Entry = {
    name: "Fermata",
    description: "Fermata is a fun program that can turn a git history into an original composition, based on the commit habits of the contributors. I was lucky to collaborate with musicians to refine its musicality.",
    start: "Oct 2018",
    end: "Nov 2018",
    technologies: ["Java", "JavaScript", "git", "jMusic"],
    pictures: [
        "/img/fermata/metroxe.png",
    ],
    link: "https://youtu.be/zDikgBV_XS4",
};

const ENTRIES: Entry[] = [
    CRDTree,
    NthPass,
    LivelyRecorder,
    Surface,
    CodeShovel,
    Fermata,
];

export {ENTRIES};
export type {Entry};
