export interface AppTechProps {
    children: React.ReactNode,
    name: string;
}

export interface AppDescriptionProps {
    item: {
        subject: string;
        route: string;
        description: string;
    }
}