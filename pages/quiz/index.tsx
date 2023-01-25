import React from 'react';
import css from "./index.module.scss";

//components
import Quiz from "components/Quiz/Quiz/Quiz";

const index = () => {
    return (
        <div className={css.container}>
            <Quiz />
        </div>
    )
}

export default index;