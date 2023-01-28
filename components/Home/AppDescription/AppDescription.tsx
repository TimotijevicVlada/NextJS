import React from 'react';
import css from "./AppDescription.module.scss";
import { useRouter } from 'next/router';

//assets
import EnterIcon from "assets/enter-icon.svg";

//types
import { AppDescriptionProps } from '@/types/components/home';

const AppDescription: React.FC<AppDescriptionProps> = ({ item }) => {

    const router = useRouter();

    return (
        <div className={css.quizDescriptions}>
            <button className={css.quizHeader} onClick={() => router.push(item.route)}>
                <span>{item.subject}</span>
                <EnterIcon />
            </button>
            <p className={css.appDescription}>
                {item.description}
            </p>
        </div>
    )
}

export default AppDescription;