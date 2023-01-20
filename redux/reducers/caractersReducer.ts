import { ActionType } from "../actionTypes";
import { CaractersActionsProps, CaracterProps } from "@/types/redux/caractersReducer";

const INITIAL_STATE = {
    info: null,
    results: [],
    singleCaracter: null,
    loading: false  //singleCaracter loader
}

export const caractersReducer = (state: CaracterProps = INITIAL_STATE, action: CaractersActionsProps) => {
    switch (action.type) {
        case ActionType.GET_CARACTERS:
            return {
                ...state,
                info: action.payload.info,
                results: action.payload.results
            }
        case ActionType.GET_CARACTERS_PAGINATION:
            const newResults = state.results.concat(action.payload.results);
            return {
                ...state,
                info: action.payload.info,
                results: newResults
            }
        case ActionType.GET_SINGLE_CARACTER:
            return {
                ...state,
                singleCaracter: action.payload
            }
        case ActionType.GET_SINGLE_CARACTER_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state;
    }
}