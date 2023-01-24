import React from 'react';
import css from "./TransactionItem.module.scss";

//types
import { TransactionItemProps } from '@/types/components/budget';

//assets
import DeleteIcon from "assets/trash-icon.svg";

const TransactionItem: React.FC<TransactionItemProps> = ({ item, isIncome }) => {

    return (
        <div className={css.container}>
            <div className={`${css.transactionInfo} ${isIncome ? css.incomeColor : ""}`}>
                <span>{item.subject}</span>
                <span>${item.amount}</span>
            </div>
            <div className={css.deleteWrapper}>
                <DeleteIcon />
            </div>
        </div>
    )
}

export default TransactionItem;