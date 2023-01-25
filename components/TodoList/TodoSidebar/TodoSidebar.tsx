import React, { useState } from 'react';
import css from "./TodoSidebar.module.scss";
import { debounce } from "lodash";

//components
import CreateTodoModal from '../CreateTodoModal/CreateTodoModal';
import Backdrop from '@/components/Backdrop/Backdrop';

//assets
import CreateTodoIcon from "assets/plus-icon.svg";
import SearchIcon from "assets/search-icon.svg";

//types
import { TodoSidebarProps } from '@/types/components/todos';

const TodoSidebar: React.FC<TodoSidebarProps> = ({ filter, filterData, setSearch }) => {

    //variables
    const filterButtons = ["completed", "edited", "archived"];

    //local state
    const [createTodoModal, setCreateTodoModal] = useState<boolean>(false);

    const updateQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    const debounceSearch = debounce(updateQuery, 500);

    return (
        <div className={css.container}>
            <div className={css.header}>
                <div className={css.sidebarHeader}>
                    <h2>Todo List</h2>
                    <button onClick={() => setCreateTodoModal(true)}>
                        <CreateTodoIcon />
                    </button>
                </div>
                <div className={css.searchTodos}>
                    <SearchIcon />
                    <input
                        type="text"
                        placeholder='Search by subject..'
                        onChange={debounceSearch}
                    />
                </div>
                <h2 className={css.filterHeader}>Filter your todos</h2>
                <div className={css.filters}>
                    {filterButtons.map((item, index) => (
                        <button key={index} onClick={() => filterData(item)}
                            className={`${css.filterButtons} ${filter === item ? css.active : ""}`}>
                            {item}
                        </button>
                    ))}
                </div>
            </div>
            {createTodoModal &&
                <Backdrop close={() => setCreateTodoModal(false)}>
                    <CreateTodoModal
                        close={() => setCreateTodoModal(false)}
                    />
                </Backdrop>
            }
        </div>
    )
}

export default TodoSidebar;