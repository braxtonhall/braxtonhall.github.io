interface Entry {
    name: string;
    start: string;
    end: string;
    technologies: string[];
    description: string;
    pictures: string[];
    link?: string;
}

const NthPass: Entry = {
    name: "NthPass",
    start: "Oct 2020",
    end: "Dec 2020",
    technologies: ["TypeScript", "Racket", "React.js", "Express"],
    description: "NthPass is an interactive visualization of the implicit graph created by a multi-pass compiler. Here I built the API and Frontend of the application.",
    pictures: [],
    link: "https://se.cs.ubc.ca/compiler-viz",
};

const LivelyRecorder: Entry = {
    description: "Lively Recorder for Confluence Cloud is a video recording and embedding tool of which I was the sole owner. It went on to win the second place $43,000 prize at Atlassian's Codegeist 2021.",
    end: "Jul 2020",
    name: "Lively Recorder",
    pictures: [],
    start: "May 2020",
    technologies: ["Java", "TypeScript", "AWS"],
    link: "https://devpost.com/software/lively-recorder-for-confluence-audio-video-screen",
};

const Surface: Entry = {
    description: "Surface is a endless platforming video game, where I built the particle, collision and state transition systems of the underlying game engine.",
    end: "Dec 2019",
    name: "Surface",
    pictures: [],
    start: "Sep 2019",
    technologies: ["C++", "OpenGL"],
};

const CodeShovel: Entry = {
    name: "CodeShovel",
    description: "CodeShovel is a syntactically aware version control analysis tool written in Java. During my time with UBC's Software Practices Lab, I extended it to analyze Python, TypeScript and Ruby, and contributed to its paper published in SIGCSE 2021.",
    start: "Aug 2019",
    end: "Nov 2019",
    technologies: ["Java", "TypeScript", "Python", "Ruby"],
    pictures: [],
    link: "https://se.cs.ubc.ca/CodeShovel",
};

const Fermata: Entry = {
    name: "Fermata",
    description: "Fermata is a fun program that can turn a git history into an original composition, based on the commit habits of the contributors. I was lucky to collaborate with musicians to refine its musicality",
    start: "Oct 2018",
    end: "Nov 2018",
    technologies: ["Java", "JavaScript", "git", "jMusic"],
    pictures: [],
    link: "https://youtu.be/zDikgBV_XS4",
};

const ENTRIES: Entry[] = [
    NthPass,
    LivelyRecorder,
    Surface,
    CodeShovel,
    Fermata,
];

export {ENTRIES};
export type {Entry};
