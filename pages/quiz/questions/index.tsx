import React from 'react';
import css from "./index.module.scss";

//components
import QuizQuestions from '@/components/Quiz/QuizQuestions/QuizQuestions';

const index = () => {
    return (
        <div className={css.container}>
            <QuizQuestions />
        </div>
    )
}

export default index;