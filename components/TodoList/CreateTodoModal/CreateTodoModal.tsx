import React, { useState } from 'react';
import css from "./CreateTodoModal.module.scss";

//uuid
import { v4 as uuid } from 'uuid';

//redux
import { useDispatch } from 'react-redux';
import { addNewTodoAction } from '@/redux/actions/todosActions';

//types
import { CreateTodoModalProps, ErrorProps, InputProps } from '@/types/components/todos';

const CreateTodoModal: React.FC<CreateTodoModalProps> = ({ close }) => {

  //redux
  const dispatch = useDispatch();

  //local state
  const [input, setInput] = useState<InputProps>({ subject: "", content: "" });
  const [created, setCreated] = useState<boolean>(false);
  const [error, setError] = useState<ErrorProps>({ subject: false, content: false });

  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    const hasErrors = handleError();
    if (hasErrors) return;
    const newTodo = {
      _id: uuid(),
      subject: input.subject,
      content: input.content,
      completed: false,
      edited: false,
      created_at: new Date().toDateString()
    }
    dispatch(addNewTodoAction(newTodo));
    setCreated(true);
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
    <form onSubmit={handleSubmit} className={css.container} onClick={(e) => e.stopPropagation()}>
      <h2>Create new Todo</h2>
      <div className={css.subject}>
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          name="subject"
          onChange={handleChange}
        />
        {error.subject && <div className={css.error}>Subject is required</div>}
      </div>
      <div className={css.content}>
        <label htmlFor="content">Your content</label>
        <textarea
          name="content"
          onChange={handleChange}
        />
        {error.content && <div className={css.error}>Content is required</div>}
      </div>
      <div className={css.submitButton}>
        <button disabled={!!created} type='submit' className={created ? css.created : ""}>
          {created ? "Todo has been created" : "Create new todo"}
        </button>
      </div>
    </form>
  )
}

export default CreateTodoModal;