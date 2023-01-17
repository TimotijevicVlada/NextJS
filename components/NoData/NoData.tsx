import React from 'react';
import css from "./NoData.module.scss";

//types
import { NoDataProps } from '@/types/components/noData';

const NoData: React.FC<NoDataProps> = ({ children, text }) => {
    return (
        <div className={css.container}>
            {children}
            <p>{text}</p>
        </div>
    )
}

export default NoData;