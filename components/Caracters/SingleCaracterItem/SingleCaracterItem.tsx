import React from 'react';
import css from "./SingleCaracterItem.module.scss";
import { useRouter } from 'next/router';

//assets
import ExitIcon from "assets/exit-icon.svg";

//types
import { SingleCaracterItemProps } from '@/types/components/caracters';

const SingleCaracterItem: React.FC<SingleCaracterItemProps> = ({ singleCaracter }) => {

    const router = useRouter();

    return (
        <div className={css.container}>
            <div className={css.exit} onClick={() => router.push("/caracters")}>
                <ExitIcon />
            </div>
            <div className={css.caracterImage}>
                <img src={singleCaracter.image} alt={singleCaracter.name} />
            </div>
            <div className={css.caracterInfo}>
                <h2>{singleCaracter.name}</h2>
                <div className={css.singleInfo}>
                    <span>Gender</span>
                    <span>{singleCaracter.gender}</span>
                </div>
                <div className={css.singleInfo}>
                    <span>Location</span>
                    <span>{singleCaracter.location.name}</span>
                </div>
                <div className={css.singleInfo}>
                    <span>Status</span>
                    <span>{singleCaracter.status}</span>
                </div>
                <div className={css.singleInfo}>
                    <span>Species</span>
                    <span>{singleCaracter.species}</span>
                </div>
            </div>
        </div>
    )
}

export default SingleCaracterItem;