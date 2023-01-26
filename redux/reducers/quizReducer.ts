import { ActionType } from "../actionTypes";
import { QuizActionsProps } from "@/types/redux/quizReducer";
import { InitialStateProps } from "@/types/redux/quizReducer";

const INITIAL_STATE = {
    questions: [],
    isLoading: false
}

export const quizReducer = (state: InitialStateProps = INITIAL_STATE, action: QuizActionsProps) => {
    switch (action.type) {
        case ActionType.GET_QUESTIONS:
            const tempQue = action.payload.map(item => {
                const newItem = {
                    question: item.question,
                    difficulty: item.difficulty,
                    category: item.category,
                    correct_answer: item.correct_answer,
                    answers: [item.correct_answer, ...item.incorrect_answers].sort(() => Math.random() - 0.5)
                }
                return newItem;
            })
            return {
                ...state,
                questions: tempQue,
                isLoading: false
            }
        case ActionType.GET_QUESTIONS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state;
    }
}