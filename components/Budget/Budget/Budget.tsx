import React from 'react';
import css from "./Budget.module.scss";

//components
import BudgetSidebar from '../BudgetSidebar/BudgetSidebar';

//redux
import { useDispatch, useSelector } from 'react-redux';

//types
import { State } from 'redux/store';

const Budget = () => {

    const dispatch = useDispatch();
    const budget = useSelector((state: State) => state.budgetReducer);
    const { totalAmount, income, expense } = budget;


    return (
        <div className={css.container}>
            <BudgetSidebar
                totalAmount={totalAmount}
                income={income}
                expense={expense}
            />
            <div className={css.budgetBody}>
                BUDGET BODY
            </div>
        </div>
    )
}

export default Budget;