import React, { useState } from 'react';
import css from "./TodoSidebar.module.scss";

//components
import CreateTodoModal from '../CreateTodoModal/CreateTodoModal';
import Backdrop from '@/components/Backdrop/Backdrop';

//assets
import CreateTodoIcon from "assets/plus-icon.svg";

//types
import { TodoSidebarProps } from '@/types/components/todos';

const TodoSidebar: React.FC<TodoSidebarProps> = ({ filter, filterData }) => {

    //local state
    const [createTodoModal, setCreateTodoModal] = useState<boolean>(false);

    return (
        <div className={css.container}>
            <div className={css.header}>
                <div className={css.sidebarHeader}>
                    <h2>Todo List</h2>
                    <button onClick={() => setCreateTodoModal(true)}>
                        <CreateTodoIcon />
                    </button>
                </div>
                <h2 className={css.filterHeader}>Filter your todos</h2>
                <button onClick={() => filterData("completed")}
                    className={`${css.completedButton} ${filter === "completed" ? css.active : ""}`}>
                    Completed
                </button>
                <button onClick={() => filterData("edited")}
                    className={`${css.editedButton} ${filter === "edited" ? css.active : ""}`}>
                    Edited
                </button>
            </div>

            {createTodoModal &&
                <Backdrop
                    children={
                        <CreateTodoModal
                            close={() => setCreateTodoModal(false)}
                        />
                    }
                    close={() => setCreateTodoModal(false)}
                />
            }
        </div>
    )
}

export default TodoSidebar;