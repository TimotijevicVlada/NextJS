import React, { useEffect, useState } from 'react';
import css from "./TodoItem.module.scss";

//components
import Backdrop from '@/components/Backdrop/Backdrop';
import UpdateTodoModal from '../UpdateTodoModal/UpdateTodoModal';
import ConfirmationAlert from '@/components/ConfirmationAlert/ConfirmationAlert';

//assets
import TrashIcon from "assets/trash-icon.svg";
import EditIcon from "assets/edit-icon.svg";
import CheckIcon from "assets/check-icon.svg";

//redux
import { deleteTodoAction } from '@/redux/actions/todosActions';
import { checkTodoAction } from '@/redux/actions/todosActions';
import { useDispatch } from 'react-redux';

//types
import { TodoItemProps } from '@/types/components/todos';
import { TodoProps } from '@/types/redux/todosReducer';

const TodoItem: React.FC<TodoItemProps> = ({ index, todo }) => {

    const dispatch = useDispatch();

    const [itemToDelete, setItemToDelete] = useState<null | TodoProps>(null);
    const [itemToUpdate, setItemToUpdate] = useState<null | TodoProps>(null);
    const [itemToCheck, setItemToCheck] = useState<null | TodoProps>(null);
    const [slicedContent, setSlicedContent] = useState(false);

    useEffect(() => {
        if (todo.content.length > 200) {
            setSlicedContent(true);
        }
    }, [])

    return (
        <div className={css.container}>
            <div className={css.todoSubject}>
                <h3>{todo.subject} {todo.edited && <span>(edited)</span>}</h3>
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
                    <div onClick={() => setItemToCheck(todo)} className={`${css.checkIcon} ${todo.completed ? css.completed : ""}`}>
                        <CheckIcon />
                    </div>
                    <div onClick={() => setItemToUpdate(todo)} className={css.editIcon} >
                        <EditIcon />
                    </div>
                    <div onClick={() => setItemToDelete(todo)} className={css.trashIcon}>
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
                            setItemToDelete(null);
                        }}
                    />}
                    close={() => setItemToDelete(null)}
                />
            }
            {!!itemToUpdate &&
                <Backdrop
                    children={<UpdateTodoModal
                        itemToUpdate={itemToUpdate}
                        close={() => setItemToUpdate(null)}
                    />}
                    close={() => setItemToUpdate(null)}
                />
            }
            {!!itemToCheck &&
                <Backdrop
                    children={<ConfirmationAlert
                        close={() => setItemToCheck(null)}
                        text={`You will ${itemToCheck.completed ? "uncheck" : "check"}`}
                        itemName={itemToCheck.subject}
                        confirmAction={() => {
                            dispatch(checkTodoAction(itemToCheck._id));
                            setItemToCheck(null);
                        }}
                    />}
                    close={() => setItemToCheck(null)}
                />
            }
        </div>
    )
}

export default TodoItem;