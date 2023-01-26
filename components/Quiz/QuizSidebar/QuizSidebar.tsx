import React from 'react';
import css from "./QuizSidebar.module.scss";

//types
import { QuizSidebarProps } from '@/types/components/quiz';

const QuizSidebar: React.FC<QuizSidebarProps> = ({ name, score }) => {
    return (
        <div className={css.container}>
            <h1>Quiz</h1>
            <h2>Score {score}</h2>
        </div>
    )
}

export default QuizSidebar;