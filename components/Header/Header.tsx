import React from 'react';
import css from "./Header.module.scss";
import { useRouter } from 'next/router';

//assets
import HomeIcon from "assets/home-icon.svg";
import TodoIcon from "assets/todo-icon.svg";
import BudgetIcon from "assets/money-icon.svg";

//types
import { HeaderProps } from '@/types/components/header';

const Header: React.FC<HeaderProps> = () => {

    const router = useRouter();
    const pages = [
        { name: "Home", path: "/", icon: <HomeIcon /> },
        { name: "Todo list", path: "/todo-list", icon: < TodoIcon /> },
        { name: "Budget", path: "/budget", icon: <BudgetIcon /> }
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
                        {item.icon}
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