import { ActionType } from "@/redux/actionTypes";

export interface QuestionsProps {
    answers: string[];
    category: string;
    correct_answer: string;
    difficulty: string;
    question: string;
}

export interface InitialStateProps {
    questions: QuestionsProps[],
    isLoading: boolean
}


interface QuestionPayloadProps {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

interface getQuestionsProps {
    type: ActionType.GET_QUESTIONS;
    payload: QuestionPayloadProps[];
}

interface getQiestionsLoadingProps {
    type: ActionType.GET_QUESTIONS_LOADING;
    payload: boolean;
}

export type QuizActionsProps = getQuestionsProps | getQiestionsLoadingProps;