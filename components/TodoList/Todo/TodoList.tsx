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
    const state = useSelector((state: State) => state.todosReducer);
    const { todos, archived } = state;

    //local state
    const [filteredTodos, setFilteredTodos] = useState<TodoProps[]>([]);
    const [filter, setFilter] = useState<string>("");
    const [search, setSearch] = useState<string>("");

    useEffect(() => {
        if (filter === "archived") return;
        setFilteredTodos(todos);
    }, [todos])

    useEffect(() => {
        if (filter !== "archived") return;
        setFilteredTodos(archived);
    }, [archived])

    useEffect(() => {
        if (filter === "completed") {
            setFilteredTodos(todos.filter(item => item.completed));
        } else if (filter === "edited") {
            setFilteredTodos(todos.filter(item => item.edited));
        } else if (filter === "archived") {
            setFilteredTodos(archived);
        } else {
            setFilteredTodos(todos);
        }
    }, [filter])

    useEffect(() => {
        const todosForSearch = filter === "archived" ? archived : todos;
        const searchedTodos = todosForSearch.filter(item => item.subject.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
        setFilteredTodos(searchedTodos);
    }, [search])

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
                    setSearch={setSearch}
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