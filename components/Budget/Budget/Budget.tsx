import React from 'react';
import css from "./Budget.module.scss";

//components
import BudgetSidebar from '../BudgetSidebar/BudgetSidebar';

//redux
import { useSelector } from 'react-redux';

//types
import { State } from 'redux/store';
import BudgetBody from '../BudgetBody/BudgetBody';

const Budget = () => {

    //redux
    const budget = useSelector((state: State) => state.budgetReducer);
    const { totalAmount, income, expense } = budget;


    return (
        <div className={css.container}>
            <BudgetSidebar
                totalAmount={totalAmount}
                income={income}
                expense={expense}
            />
            <BudgetBody
                income={income}
                expense={expense}
                totalAmount={totalAmount}
            />
        </div>
    )
}

export default Budget;