import React, { useEffect, useState } from 'react';
import css from "./QuizSidebar.module.scss";

//types
import { QuizSidebarProps } from '@/types/components/quiz';

const QuizSidebar: React.FC<QuizSidebarProps> = ({
    timer,
    setTimer,
    name,
    score,
    category,
    choosenAnswer
}) => {

    const [criticalTime, setCriticalTime] = useState(false);

    useEffect(() => {
        if (timer <= 5) {
            setCriticalTime(true);
        } else {
            setCriticalTime(false);
        }
        if (timer === 0 || choosenAnswer) return;
        const time = setInterval(() => {
            setTimer(prev => prev - 1);
        }, 1000)
        return () => clearInterval(time);
    }, [timer, choosenAnswer])

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
            <div className={css.timerWrapper}>
                <div className={`${css.timer} ${criticalTime ? css.red : ""}`}>
                    {timer}
                </div>
            </div>
        </div>
    )
}

export default QuizSidebar;