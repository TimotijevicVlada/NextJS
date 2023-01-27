import React, { useMemo } from 'react';
import css from "./BudgetSidebar.module.scss";

//types
import { BudgetSidebarProps } from '@/types/components/budget';

const BudgetSidebar: React.FC<BudgetSidebarProps> = ({ totalAmount, income, expense }) => {

    // const totalMoney = income + expense;
    const allIncomes = useMemo(() => income.reduce((curr, item) => {
        return curr + item.amount;
    }, 0), [income]);

    const allExpenses = useMemo(() => expense.reduce((curr, item) => {
        return curr + item.amount;
    }, 0), [expense])

    const totalMoney = allIncomes + allExpenses;

    return (
        <div className={css.container}>
            <h1>Your Budget</h1>
            <div className={css.balance}>
                <p>Your Balance</p>
                <p>${totalAmount.toFixed(2)}</p>
            </div>
            <div className={css.amountValues}>
                <div className={css.item}>
                    <span>Income</span>
                    <span>+${allIncomes.toFixed(2)}</span>
                </div>
                <div className={css.item}>
                    <span>Expense</span>
                    <span>-${allExpenses.toFixed(2)}</span>
                </div>
            </div>
            <div className={css.grafic}>
                <div className={css.incomeGrafic}>
                    <div
                        style={{ height: `${(allIncomes / totalMoney) * 100}%` }}
                        className={css.incomePercent}
                    />
                </div>
                <div className={css.expenseGrafic}>
                    <div
                        style={{ height: `${(allExpenses / totalMoney) * 100}%` }}
                        className={css.expensePercent}
                    />
                </div>
            </div>
        </div>
    )
}

export default BudgetSidebar;