import React from 'react';
import css from "./Home.module.scss";

//variables
import { appDescription } from './HomeInfo';

//assets
import JSicon from "assets/js-icon.svg";
import TSicon from "assets/ts-icon.svg";
import ReactIcon from "assets/react-icon.svg";
import ReduxIcon from "assets/redux-icon.svg";
import NextIcon from "assets/next-js-icon.svg";
import ScssIcon from "assets/scss-icon.svg";
import HTMLicon from "assets/html-icon.svg";
import NPMicon from "assets/npm-icon.svg";

//components
import AppTech from './AppTech/AppTech';
import AppDescription from './AppDescription/AppDescription';

const Home = () => {

    //variables
    const tech = [
        { name: "HTML", icon: <HTMLicon /> },
        { name: "Scss(SASS)", icon: <ScssIcon /> },
        { name: "JavaScript", icon: <JSicon /> },
        { name: "TypeScript", icon: <TSicon /> },
        { name: "React", icon: <ReactIcon /> },
        { name: "Redux", icon: <ReduxIcon /> },
        { name: "Next.js", icon: <NextIcon /> },
        { name: "NPM", icon: <NPMicon /> }
    ]


    return (
        <div className={css.container}>
            <h1>Welcome to my skills demo app</h1>
            <p className={css.firstParagraph}>This app contains Quiz app, Budget app, Todo list and Rick and Morty characters.</p>
            <p className={css.secondParagraph}>It's built by the following frontend technologies:</p>
            <div className={css.icons}>
                {tech.map((item, index) => (
                    <AppTech
                        key={index}
                        name={item.name}
                    >
                        {item.icon}
                    </AppTech>
                ))}
            </div>
            {appDescription.map((item, index) => (
                <AppDescription
                    key={index}
                    item={item}
                />
            ))}
        </div>
    )
}

export default Home;