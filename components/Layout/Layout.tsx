import React from 'react';
import css from "./Layout.module.scss";

//components
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

//types
import { AppProps } from 'types/components/app';

const Layout: React.FC<AppProps> = ({ children }) => {
    return (
        <div className={css.container}>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout;