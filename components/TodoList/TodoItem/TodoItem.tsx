import React, { useEffect, useMemo, useState } from 'react';
import css from "./TodoItem.module.scss";

//components
import Backdrop from '@/components/Backdrop/Backdrop';
import UpdateTodoModal from '../UpdateTodoModal/UpdateTodoModal';
import ConfirmationAlert from '@/components/ConfirmationAlert/ConfirmationAlert';

//assets
import TrashIcon from "assets/trash-icon.svg";
import EditIcon from "assets/edit-icon.svg";
import CheckIcon from "assets/check-icon.svg";
import RestoreIcon from "assets/restore-icon.svg";

//redux
import { archiveTodoAction, deleteTodoAction, checkTodoAction, restoreTodoAction } from '@/redux/actions/todosActions';
import { useDispatch } from 'react-redux';

//types
import { TodoItemProps } from '@/types/components/todos';
import { TodoProps } from '@/types/redux/todosReducer';

const TodoItem: React.FC<TodoItemProps> = ({ index, todo, filter }) => {

    //redux
    const dispatch = useDispatch();

    //variables
    const isArchived = useMemo(() => filter === "archived", [filter]);

    //local state
    const [itemToArchive, setItemToArchive] = useState<null | TodoProps>(null);
    const [itemToDelete, setItemToDelete] = useState<null | TodoProps>(null);
    const [itemToUpdate, setItemToUpdate] = useState<null | TodoProps>(null);
    const [itemToCheck, setItemToCheck] = useState<null | TodoProps>(null);
    const [itemToRestore, setItemToRestore] = useState<null | TodoProps>(null);
    const [slicedContent, setSlicedContent] = useState<boolean>(false);

    useEffect(() => {
        if (todo.content.length > 200) setSlicedContent(true);
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
                    {!isArchived &&
                        <div onClick={() => setItemToCheck(todo)} className={`${css.checkIcon} ${todo.completed ? css.completed : ""}`}>
                            <CheckIcon />
                        </div>
                    }
                    {!isArchived &&
                        <div onClick={() => setItemToUpdate(todo)} className={css.editIcon} >
                            <EditIcon />
                        </div>
                    }
                    {isArchived &&
                        <div onClick={() => setItemToRestore(todo)} className={css.restoreIcon}>
                            <RestoreIcon />
                        </div>
                    }
                    <div onClick={() => isArchived ? setItemToDelete(todo) : setItemToArchive(todo)} className={css.trashIcon}>
                        <TrashIcon />
                    </div>
                </div>
            </div>
            {(!!itemToArchive || !!itemToDelete) &&
                <Backdrop
                    children={<ConfirmationAlert
                        close={() => itemToArchive ? setItemToArchive(null) : setItemToDelete(null)}
                        text={`You will ${itemToArchive ? "archive" : "permanently delete"}`}
                        itemName={itemToArchive ? itemToArchive.subject : itemToDelete?.subject}
                        confirmAction={() => {
                            if (itemToArchive) {
                                dispatch(archiveTodoAction(itemToArchive._id));
                                setItemToArchive(null);
                            } else if (itemToDelete) {
                                dispatch(deleteTodoAction(itemToDelete._id));
                                setItemToDelete(null);
                            }
                        }}
                    />}
                    close={() => isArchived ? setItemToArchive(null) : setItemToDelete(null)}
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
            {!!itemToRestore &&
                <Backdrop
                    children={<ConfirmationAlert
                        close={() => setItemToRestore(null)}
                        text="You will restore"
                        itemName={itemToRestore.subject}
                        confirmAction={() => {
                            dispatch(restoreTodoAction(itemToRestore._id));
                            setItemToRestore(null);
                        }}
                    />}
                    close={() => setItemToRestore(null)}
                />
            }
        </div>
    )
}

export default TodoItem;