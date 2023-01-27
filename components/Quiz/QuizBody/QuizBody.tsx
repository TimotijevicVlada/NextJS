import React, { useState, useEffect } from 'react';
import css from "./QuizBody.module.scss";
import { useRouter } from 'next/router';

//types 
import { QuizBodyProps } from '@/types/components/quiz';
import SingleAnswer from '../SingleAnswer/SingleAnswer';

const QuizBody: React.FC<QuizBodyProps> = ({
    timer,
    setTimer,
    questions,
    setScore,
    currentQuestion,
    setQurrentQuestion,
    name,
    score,
    category,
    choosenAnswer,
    setChoosenAnswer
}) => {

    const router = useRouter();

    //local state
    const [questionNumber, setQuestionNumber] = useState(0);

    const barPercentage = ((questionNumber / questions.length) * 100) + ((1 / questions.length) * 100);

    useEffect(() => {
        if (!!questions.length) {
            setQurrentQuestion(questions[questionNumber]);
        }
    }, [questionNumber, questions])

    const handleNext = () => {
        if (questionNumber < questions.length - 1) {
            setQuestionNumber(prev => prev + 1);
            setChoosenAnswer("");
        } else {
            router.push({
                pathname: "/quiz/questions/score",
                query: {
                    name: name,
                    score: score,
                    category: category,
                    totalQuestions: questions.length
                }
            });
        }
        setTimer(20);
    }

    const handleAnswer = (answer: string) => {
        if (answer === currentQuestion?.correct_answer) {
            setScore(prev => prev + 1);
            setChoosenAnswer(answer);
        } else {
            setChoosenAnswer(answer);
        }
    }

    return (
        <div className={css.container}>
            <h1>Question {questionNumber + 1}</h1>
            <h2>{currentQuestion?.question}</h2>
            <div className={css.answers}>
                {currentQuestion?.answers.map((item, index) => (
                    <SingleAnswer
                        key={index}
                        index={index}
                        item={item}
                        handleAnswer={handleAnswer}
                        disabled={!!choosenAnswer || timer === 0}
                        correctAnswer={item === currentQuestion.correct_answer && choosenAnswer === item}
                        wrongAnswer={item !== currentQuestion.correct_answer && choosenAnswer === item}
                        showCorrectAnswer={!!choosenAnswer && choosenAnswer !== currentQuestion.correct_answer && item === currentQuestion.correct_answer}
                    />
                ))}
            </div>
            <div className={`${css.nextButton} ${choosenAnswer || timer === 0 ? css.active : ""}`}>
                <button disabled={!!!choosenAnswer && timer > 0} onClick={handleNext}>
                    {questionNumber < questions.length - 1 ? "Next" : "Finish"}
                </button>
            </div>
            <div className={css.percentBody}>
                <div className={css.percentage} style={{ width: `${barPercentage}%` }}></div>
            </div>
        </div>
    )
}

export default QuizBody;