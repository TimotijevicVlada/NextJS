import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../actionTypes";

export const getQuizQuestions = (category: string | string[], difficulty: string | string[]) => async (dispatch: Dispatch) => {
    dispatch({ type: ActionType.GET_QUESTIONS_LOADING, payload: true });
    try {
        const { data } = await axios.get(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`);
        dispatch({ type: ActionType.GET_QUESTIONS, payload: data.results });
    } catch (error) {
        dispatch({ type: ActionType.GET_QUESTIONS_ERROR });
    } finally {
        dispatch({ type: ActionType.GET_QUESTIONS_LOADING, payload: false });
    }
}