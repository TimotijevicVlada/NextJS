import React from 'react';
import css from "./Backdrop.module.scss";

//types
import { BackdropProps } from '@/types/components/backdrop';

const Backdrop: React.FC<BackdropProps> = ({ children, close }) => {
    return (
        <div className={css.container} onClick={close}>
            {children}
        </div>
    )
}

export default Backdrop;