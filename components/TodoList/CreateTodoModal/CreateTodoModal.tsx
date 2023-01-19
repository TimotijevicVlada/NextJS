import React, { useState } from 'react';
import css from "./CreateTodoModal.module.scss";

//uuid
import { v4 as uuid } from 'uuid';

//redux
import { useDispatch } from 'react-redux';
import { addNewTodoAction } from '@/redux/actions/todosActions';

//types
import { CreateTodoModalProps } from '@/types/components/todos';

const CreateTodoModal: React.FC<CreateTodoModalProps> = ({ close }) => {

  //redux
  const dispatch = useDispatch();

  //local state
  const [input, setInput] = useState({ subject: "", content: "" });
  const [created, setCreated] = useState(false);

  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.subject || !input.content) return;
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInput({ ...input, [e.target.name]: e.target.value });
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
      </div>
      <div className={css.content}>
        <label htmlFor="content">Your content</label>
        <textarea
          name="content"
          onChange={handleChange}
        />
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