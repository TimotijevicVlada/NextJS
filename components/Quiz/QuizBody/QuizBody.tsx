import React, { useState, useEffect } from 'react';
import css from "./QuizBody.module.scss";

//types 
import { QuestionsProps } from '@/types/redux/quizReducer';
import { QuizBodyProps } from '@/types/components/quiz';
import SingleAnswer from '../SingleAnswer/SingleAnswer';

const QuizBody: React.FC<QuizBodyProps> = ({ questions, setScore }) => {

    //local state
    const [questionNumber, setQuestionNumber] = useState(0);
    const [currentQuestion, setQurrentQuestion] = useState<QuestionsProps | null>(null);
    const [choosenAnswer, setChoosenAnswer] = useState("");

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
            alert("NEMA VISE PITANJA")
        }
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
                        index={index}
                        item={item}
                        handleAnswer={handleAnswer}
                        disabled={!!choosenAnswer}
                        correctAnswer={item === currentQuestion.correct_answer && choosenAnswer === item}
                        wrongAnswer={item !== currentQuestion.correct_answer && choosenAnswer === item}
                        showCorrectAnswer={!!choosenAnswer && choosenAnswer !== currentQuestion.correct_answer && item === currentQuestion.correct_answer}
                    />
                ))}
            </div>
            <div className={css.nextButton}>
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    )
}

export default QuizBody;