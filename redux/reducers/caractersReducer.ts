import { ActionType } from "../actionTypes";
import { CaractersActionsProps, CaracterProps } from "@/types/redux/caractersReducer";

const INITIAL_STATE = {
    info: null,
    results: [],
    allCaractersLoading: false,
    isError: false,
    caractersPaginationLoader: false,
    isPaginationError: false,
    singleCaracter: null,
    singleCaracterloading: false
}

export const caractersReducer = (state: CaracterProps = INITIAL_STATE, action: CaractersActionsProps) => {
    switch (action.type) {
        case ActionType.GET_CARACTERS:
            return {
                ...state,
                info: action.payload.info,
                results: action.payload.results,
                isError: false
            }
        case ActionType.GET_CARACTERS_LOADING:
            return {
                ...state,
                allCaractersLoading: action.payload
            }
        case ActionType.GET_CARACTERS_ERROR:
            return {
                ...state,
                isError: action.payload
            }
        case ActionType.GET_CARACTERS_PAGINATION:
            const newResults = state.results.concat(action.payload.results);
            return {
                ...state,
                info: action.payload.info,
                results: newResults,
                isPaginationError: false
            }
        case ActionType.GET_CARACTERS_PAGINATION_LOADING:
            return {
                ...state,
                caractersPaginationLoader: action.payload
            }
        case ActionType.GET_CARACTERS_PAGINATION_ERROR:
            return {
                ...state,
                isPaginationError: action.payload
            }
        case ActionType.GET_SINGLE_CARACTER:
            return {
                ...state,
                singleCaracter: action.payload
            }
        case ActionType.GET_SINGLE_CARACTER_LOADING:
            return {
                ...state,
                singleCaracterloading: action.payload
            }
        default:
            return state;
    }
}