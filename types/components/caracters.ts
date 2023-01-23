export interface Info {
    count: number;
    next: string;
    pages: number;
    prev: null | string;
}

export interface Caracter {
    created: string;
    episode: string[];
    gender: string;
    id: number;
    image: string;
    location: {
        name: string;
        url: string;
    }
    name: string;
    origin: {
        name: string;
        url: string;
    }
    species: string;
    status: string;
    type: string;
    url: string;
}

export interface CaractersHeaderProps {
    info: Info | null;
    setSearch: (filter: string) => void;
    setPage: (page: number) => void;
    status: string;
    setStatus: (status: string) => void;
    gender: string;
    setGender: (gender: string) => void;
}

export interface SingleCaracterItemProps {
    singleCaracter: Caracter;
}