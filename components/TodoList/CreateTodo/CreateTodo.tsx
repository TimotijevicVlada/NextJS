import React, { useState } from 'react';
import css from "./CreateTodo.module.scss";

//uuid
import { v4 as uuid } from 'uuid';

//redux
import { useDispatch } from 'react-redux';
import { addNewTodo } from '@/redux/actions/todosActions';

//types
import { CreateTodoProps } from '@/types/components/createTodo';

const CreateTodo: React.FC<CreateTodoProps> = ({ close }) => {

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
      created_at: new Date().toDateString()
    }
    dispatch(addNewTodo(newTodo));
    setCreated(true);
    const timeout = setTimeout(() => {
      close();
    }, 2500)
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
        <button type='submit'>Create new todo</button>
      </div>
      {created &&
        <div className={css.createdTodo}>
          New Todo has been created
        </div>
      }
    </form>
  )
}

export default CreateTodo;