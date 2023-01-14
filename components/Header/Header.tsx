import React from 'react';
import css from "./Header.module.scss";
import { useRouter } from 'next/router';

//types
import { HeaderProps } from 'types/header';

const Header: React.FC<HeaderProps> = ({ title }) => {

    const router = useRouter();
    const pages = [
        { name: "Home", path: "/" },
        { name: "Todo list", path: "/todo-list" },
        { name: "Budget", path: "/budget" }
    ]

    const reRuting = (route: string) => {
        router.push(route);
    }

    return (
        <div className={css.container}>
            <div className={css.headerLogo}>
                <h2>Next.JS</h2>
            </div>
            <div className={css.mainHeaderIcons}>
                {pages.map((item, index) => (
                    <span key={index} onClick={() => reRuting(item.path)} className={item.path === router.pathname ? css.active : ""}>
                        {item.name}
                    </span>
                ))}
            </div>
            <div className={css.headerUser}>
                User
            </div>
        </div>
    )
}

export default Header;