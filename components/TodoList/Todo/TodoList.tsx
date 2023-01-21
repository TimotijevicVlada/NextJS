import React, { useEffect, useState } from 'react';
import css from "./TodoList.module.scss";

//components
import TodoSidebar from '../TodoSidebar/TodoSidebar';
import TodoContent from '../TodoContent/TodoContent';

//redux
import { useSelector } from 'react-redux';

//types
import { State } from '@/redux/store';
import { TodoProps } from '@/types/redux/todosReducer';

const TodoList = () => {

    //redux
    const todosReducer = useSelector((state: State) => state.todosReducer);
    const { todos } = todosReducer;

    const [filteredTodos, setFilteredTodos] = useState<TodoProps[]>([]);
    const [filter, setFilter] = useState<string>("");

    useEffect(() => {
        if (filter === "completed") {
            setFilteredTodos(todos.filter(item => item.completed));
        } else if (filter === "edited") {
            setFilteredTodos(todos.filter(item => item.edited));
        } else {
            setFilteredTodos(todos);
        }
    }, [todos, filter])

    const filterData = (newFilter: string) => {
        if (newFilter === filter) {
            setFilter("");
        } else {
            setFilter(newFilter);
        }
    }

    return (
        <div className={css.container}>
            <div className={css.todoContent}>
                <TodoSidebar
                    filter={filter}
                    filterData={filterData}
                />
                <TodoContent
                    filter={filter}
                    todos={filteredTodos}
                />
            </div>
        </div>
    )
}

export default TodoList;