import React from 'react';
import css from "./BudgetBody.module.scss";

//redux
import BudgetForm from '../BudgetForm/BudgetForm';

const BudgetBody = () => {

    return (
        <div className={css.container}>
            <BudgetForm type="income" />
            <BudgetForm type="expense" />
        </div>
    )
}

export default BudgetBody;