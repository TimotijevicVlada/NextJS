import React from 'react';
import css from "./AppTech.module.scss";

//types
import { AppTechProps } from '@/types/components/home';

const AppTech: React.FC<AppTechProps> = ({ children, name }) => {
    return (
        <div className={css.icon}>
            {children}
            <span>{name}</span>
        </div>
    )
}

export default AppTech