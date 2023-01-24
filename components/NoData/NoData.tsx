import React, { useMemo } from 'react';
import css from "./NoData.module.scss";

//types
import { NoDataProps } from '@/types/components/noData';

const NoData: React.FC<NoDataProps> = ({ children, text, type }) => {

    const isBudget = useMemo(() => type === "budget", [type]);

    return (
        <div className={`${css.container} ${isBudget ? css.budgetContainer : ""}`}>
            {children}
            <p>{text}</p>
        </div>
    )
}

export default NoData;