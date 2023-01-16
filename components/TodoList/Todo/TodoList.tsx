import React, { useState } from 'react';
import css from "./TodoList.module.scss";

//components
import CreateTodo from '../CreateTodo/CreateTodo';
import Backdrop from '@/components/Backdrop/Backdrop';

const TodoList = () => {

    const [createTodoModal, setCreateTodoModal] = useState<boolean>(false);

    return (
        <div className={css.container}>
            <h1>TODO LIST</h1>
            <button className={css.createTodoButton} onClick={() => setCreateTodoModal(true)}>
                Create new todo
            </button>
            {createTodoModal &&
                <Backdrop
                    children={<CreateTodo />}
                    close={() => setCreateTodoModal(false)}
                />
            }
        </div>
    )
}

export default TodoList;