enum PageKind {
    HOME = "/",
    RESUME = "/resume",
    PROJECTS = "/projects",
    CONTACT = "/contact",
    OTHER = "/other",
    NOT_FOUND = "/404",
}

interface PageProps {
    page: PageKind;
}

export {PageKind};
export type {PageProps};
