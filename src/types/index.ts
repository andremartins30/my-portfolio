export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    featured?: boolean;
}

export interface Skill {
    name: string;
    icon: string;
    category: "frontend" | "backend" | "tools" | "outros";
}

export interface SocialLink {
    name: string;
    url: string;
    icon: string;
}
