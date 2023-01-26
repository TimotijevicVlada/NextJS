import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../actionTypes";


export const getQuizQuestions = () => async (dispatch: Dispatch) => {
    dispatch({ type: ActionType.GET_QUESTIONS_LOADING, payload: true });
    try {
        const { data } = await axios.get("https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple");
        dispatch({ type: ActionType.GET_QUESTIONS, payload: data.results });
    } catch (error) {
        dispatch({ type: ActionType.GET_QUESTIONS_ERROR });
    } finally {
        dispatch({ type: ActionType.GET_QUESTIONS_LOADING, payload: false });
    }
}