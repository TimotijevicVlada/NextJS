import React from 'react';
import css from "./TodoContent.module.scss";

//components
import NoData from '@/components/NoData/NoData';
import TodoItem from '../TodoItem/TodoItem';

//assets
import EmptyIcon from "assets/empty-todo.svg";

//types
import { TodoContentProps } from '@/types/components/todos';


const TodoContent: React.FC<TodoContentProps> = ({ todos, filter }) => {

    const renderNoTodoText = () => {
        switch (filter) {
            case "completed":
                return "No completed todos yet";
            case "edited":
                return "No edited todos yet";
            case "archived":
                return "No archived todos yet";
            default:
                return "Create your first todo";
        }
    }

    return (
        <div className={`${css.container} ${!todos.length ? css.center : ""}`}>
            {!todos.length ?
                <NoData text={renderNoTodoText()}>
                    <EmptyIcon />
                </NoData>
                :
                <div className={css.todosContainer}>
                    {todos.map((item, index) => (
                        <TodoItem
                            key={index}
                            index={index}
                            todo={item}
                            filter={filter}
                        />
                    ))}
                </div>
            }
        </div>
    )
}

export default TodoContent;