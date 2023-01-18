import React, { useState, useEffect } from 'react';
import css from "./UpdateTodoModal.module.scss";

//redux
import { useDispatch } from 'react-redux';
import { updateTodoAction } from '@/redux/actions/todosActions';

//types
import { UpdateTodoModalProps } from '@/types/components/todos';

const UpdateTodoModal: React.FC<UpdateTodoModalProps> = ({ itemToUpdate, close }) => {

    const dispatch = useDispatch();

    //local state
    const [input, setInput] = useState({ subject: "", content: "" });
    const [updated, setUpdated] = useState(false);

    useEffect(() => {
        setInput({
            subject: itemToUpdate.subject,
            content: itemToUpdate.content
        })
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const handleUpdate = (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!input.subject || !input.content) return;
        const updatedTodo = {
            ...itemToUpdate,
            subject: input.subject,
            content: input.content,
            created_at: new Date().toDateString()
        }
        dispatch(updateTodoAction(updatedTodo));
        setUpdated(true);
        const timeout = setTimeout(() => {
            close();
        }, 3000)
        return () => clearTimeout(timeout);
    }

    return (
        <form onSubmit={handleUpdate} className={css.container} onClick={(e) => e.stopPropagation()}>
            <h2>Update Todo</h2>
            <div className={css.subject}>
                <label htmlFor="subject">Subject</label>
                <input
                    type="text"
                    name="subject"
                    value={input.subject}
                    onChange={handleChange}
                />
            </div>
            <div className={css.content}>
                <label htmlFor="content">Your content</label>
                <textarea
                    name="content"
                    value={input.content}
                    onChange={handleChange}
                />
            </div>
            <div className={css.submitButton}>
                <button disabled={!!updated} type='submit' className={updated ? css.updated : ""}>
                    {updated ? "Todo has been updated" : "Update todo"}
                </button>
            </div>
        </form>
    )
}

export default UpdateTodoModal;