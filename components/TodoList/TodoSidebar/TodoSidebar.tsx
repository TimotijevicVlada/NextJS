import React, { useState } from 'react';
import css from "./TodoSidebar.module.scss";

//components
import CreateTodoModal from '../CreateTodoModal/CreateTodoModal';
import Backdrop from '@/components/Backdrop/Backdrop';

//assets
import CreateTodoIcon from "assets/plus-icon.svg";

const TodoSidebar = () => {

    //local state
    const [createTodoModal, setCreateTodoModal] = useState<boolean>(false);

    return (
        <div className={css.container}>
            <div className={css.header}>
                <h2>Todo List</h2>
                <button onClick={() => setCreateTodoModal(true)}>
                    <CreateTodoIcon />
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