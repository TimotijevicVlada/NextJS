import React from 'react';
import css from "./TodoContent.module.scss";

//components
import NoData from '@/components/NoData/NoData';
import TodoItem from '../TodoItem/TodoItem';

//assets
import EmptyIcon from "assets/empty-todo.svg";

//types
import { TodoContentProps } from '@/types/components/todos';


const TodoContent: React.FC<TodoContentProps> = ({ todos }) => {
    return (
        <div className={css.container}>
            {!todos.length ?
                <NoData
                    children={<EmptyIcon />}
                    text="No Todos yet."
                />
                :
                <div className={css.todosContainer}>
                    {todos.map((item, index) => (
                        <TodoItem
                            key={index}
                            index={index}
                            todo={item}
                        />
                    ))}
                </div>
            }
        </div>
    )
}

export default TodoContent;