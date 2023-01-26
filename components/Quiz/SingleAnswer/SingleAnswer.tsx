import React, { useState } from 'react';
import css from "./SingleAnswer.module.scss";

//types 
import { SingleAnswerProps } from '@/types/components/quiz';

const SingleAnswer: React.FC<SingleAnswerProps> = ({ index, item, currentQuestion }) => {

    const [correctAnswer, setCorrectAnswer] = useState(false);
    const [wrongAnswer, setWrongAnswer] = useState(false);

    const handleAnswer = () => {
        if (item === currentQuestion.correct_answer) {
            setCorrectAnswer(true);
        } else {
            setWrongAnswer(true);
        }
    }

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
        <div className={`${css.container} ${correctAnswer ? css.green : ""} ${wrongAnswer ? css.red : ""}`}
            onClick={handleAnswer}>
            {`${handleAnswers(index + 1)}. ${item}`}
        </div>
    )
}

export default SingleAnswer;