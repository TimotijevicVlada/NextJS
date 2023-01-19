import { ActionType } from "@/redux/actionTypes";

interface Info {
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

export interface CaracterItemProps {
    caracter: Caracter;
}

//REDUX
export interface CaracterProps {
    info: Info | null;
    results: Caracter[];
}

interface GetCaractersActionProps {
    type: ActionType.GET_CARACTERS;
    payload: CaracterProps;
}

interface GetCaractersErrorActionProps {
    type: ActionType.GET_CARACTERS_ERROR;
}

interface GetCaractersPaginationActionProps {
    type: ActionType.GET_CARACTERS_PAGINATION;
    payload: CaracterProps;
}

interface GetCaractersPaginationErrorActionProps {
    type: ActionType.GET_CARACTERS_PAGINATION_ERROR;
}

export type CaractersActionsProps = GetCaractersActionProps | GetCaractersErrorActionProps | GetCaractersPaginationActionProps | GetCaractersPaginationErrorActionProps;