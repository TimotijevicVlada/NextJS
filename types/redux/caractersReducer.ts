import { ActionType } from "@/redux/actionTypes";
import { Info, Caracter } from "../components/caracters";
export interface CaracterItemProps {
    caracter: Caracter;
}
export interface CaracterProps {
    info: Info | null;
    results: Caracter[];
    singleCaracter: Caracter | null;
    loading: boolean;
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
    getSingleCaracterLoadingProps;