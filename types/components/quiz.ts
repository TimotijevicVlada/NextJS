import { Dispatch, SetStateAction } from "react";
import { QuestionsProps } from "../redux/quizReducer";

export interface SelectedCategoryProps {
    category: string;
    value: number;
}

export interface ErrorsProps {
    name: boolean;
    category: boolean;
    difficulty: boolean;
}

export interface QuizBodyProps {
    questions: QuestionsProps[];
    setScore: Dispatch<SetStateAction<number>>
    currentQuestion: QuestionsProps | null;
    setQurrentQuestion: Dispatch<SetStateAction<QuestionsProps | null>>
}

export interface QuizSidebarProps {
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