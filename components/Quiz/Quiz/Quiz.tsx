import React, { useState, useEffect, useRef } from 'react';
import css from "./Quiz.module.scss";
import { useRouter } from 'next/router';

//assets
import ArrowDown from "assets/arrow-down.svg";
import ArrowUp from "assets/arrow-up.svg";

//categories
import { Categories, Difficulty } from '../Categories';

//types 
import { SelectedCategoryProps } from '@/types/components/quiz';

const Quiz = () => {

    const router = useRouter();

    //refs
    const currentCategoryRef = useRef() as React.RefObject<HTMLButtonElement>;
    const currentDifficultyRef = useRef() as React.RefObject<HTMLButtonElement>;

    //local state
    const [name, setName] = useState("");
    const [questionNumbers, setQuestionNumbers] = useState("");
    const [categoryDropdown, setCategoryDropdown] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<SelectedCategoryProps | null>(null);
    const [difficultyDropdown, setDifficultyDropdown] = useState(false);
    const [selectedDifficulty, setSelectedDifficulty] = useState("");

    useEffect(() => {
        const handleCloseDropdown = (e: MouseEvent) => {
            if (!currentCategoryRef?.current?.contains(e.target as HTMLButtonElement)) {
                setCategoryDropdown(false);
                setDifficultyDropdown(false);
            }
            if (!currentDifficultyRef?.current?.contains(e.target as HTMLButtonElement)) {
                setDifficultyDropdown(false);
                setCategoryDropdown(false);
            }
        };
        document.addEventListener("click", handleCloseDropdown);
        return () => document.removeEventListener("click", handleCloseDropdown);
    }, []);

    const handleSubmit = () => {
        const quizData = {
            name: name ? name : "Player 1",
            questionNumbers: questionNumbers ? questionNumbers : "5",
            category: selectedCategory?.value ? selectedCategory.value : "21",
            difficulty: selectedDifficulty ? selectedDifficulty : "easy"
        }
        router.push({
            pathname: "/quiz/questions",
            query: quizData
        })
    }

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const handleQuestionNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isNumber = /^[0-9]+$/.test(e.target.value);
        if (!isNumber && e.target.value) return;
        setQuestionNumbers(e.target.value);
    }

    const handleCategory = (item: SelectedCategoryProps) => {
        setSelectedCategory(item);
    }

    const handleDifficulty = (item: string) => {
        setSelectedDifficulty(item);
    }

    return (
        <div className={css.container}>
            <h1>Welcome to my Quiz</h1>
            <div className={css.form}>
                <h2>Quiz settings</h2>
                <div className={css.nameWrapper}>
                    <label>Your name</label>
                    <input
                        type="text"
                        placeholder='Type your name...'
                        value={name}
                        onChange={handleName}
                    />
                </div>
                <div className={css.questionNumberWrapper}>
                    <label>Number of questions</label>
                    <input
                        type="text"
                        placeholder='Type number...'
                        value={questionNumbers}
                        onChange={handleQuestionNumber}
                    />
                </div>
                <div className={css.categoryWrapper} onClick={(e) => { setCategoryDropdown(prev => !prev); e.stopPropagation() }}>
                    <label>Select category</label>
                    <button className={css.activeButton} ref={currentCategoryRef}>
                        <span>{selectedCategory ? selectedCategory.category : "Choose category"}</span>
                        {categoryDropdown ? <ArrowUp /> : <ArrowDown />}
                    </button>
                    {categoryDropdown &&
                        <div className={css.dropdown}>
                            {Categories.map((item, index) => (
                                <button key={index} onClick={() => handleCategory(item)}>{item.category}</button>
                            ))}
                        </div>
                    }
                </div>
                <div className={css.difficultyWrapper} onClick={(e) => { setDifficultyDropdown(prev => !prev); e.stopPropagation() }}>
                    <label>Select difficulty</label>
                    <button className={css.activeButton} ref={currentDifficultyRef}>
                        <span>{selectedDifficulty ? selectedDifficulty : "Choose difficulty"}</span>
                        {difficultyDropdown ? <ArrowUp /> : <ArrowDown />}
                    </button>
                    {difficultyDropdown &&
                        <div className={`${css.dropdown} ${css.difficultyDrop}`}>
                            {Difficulty.map((item, index) => (
                                <button key={index} onClick={() => handleDifficulty(item)}>
                                    {item}
                                </button>
                            ))}
                        </div>
                    }
                </div>
                <div className={css.startButton}>
                    <button onClick={handleSubmit}>Start Quiz</button>
                </div>
            </div>
        </div>
    )
}

export default Quiz;
