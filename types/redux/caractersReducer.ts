import { ActionType } from "@/redux/actionTypes";
import { Info, Caracter } from "../components/caracters";
export interface CaracterItemProps {
    caracter: Caracter;
}
export interface CaracterProps {
    info: Info | null;
    results: Caracter[];
    allCaractersLoading: boolean;
    isError: boolean;
    caractersPaginationLoader: boolean;
    singleCaracter: Caracter | null;
    singleCaracterloading: boolean;
}

interface GetCaractersActionProps {
    type: ActionType.GET_CARACTERS;
    payload: CaracterProps;
}

interface GetCaractersErrorActionProps {
    type: ActionType.GET_CARACTERS_ERROR;
    payload: boolean;
}

interface GetCaractersLoadingProps {
    type: ActionType.GET_CARACTERS_LOADING;
    payload: boolean;
}

interface GetCaractersPaginationActionProps {
    type: ActionType.GET_CARACTERS_PAGINATION;
    payload: CaracterProps;
}

interface GetCaractersPaginationErrorActionProps {
    type: ActionType.GET_CARACTERS_PAGINATION_ERROR;
}

interface GetCaractersPaginationLoadingProps {
    type: ActionType.GET_CARACTERS_PAGINATION_LOADING;
    payload: boolean;
}

interface getSingleCaracterActionProps {
    type: ActionType.GET_SINGLE_CARACTER;
    payload: Caracter;
}

interface getSingleCaracterErrorActionProps {
    type: ActionType.GET_SINGLE_CARACTER_ERROR;
}

interface getSingleCaracterLoadingProps {
    type: ActionType.GET_SINGLE_CARACTER_LOADING;
    payload: boolean;
}

export type CaractersActionsProps =
    GetCaractersActionProps |
    GetCaractersErrorActionProps |
    GetCaractersPaginationActionProps |
    GetCaractersPaginationErrorActionProps |
    getSingleCaracterActionProps |
    getSingleCaracterErrorActionProps |
    getSingleCaracterLoadingProps |
    GetCaractersLoadingProps |
    GetCaractersPaginationLoadingProps;