import React from 'react';
import css from "./QuizSidebar.module.scss";

//types
import { QuizSidebarProps } from '@/types/components/quiz';

const QuizSidebar: React.FC<QuizSidebarProps> = ({ name, score, category }) => {
    return (
        <div className={css.container}>
            <h1>Quiz</h1>
            <div className={css.nameWrapper}>
                <h2>Player:</h2>
                <span>{name}</span>
            </div>
            <div className={css.scoreWrapper}>
                <h2>Score:</h2>
                <span>{score}</span>
            </div>
            <div className={css.categoryWrapper}>
                <h2>Category:</h2>
                <span>{category}</span>
            </div>
        </div>
    )
}

export default QuizSidebar;