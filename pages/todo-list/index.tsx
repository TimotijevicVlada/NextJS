import React from 'react';
import css from "./index.module.scss";

//components
import App from 'components/App/App';
import TodoList from 'components/TodoList/TodoList';

const index = () => {

  return (
    <App title="TodoList">
      <TodoList />
    </App>
  )
}

export default index;