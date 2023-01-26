import React, { useEffect, useMemo } from 'react';
import css from "./QuizQuestions.module.scss";
import { useRouter } from 'next/router';

//redux
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as QuizActions from "redux/actions/quizActions";

const QuizQuestions = () => {

  const router = useRouter();
  console.log("ROUTER", router.query);

  //redux
  const dispatch = useDispatch();
  const { getQuizQuestions } = bindActionCreators(QuizActions, dispatch);

  //variables
  const name = useMemo(() => router.query.name, [router.query.name]);

  useEffect(() => {
    if (router.query.category) {
      getQuizQuestions();
    }
  }, [router.query.category])

  return (
    <div className={css.container}>QuizQuestions</div>
  )
}

export default QuizQuestions;