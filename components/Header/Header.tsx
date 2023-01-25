import React from 'react';
import css from "./Header.module.scss";
import { useRouter } from 'next/router';

//assets
import HomeIcon from "assets/home-icon.svg";
import TodoIcon from "assets/todo-icon.svg";
import QuizIcon from "assets/quiz-icon.svg";
import NextIcon from "assets/nextjs-icon.svg";
import BudgetIcon from "assets/money-icon.svg";
import CaractersIcon from "assets/caracters-icon.svg";

//types
import { HeaderProps } from '@/types/components/header';

const Header: React.FC<HeaderProps> = () => {

    const router = useRouter();
    const pages = [
        { name: "Home", path: "/", icon: <HomeIcon /> },
        { name: "Quiz", path: "/quiz", icon: <QuizIcon /> },
        { name: "Todo list", path: "/todo-list", icon: < TodoIcon /> },
        { name: "Budget", path: "/budget", icon: <BudgetIcon /> },
        { name: "Caracters", path: "/caracters", icon: <CaractersIcon /> }
    ]

    const reRuting = (route: string) => {
        router.push(route);
    }

    return (
        <div className={css.container}>
            <div className={css.headerLogo}>
                <NextIcon />
            </div>
            <div className={css.mainHeaderIcons}>
                {pages.map((item, index) => (
                    <span key={index} onClick={() => reRuting(item.path)} className={item.path === router.pathname ? css.active : ""}>
                        {item.icon}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default Header;