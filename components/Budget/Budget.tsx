import React from 'react';
import css from "./Budget.module.scss";

//redux
import { useDispatch, useSelector } from 'react-redux';

const Budget = () => {

    const dispatch = useDispatch();
    const amount = useSelector((state: any) => state.budgetReducer.amount);

    return (
        <div className={css.container}>
            <h1>BUDGET</h1>
        </div>
    )
}

export default Budget;