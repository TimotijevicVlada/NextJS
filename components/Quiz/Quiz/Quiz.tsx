import React, { useState, useEffect, useRef } from 'react';
import css from "./Quiz.module.scss";
import { useRouter } from 'next/router';

//assets
import ArrowDown from "assets/arrow-down.svg";
import ArrowUp from "assets/arrow-up.svg";

//categories
import { Categories, Difficulty } from '../Categories';

//types 
import { SelectedCategoryProps, ErrorsProps } from '@/types/components/quiz';

const Quiz = () => {

    const router = useRouter();

    //refs
    const currentCategoryRef = useRef() as React.RefObject<HTMLButtonElement>;
    const currentDifficultyRef = useRef() as React.RefObject<HTMLButtonElement>;

    //local state
    const [name, setName] = useState("");
    const [categoryDropdown, setCategoryDropdown] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<SelectedCategoryProps | null>(null);
    const [difficultyDropdown, setDifficultyDropdown] = useState(false);
    const [selectedDifficulty, setSelectedDifficulty] = useState("");
    const [errors, setErrors] = useState<ErrorsProps>({ name: false, category: false, difficulty: false });

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
        const hasErrors = checkErrors();
        if (hasErrors) return;
        const quizData = {
            name: name,
            category: selectedCategory?.value,
            difficulty: selectedDifficulty
        }
        router.push({
            pathname: "/quiz/questions",
            query: quizData
        })
    }

    const checkErrors = () => {
        let tempErrors = {} as ErrorsProps;
        if (!name.trim()) tempErrors = { ...tempErrors, name: true };
        if (!selectedCategory) tempErrors = { ...tempErrors, category: true };
        if (!selectedDifficulty) tempErrors = { ...tempErrors, difficulty: true };
        setErrors(tempErrors);
        const checkErrors = Object.values(tempErrors);
        return !!checkErrors.length;
    }

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
        if (errors.name && e.target.value) setErrors({ ...errors, name: false });
    }

    const handleCategory = (item: SelectedCategoryProps) => {
        setSelectedCategory(item);
        if (errors.category) setErrors({ ...errors, category: false });
    }

    const handleDifficulty = (item: string) => {
        setSelectedDifficulty(item);
        if (errors.difficulty) setErrors({ ...errors, difficulty: false });
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
                    {errors.name && <div className={css.errors}>Name is required</div>}
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
                    {errors.category && <div className={css.errors}>Category is required</div>}
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
                    {errors.difficulty && <div className={css.errors}>Difficulty is required</div>}
                </div>
                <div className={css.startButton}>
                    <button onClick={handleSubmit}>Start Quiz</button>
                </div>
            </div>
        </div>
    )
}

export default Quiz;
