import axios from "axios";
import { ActionType } from "../actionTypes";
import { Dispatch } from "redux";
import { CaractersActionsProps } from "@/types/redux/caractersReducer";

export const getCaracters = () => async (dispatch: Dispatch<CaractersActionsProps>) => {
    try {
        const response = await axios.get("https://rickandmortyapi.com/api/character");
        dispatch({ type: ActionType.GET_CARACTERS, payload: response.data });
    } catch (error) {
        dispatch({ type: ActionType.GET_CARACTERS_ERROR })
    }
}

export const getCaractersPagination = (page: number) => (dispatch: any) => {
    dispatch({});
}