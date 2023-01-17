import React, { useState } from 'react';
import css from "./TodoList.module.scss";

//components
import CreateTodo from '../CreateTodo/CreateTodo';
import Backdrop from '@/components/Backdrop/Backdrop';
import NoData from '@/components/NoData/NoData';

//assets
import EmptyIcon from "assets/empty-todo.svg";

//redux
import { useSelector } from 'react-redux';

//types
import { AllReducersProps } from '@/types/redux/allReducers';

const TodoList = () => {

    //redux
    const todosReducer = useSelector((state: AllReducersProps) => state.todosReducer);
    const { todos } = todosReducer;

    console.log("TODOS", todos)

    //local state
    const [createTodoModal, setCreateTodoModal] = useState<boolean>(false);

    return (
        <div className={css.container}>
            <div className={css.todoHeader}>
                <h1>TODO LIST</h1>
                <button className={css.createTodoButton} onClick={() => setCreateTodoModal(true)}>
                    Create new todo
                </button>
            </div>
            <div className={css.todoContent}>
                {!todos.length ?
                    <NoData
                        children={<EmptyIcon />}
                        text="No Todos yet."
                    />
                    :
                    <div>
                        SOME TODOS
                    </div>
                }
            </div>

            {createTodoModal &&
                <Backdrop
                    children={
                        <CreateTodo
                            close={() => setCreateTodoModal(false)}
                        />
                    }
                    close={() => setCreateTodoModal(false)}
                />
            }
        </div>
    )
}

export default TodoList;