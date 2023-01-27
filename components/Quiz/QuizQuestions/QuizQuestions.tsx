import React, { useState, useEffect, useMemo } from 'react';
import css from "./QuizQuestions.module.scss";
import { useRouter } from 'next/router';

//components
import QuizBody from '../QuizBody/QuizBody';
import QuizSidebar from '../QuizSidebar/QuizSidebar';

//redux
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as QuizActions from "redux/actions/quizActions";
import { useSelector } from 'react-redux';

//types
import { State } from '@/redux/store';
import { QuestionsProps } from '@/types/redux/quizReducer';

const QuizQuestions = () => {

  const router = useRouter();

  //redux
  const dispatch = useDispatch();
  const { getQuizQuestions } = bindActionCreators(QuizActions, dispatch);
  const state = useSelector((state: State) => state.quizReducer);
  const { isLoading, questions } = state;

  //variables
  const name = useMemo(() => router.query.name, [router.query.name]);
  const category = useMemo(() => router.query.category, [router.query.category]);
  const difficulty = useMemo(() => router.query.difficulty, [router.query.difficulty]);

  const [score, setScore] = useState(0);
  const [currentQuestion, setQurrentQuestion] = useState<QuestionsProps | null>(null);

  useEffect(() => {
    if (category && difficulty) {
      getQuizQuestions(category, difficulty);
    }
  }, [category])

  if (isLoading) {
    return (
      <div className={`${css.container} ${css.loading}`}>Loading...</div>
    )
  }

  return (
    <div className={css.container}>
      <QuizSidebar
        name={name ? name : ""}
        score={score}
        category={currentQuestion?.category}
      />
      <QuizBody
        name={name ? name : ""}
        score={score}
        category={currentQuestion?.category}
        questions={questions}
        setScore={setScore}
        currentQuestion={currentQuestion}
        setQurrentQuestion={setQurrentQuestion}
      />
    </div>
  )
}

export default QuizQuestions;