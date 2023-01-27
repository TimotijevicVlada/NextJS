import axios from "axios";
import { Route } from "@/api/api";
import { Dispatch } from "redux";
import { ActionType } from "../actionTypes";

export const getQuizQuestions = (category: string | string[], difficulty: string | string[]) => async (dispatch: Dispatch) => {
    dispatch({ type: ActionType.GET_QUESTIONS_LOADING, payload: true });
    try {
        const { data } = await axios.get(`${Route.getQuizQuestions}?amount=3&category=${category}&difficulty=${difficulty}&type=multiple`);
        dispatch({ type: ActionType.GET_QUESTIONS, payload: data.results });
    } catch (error) {
        dispatch({ type: ActionType.GET_QUESTIONS_ERROR });
    } finally {
        dispatch({ type: ActionType.GET_QUESTIONS_LOADING, payload: false });
    }
}