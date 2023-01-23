import React, { useState, useEffect } from 'react';
import css from "./UpdateTodoModal.module.scss";

//redux
import { useDispatch } from 'react-redux';
import { updateTodoAction } from '@/redux/actions/todosActions';

//types
import { UpdateTodoModalProps, ErrorProps, InputProps } from '@/types/components/todos';

const UpdateTodoModal: React.FC<UpdateTodoModalProps> = ({ itemToUpdate, close }) => {

    const dispatch = useDispatch();

    //local state
    const [input, setInput] = useState<InputProps>({ subject: "", content: "" });
    const [updated, setUpdated] = useState<boolean>(false);
    const [error, setError] = useState<ErrorProps>({ subject: false, content: false });

    useEffect(() => {
        setInput({
            subject: itemToUpdate.subject,
            content: itemToUpdate.content
        })
    }, [])

    const handleUpdate = (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault();
        const hasErrors = handleError();
        if (hasErrors) return;
        const updatedTodo = {
            ...itemToUpdate,
            subject: input.subject,
            content: input.content,
            edited: true,
            created_at: new Date().toDateString()
        }
        dispatch(updateTodoAction(updatedTodo));
        setUpdated(true);
        const timeout = setTimeout(() => {
            close();
        }, 1500)
        return () => clearTimeout(timeout);
    }

    const handleError = () => {
        let tempError = {} as ErrorProps;
        if (!input.subject.trim()) tempError = { ...tempError, subject: true };
        if (!input.content.trim()) tempError = { ...tempError, content: true };
        setError(tempError);
        const checkErrors = Object.values(tempError);
        return !!checkErrors.length;
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({ ...input, [e.target.name]: e.target.value });
        if (error.subject && input.subject.trim()) setError({ ...error, subject: false });
        if (error.content && input.content.trim()) setError({ ...error, content: false });
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
                {error.subject && <div className={css.error}>Subject is required</div>}
            </div>
            <div className={css.content}>
                <label htmlFor="content">Your content</label>
                <textarea
                    name="content"
                    value={input.content}
                    onChange={handleChange}
                />
                {error.content && <div className={css.error}>Content is required</div>}
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