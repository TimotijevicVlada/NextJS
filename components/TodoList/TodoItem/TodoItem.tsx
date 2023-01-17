import React, { useEffect, useState } from 'react';
import css from "./TodoItem.module.scss";

//components
import Backdrop from '@/components/Backdrop/Backdrop';
import ConfirmationAlert from '@/components/ConfirmationAlert/ConfirmationAlert';

//assets
import TrashIcon from "assets/trash-icon.svg";

//redux
import { deleteTodoAction } from '@/redux/actions/todosActions';
import { useDispatch } from 'react-redux';

//types
import { TodoItemProps } from '@/types/components/todos';
import { TodoProps } from '@/types/redux/todosReducer';

const TodoItem: React.FC<TodoItemProps> = ({ index, todo }) => {

    const dispatch = useDispatch();

    const [itemToDelete, setItemToDelete] = useState<null | TodoProps>(null);
    const [slicedContent, setSlicedContent] = useState(false);

    useEffect(() => {
        if (todo.content.length > 200) {
            setSlicedContent(true);
        }
    }, [])

    return (
        <div className={css.container}>
            <div className={css.todoSubject}>
                <h3>{todo.subject}</h3>
                <span>{todo.created_at}</span>
            </div>
            <div className={css.todoBody}>
                <div className={css.index}>#{index + 1}</div>
                <div className={css.content}>
                    {slicedContent ? todo.content.slice(0, 200) + "..." : todo.content}
                    {todo.content.length > 200 && slicedContent &&
                        <span className={css.more} onClick={() => setSlicedContent(false)}>
                            more
                        </span>}
                </div>
                <div className={css.actions}>
                    <div onClick={() => setItemToDelete(todo)}>
                        <TrashIcon />
                    </div>
                </div>
            </div>
            {!!itemToDelete &&
                <Backdrop
                    children={<ConfirmationAlert
                        close={() => setItemToDelete(null)}
                        text="You will delete"
                        itemName={itemToDelete.subject}
                        confirmAction={() => {
                            dispatch(deleteTodoAction(itemToDelete._id));
                            setItemToDelete(null)
                        }}
                    />}
                    close={() => setItemToDelete(null)}
                />
            }
        </div>
    )
}

export default TodoItem;