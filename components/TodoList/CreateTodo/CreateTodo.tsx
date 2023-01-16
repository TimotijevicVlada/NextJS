import React from 'react';
import css from "./CreateTodo.module.scss";

const CreateTodo = ({ }) => {
  return (
    <div className={css.container} onClick={(e) => e.stopPropagation()}>
      Create new todo
    </div>
  )
}

export default CreateTodo;