export interface Service {
    id: number;
    title: string;
    image: string;
    description: string;
    backTitle: string;
    moreInfo: string;
    }
    
    export const servicesData: Service[] = [
    {
    id: 1,
    title: "Front-end Development",
    image: "/imgs/frontend.png",
    description: "HTML5, CSS3, React, Vue",
    backTitle: "Details",
    moreInfo: "Modern UI, animations and clean UX."
    },
    {
    id: 2,
    title: "Back-end Development",
    image: "/imgs/coding.png",
    description: "Node, TypeScript, Python",
    backTitle: "Details",
    moreInfo: "APIs, databases and scalable systems."
    },
    {
    id: 3,
    title: "Responsive Design",
    image: "/imgs/responsive.png",
    description: "Perfect on every device",
    backTitle: "Details",
    moreInfo: "Mobile-first and cross-browser layouts."
    },
    {
    id: 4,
    title: "UI / UX Design",
    image: "/imgs/UXUI.png",
    description: "Wireframes, flows, prototypes",
    backTitle: "Details",
    moreInfo: "Human-centered usability and testing."
    }
];