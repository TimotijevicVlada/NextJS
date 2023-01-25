import React, { useState, useEffect, useRef } from 'react';
import css from "./Quiz.module.scss";

//assets
import ArrowDown from "assets/arrow-down.svg";
import ArrowUp from "assets/arrow-up.svg";

//categories
import { Categories, Difficulty } from '../Categories';

interface SelectedCategoryProps {
    category: string;
    value: number;
}

const Quiz = () => {

    //refs
    const currentCategoryRef = useRef() as React.RefObject<HTMLButtonElement>;
    const currentDifficultyRef = useRef() as React.RefObject<HTMLButtonElement>;

    //local state
    const [name, setName] = useState("");
    const [categoryDropdown, setCategoryDropdown] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<SelectedCategoryProps | null>(null);
    const [difficultyDropdown, setDifficultyDropdown] = useState(false);
    const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);

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

    const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault();
        const quizData = {
            name: name,
            category: selectedCategory?.value,
            difficulty: selectedDifficulty
        }
        console.log("DATA", quizData)
    }

    return (
        <div className={css.container}>
            <h1>Welcome to my Quiz</h1>
            <form onSubmit={handleSubmit}>
                <h2>Quiz settings</h2>
                <div className={css.nameWrapper}>
                    <label>Your name</label>
                    <input
                        type="text"
                        placeholder='Type your name...'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
                                <button key={index} onClick={() => setSelectedCategory(item)}>{item.category}</button>
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
                                <button key={index} onClick={() => setSelectedDifficulty(item.difficulty)}>
                                    {item.difficulty}
                                </button>
                            ))}
                        </div>
                    }
                </div>
                <div className={css.startButton}>
                    <button type='submit'>Start Quiz</button>
                </div>
            </form>
        </div>
    )
}

export default Quiz;
