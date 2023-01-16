import React from 'react';
import css from "./Budget.module.scss";

//redux
import { useDispatch, useSelector } from 'react-redux';

//types
import { AllReducersProps } from '@/types/redux/allReducers';

const Budget = () => {

    const dispatch = useDispatch();
    const budget = useSelector((state: AllReducersProps) => state.budgetReducer);
    const { totalAmount, income, expenses } = budget;


    return (
        <div className={css.container}>
            <h1>BUDGET</h1>
        </div>
    )
}

export default Budget;