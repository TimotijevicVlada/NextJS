import { Dispatch, SetStateAction } from "react";
import { QuestionsProps } from "../redux/quizReducer";

export interface SelectedCategoryProps {
    category: string;
    value: number;
}

export interface QuizBodyProps {
    timer: number;
    setTimer: Dispatch<SetStateAction<number>>;
    name: string | string[];
    score: number;
    category: string | undefined;
    questions: QuestionsProps[];
    setScore: Dispatch<SetStateAction<number>>
    currentQuestion: QuestionsProps | null;
    setQurrentQuestion: Dispatch<SetStateAction<QuestionsProps | null>>;
    choosenAnswer: string;
    setChoosenAnswer: Dispatch<SetStateAction<string>>;
}

export interface QuizSidebarProps {
    timer: number;
    setTimer: Dispatch<SetStateAction<number>>;
    choosenAnswer: string;
    name: string | string[];
    score: number;
    category: string | undefined;
}

export interface SingleAnswerProps {
    index: number;
    item: string;
    disabled: boolean;
    correctAnswer: boolean;
    wrongAnswer: boolean;
    handleAnswer: (answer: string) => void;
    showCorrectAnswer: boolean;
}