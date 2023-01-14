import React from 'react';
import css from "./Header.module.scss";
import { useRouter } from 'next/router';

const Header = () => {

    const router = useRouter();

    const reRuting = (route: string) => {
        router.push(route);
    }

    return (
        <div className={css.container}>
            <div className={css.headerLogo}>
                <h2>Next.JS</h2>
            </div>
            <div className={css.mainHeaderIcons}>
                <span onClick={() => reRuting("/")}>Home</span>
                <span onClick={() => reRuting("/todo-list")}>Todo</span>
                <span onClick={() => reRuting("/")}>Settings</span>
            </div>
            <div className={css.headerUser}>
                User
            </div>
        </div>
    )
}

export default Header;