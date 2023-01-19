import { ActionType } from "../actionTypes";
import { CaractersActionsProps, CaracterProps } from "@/types/redux/caractersReducer";

const INITIAL_STATE = {
    info: null,
    results: []
}

export const caractersReducer = (state: CaracterProps = INITIAL_STATE, action: CaractersActionsProps) => {
    switch (action.type) {
        case ActionType.GET_CARACTERS:
            return {
                ...state,
                info: action.payload.info,
                results: action.payload.results
            }

        default:
            return state;
    }
}