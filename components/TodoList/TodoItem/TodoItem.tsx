import React, { useState } from 'react';
import css from "./TodoItem.module.scss";

//components
import Backdrop from '@/components/Backdrop/Backdrop';

//assets
import TrashIcon from "assets/trash-icon.svg";

//redux
import { deleteTodoAction } from '@/redux/actions/todosActions';

//types
import { TodoItemProps } from '@/types/components/todos';
import { TodoProps } from '@/types/redux/todosReducer';

const TodoItem: React.FC<any> = ({ index, todo }) => {

    // const [deleteAlert, setDeleteAlert] = useState<null | TodoProps>(null);

    // const handleDeleteTodo = () => {
    //     console.log("USAO U FUNKCIJU", deleteAlert?._id)
    //     if (deleteAlert) deleteTodoAction(deleteAlert._id);
    //     setDeleteAlert(null);
    // }

    return (
        <div className={css.container}>
            <div className={css.todoSubject}>{todo.subject}</div>
            <div className={css.todoBody}>
                <div className={css.index}>#{index + 1}</div>
                <div className={css.content}>{todo.content}</div>
                <div className={css.created_at}>{todo.created_at}</div>
                <div className={css.actions}>
                    <div onClick={() => deleteTodoAction(todo._id)}>
                        <TrashIcon />
                    </div>
                </div>
            </div>
            {/* {!!deleteAlert &&
                <Backdrop
                    children={
                        <ConfirmationAlert
                            close={() => setDeleteAlert(null)}
                            itemToDelete={deleteAlert.subject}
                            confirmAction={handleDeleteTodo}
                        />
                    }
                    close={() => setDeleteAlert(null)}
                />
            } */}
        </div>
    )
}

export default TodoItem;