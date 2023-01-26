import axios from "axios";
import { Dispatch } from "redux";


export const getQuizQuestions = () => async (dispatch: Dispatch) => {
    const response = await axios.get("https://opentdb.com/api.php?amount=10&category=21&difficulty=easy");
    console.log("RESPONSE", response.data);
}