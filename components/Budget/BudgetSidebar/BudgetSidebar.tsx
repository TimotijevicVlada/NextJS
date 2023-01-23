import React from 'react';
import css from "./BudgetSidebar.module.scss";

//types
import { BudgetSidebarProps } from '@/types/components/budget';

const BudgetSidebar: React.FC<BudgetSidebarProps> = ({ totalAmount, income, expense }) => {
    return (
        <div className={css.container}>
            <h2>Your Budget</h2>
            <div className={css.balance}>
                <p>Your Balance</p>
                <p>${totalAmount.toFixed(2)}</p>
            </div>
            <div className={css.grafic}>
                <div className={css.item}>
                    <span>Income</span>
                    <span>+${income.toFixed(2)}</span>
                </div>
                <div className={css.item}>
                    <span>Expense</span>
                    <span>-${expense.toFixed(2)}</span>
                </div>
            </div>
        </div>
    )
}

export default BudgetSidebar;