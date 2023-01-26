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
    setScore: (score: number) => void;
}

export interface QuizSidebarProps {
    name: string | string[];
    score: number;
}

export interface SingleAnswerProps {
    index: number;
    item: string;
    currentQuestion: QuestionsProps;
}