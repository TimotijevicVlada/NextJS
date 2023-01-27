import React from 'react';
import css from "./QuizScore.module.scss";
import { useRouter } from 'next/router';



const QuizScore = () => {

    const router = useRouter();

    return (
        <div className={css.container}>
            <h1>Your final score</h1>
            <div className={css.name}>
                <h2>Name</h2>
                <h2>{router.query.name}</h2>
            </div>
            <div className={css.score}>
                <h2>Total score</h2>
                <h2>{router.query.score}/{router.query.totalQuestions}</h2>
            </div>
            <div className={css.category}>
                <h2>Category</h2>
                <h2>{router.query.category}</h2>
            </div>
            <div className={css.actionButtons}>
                <button onClick={() => router.push("/quiz")}>Back</button>
                <button onClick={() => router.back()}>Play again</button>
            </div>
        </div>
    )
}

export default QuizScore;