import React from 'react';
import css from "./BudgetBody.module.scss";

//redux
import BudgetForm from '../BudgetForm/BudgetForm';

//types
import { BudgetBodyProps } from '@/types/components/budget';

const BudgetBody: React.FC<BudgetBodyProps> = ({ income, expense, totalAmount }) => {

    return (
        <div className={css.container}>
            <BudgetForm
                type="income"
                totalAmount={totalAmount}
                income={income}
                expense={expense}
            />
            <BudgetForm
                type="expense"
                totalAmount={totalAmount}
                income={income}
                expense={expense}
            />
        </div>
    )
}

export default BudgetBody;