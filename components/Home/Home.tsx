import React from 'react';
import css from "./Home.module.scss";
import { useRouter } from 'next/router';

//assets
import JSicon from "assets/js-icon.svg";
import TSicon from "assets/ts-icon.svg";
import ReactIcon from "assets/react-icon.svg";
import ReduxIcon from "assets/redux-icon.svg";
import NextIcon from "assets/next-js-icon.svg";
import ScssIcon from "assets/scss-icon.svg";
import HTMLicon from "assets/html-icon.svg";
import NPMicon from "assets/npm-icon.svg";
import EnterIcon from "assets/enter-icon.svg";

const Home = () => {

    const router = useRouter();


    return (
        <div className={css.container}>
            <h1>Welcome to my skills demo app</h1>
            <p className={css.firstParagraph}>This app contains Quiz app, Budget app, Todo list and Rick and Morty characters.</p>
            <p className={css.secondParagraph}>It's built by the following frontend technologies:</p>
            <div className={css.icons}>
                <div className={css.icon}>
                    <HTMLicon />
                    <span>HTML</span>
                </div>
                <div className={css.icon}>
                    <ScssIcon />
                    <span>Scss(SASS)</span>
                </div>
                <div className={css.icon}>
                    <JSicon />
                    <span>JavaScript</span>
                </div>
                <div className={css.icon}>
                    <TSicon />
                    <span>TypeScript</span>
                </div>
                <div className={css.icon}>
                    <ReactIcon />
                    <span>React</span>
                </div>
                <div className={css.icon}>
                    <ReduxIcon />
                    <span>Redux</span>
                </div>
                <div className={css.icon}>
                    <NextIcon />
                    <span>Next.js</span>
                </div>
                <div className={css.icon}>
                    <NPMicon />
                    <span>NPM</span>
                </div>
            </div>
            <div className={css.quizDescriptions}>
                <button className={css.quizHeader} onClick={() => router.push("/quiz")}>
                    <span>Quiz app</span>
                    <EnterIcon />
                </button>
                <p className={css.appDescription}>
                    On this application you can choose your name, the number of questions,
                    the category and the difficulty of the questions you want. During the quiz you have 20 seconds to answer each question.
                    When selecting a question, the selected question will show red or green color if you have answered correctly.
                    At the bottom you have a progress bar that tells you how many questions you have completed in the quiz.
                    At the end of the quiz, you will receive information about the total number of points you have won.
                </p>
            </div>
            <div className={css.quizDescriptions}>
                <button className={css.quizHeader} onClick={() => router.push("/todo-list")}>
                    <span>Todo app</span>
                    <EnterIcon />
                </button>
                <p className={css.appDescription}>
                    On this application, you can create your todo task by clicking on the plus icon,
                    where a data entry window will open. You can later mark each created task as done,
                    edit it, or archive it. In the sidebar, you have filters by which you can select specific tasks
                    according to a certain criteria. If you archived a task, you can revert it back or
                    delete it permanently.
                </p>
            </div>
            <div className={css.quizDescriptions}>
                <button className={css.quizHeader} onClick={() => router.push("/budget")}>
                    <span>Budget app</span>
                    <EnterIcon />
                </button>
                <p className={css.appDescription}>
                    This application is for controlling your budget.
                    You can add your income and expenses by entering information in the inputs.
                    When you enter a certain value, it will be projected into the transaction history,
                    where you can delete it if you wish. In the sidebar you have information about the
                    current amount of your budget, about expenses and income. You also have a graphical
                    representation of expenses and income.
                </p>
            </div>
            <div className={css.quizDescriptions}>
                <button className={css.quizHeader} onClick={() => router.push("/caracters")}>
                    <span>Rick and Morty TV series</span>
                    <EnterIcon />
                </button>
                <p className={css.appDescription}>
                    This app pulls information from API.
                    When you load the app it will give you the first 20 characters,
                    if you scroll down it will load new characters from the same api
                    and you will have infinite scroll as long as there is data. You can also click on each
                    individual character and see details about it on a separate page. You can search
                    characters using the input or using the filters offered to you in the form of a dropdown list.
                    You can also notice data loading states, as well as errors if there are no required
                    characters according to your criteria.
                </p>
            </div>
        </div>
    )
}

export default Home;