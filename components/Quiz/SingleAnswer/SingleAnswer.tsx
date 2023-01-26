import React, { useState } from 'react';
import css from "./SingleAnswer.module.scss";

//types 
import { SingleAnswerProps } from '@/types/components/quiz';

const SingleAnswer: React.FC<SingleAnswerProps> = ({
    index,
    item,
    handleAnswer,
    disabled,
    correctAnswer,
    wrongAnswer,
    showCorrectAnswer
}) => {

    const handleAnswers = (num: number) => {
        switch (num) {
            case 1:
                return "A"
            case 2:
                return "B"
            case 3:
                return "C"
            case 4:
                return "D"
            default:
                return;
        }
    }

    return (
        <button className={`${css.container} ${correctAnswer || showCorrectAnswer ? css.green : ""} ${wrongAnswer ? css.red : ""}`}
            onClick={() => handleAnswer(item)} disabled={disabled}>
            {`${handleAnswers(index + 1)}. ${item}`}
        </button>
    )
}

export default SingleAnswer;