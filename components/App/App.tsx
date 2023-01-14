import React from 'react';
import css from "./App.module.scss";

//components
import Header from "components/Header/Header";

//types
import { AppProps } from 'types/app';

const App: React.FC<AppProps> = ({ children, title }) => {
    return (
        <div className={css.container}>
            <Header
                title={title}
            />
            {children}
        </div>
    )
}

export default App;