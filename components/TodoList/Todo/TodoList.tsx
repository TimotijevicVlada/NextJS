import React, { useState } from 'react';
import css from "./TodoList.module.scss";

//components
import TodoSidebar from '../TodoSidebar/TodoSidebar';
import TodoContent from '../TodoContent/TodoContent';

//redux
import { useSelector } from 'react-redux';

//types
import { AllReducersProps } from '@/types/redux/allReducers';

const TodoList = () => {

    //redux
    const todosReducer = useSelector((state: AllReducersProps) => state.todosReducer);
    const { todos } = todosReducer;

    return (
        <div className={css.container}>
            <div className={css.todoContent}>
                <TodoSidebar />
                <TodoContent
                    todos={todos}
                />
            </div>
        </div>
    )
}

export default TodoList;