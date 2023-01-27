import React from 'react';
import css from "./index.module.scss";

//components
import QuizScore from '@/components/Quiz/QuizScore/QuizScore';

const index = () => {
    return (
        <div className={css.container}>
            <QuizScore />
        </div>
    )
}

export default index;