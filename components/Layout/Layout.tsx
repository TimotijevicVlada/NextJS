import React from 'react';
import css from "./Layout.module.scss";

//components
import Header from "components/Header/Header";

//types
import { AppProps } from 'types/components/app';

const Layout: React.FC<AppProps> = ({ children }) => {
    return (
        <div className={css.container}>
            <Header />
            {children}
        </div>
    )
}

export default Layout;