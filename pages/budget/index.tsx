import React from 'react';
import css from "./index.module.scss";

//components
import Budget from '@/components/Budget/Budget/Budget';

const index = () => {
    return (
        <div className={css.container}>
            <Budget />
        </div>
    )
}

export default index;