import React from 'react';
import css from "./BudgetBody.module.scss";

//redux
import BudgetForm from '../BudgetForm/BudgetForm';

//types
import { BudgetBodyProps } from '@/types/components/budget';

const BudgetBody: React.FC<BudgetBodyProps> = ({ totalAmount }) => {

    return (
        <div className={css.container}>
            <BudgetForm
                type="income"
                totalAmount={totalAmount}
            />
            <BudgetForm
                type="expense"
                totalAmount={totalAmount}
            />
        </div>
    )
}

export default BudgetBody;