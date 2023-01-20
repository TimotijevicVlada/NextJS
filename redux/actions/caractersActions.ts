import axios from "axios";
import { Route } from "api/api";
import { Dispatch } from "redux";
import { ActionType } from "../actionTypes";
import { CaractersActionsProps } from "@/types/redux/caractersReducer";

export const getCaractersAction = () => async (dispatch: Dispatch<CaractersActionsProps>) => {
    try {
        const response = await axios.get(Route.getCaracters);
        dispatch({ type: ActionType.GET_CARACTERS, payload: response.data });
    } catch (error) {
        dispatch({ type: ActionType.GET_CARACTERS_ERROR })
    } finally {

    }
}

export const getCaractersPaginationAction = (page: number) => async (dispatch: Dispatch<CaractersActionsProps>) => {
    try {
        const response = await axios.get(Route.getCaracters, { params: { page: page } });
        dispatch({ type: ActionType.GET_CARACTERS_PAGINATION, payload: response.data });
    } catch (error) {
        dispatch({ type: ActionType.GET_CARACTERS_PAGINATION_ERROR });
    } finally {

    }
}

export const getSingleCaracterAction = (id: string | string[]) => async (dispatch: Dispatch<CaractersActionsProps>) => {
    dispatch({ type: ActionType.GET_SINGLE_CARACTER_LOADING, payload: true })
    try {
        const response = await axios.get(`${Route.getCaracters}/${id}`);
        dispatch({ type: ActionType.GET_SINGLE_CARACTER, payload: response.data });
    } catch (error) {
        dispatch({ type: ActionType.GET_SINGLE_CARACTER_ERROR });
    } finally {
        dispatch({ type: ActionType.GET_SINGLE_CARACTER_LOADING, payload: false })
    }
}