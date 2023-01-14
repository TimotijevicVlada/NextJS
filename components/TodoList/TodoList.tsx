import React from 'react';
import css from "./TodoList.module.scss";
import { useRouter } from 'next/router';

const TodoList = () => {

    const router = useRouter();

    return (
        <div className={css.container}>
            <h1>TODO LIST</h1>
            <button onClick={() => router.push("/")}>GO TO HOME PAGE</button>
        </div>
    )
}

export default TodoList