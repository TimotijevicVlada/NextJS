import React, { useState } from 'react';
import css from "./TransactionItem.module.scss";

//components
import ConfirmationAlert from '@/components/ConfirmationAlert/ConfirmationAlert';
import Backdrop from '@/components/Backdrop/Backdrop';

//types
import { TransactionItemProps, TransactionItem } from '@/types/components/budget';

//assets
import DeleteIcon from "assets/trash-icon.svg";

//redux
import { useDispatch } from 'react-redux';
import { deleteTransactionItem } from '@/redux/actions/budgetActions';

const TransactionItem: React.FC<TransactionItemProps> = ({ item, isIncome }) => {

    const dispatch = useDispatch();

    //local state
    const [itemToDelete, setItemToDelete] = useState<TransactionItem | null>(null);

    return (
        <div className={css.container}>
            <div className={`${css.transactionInfo} ${isIncome ? css.incomeColor : ""}`}>
                <span>{item.subject}</span>
                <span>${item.amount}</span>
            </div>
            <div className={css.deleteWrapper} onClick={() => setItemToDelete(item)}>
                <DeleteIcon />
            </div>

            {!!itemToDelete &&
                <Backdrop
                    children={<ConfirmationAlert
                        close={() => setItemToDelete(null)}
                        itemName={`transaction of ${itemToDelete.subject}`}
                        text="You will delete"
                        confirmAction={() => {
                            dispatch(deleteTransactionItem(itemToDelete));
                            setItemToDelete(null);
                        }}
                    />}
                    close={() => setItemToDelete(null)}
                />
            }
        </div>
    )
}

export default TransactionItem;