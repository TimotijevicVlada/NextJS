import React from 'react';
import css from "./ConfirmationAlert.module.scss";

//types
import { ConfirmationAlertProps } from '@/types/components/confirmationAlert';

const ConfirmationAlert: React.FC<ConfirmationAlertProps> = ({ close, itemName, text, confirmAction }) => {
    return (
        <div className={css.container} onClick={e => e.stopPropagation()}>
            <h2>Are you sure?</h2>
            <p className={css.text}>{text}</p>
            <p className={css.itemName}>{itemName}</p>
            <div className={css.actionButtons}>
                <button onClick={close}>Cancel</button>
                <button onClick={confirmAction}>Yes</button>
            </div>
        </div>
    )
}

export default ConfirmationAlert;