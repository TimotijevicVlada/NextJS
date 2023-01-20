import React, { useState } from 'react';
import css from "./TodoSidebar.module.scss";

//components
import CreateTodoModal from '../CreateTodoModal/CreateTodoModal';
import Backdrop from '@/components/Backdrop/Backdrop';

//assets
import CreateTodoIcon from "assets/plus-icon.svg";

//types
import { TodoSidebarProps } from '@/types/components/todos';

const TodoSidebar: React.FC<TodoSidebarProps> = ({ completed, setCompleted }) => {

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
                <button onClick={() => setCompleted(!completed)}
                    className={`${css.completedButton} ${completed ? css.active : ""}`}>
                    Completed
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