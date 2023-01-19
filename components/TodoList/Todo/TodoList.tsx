import React from 'react';
import css from "./TodoList.module.scss";

//components
import TodoSidebar from '../TodoSidebar/TodoSidebar';
import TodoContent from '../TodoContent/TodoContent';

//redux
import { useSelector } from 'react-redux';

//types
import { State } from '@/redux/store';

const TodoList = () => {

    //redux
    const todosReducer = useSelector((state: State) => state.todosReducer);
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