import React, { useEffect } from 'react';
import css from "./SingleCaracter.module.scss";
import { useRouter } from 'next/router';

//components
import SingleCaracterItem from '../SingleCaracterItem/SingleCaracterItem';

//redux
import * as caractersActions from "redux/actions/caractersActions";
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

//types
import { State } from 'redux/store';

const SingleCaracter = () => {

    const router = useRouter();
    const singleCaracterId = router.query.id;

    //redux
    const dispatch = useDispatch();
    const { getSingleCaracterAction } = bindActionCreators(caractersActions, dispatch);
    const state = useSelector((state: State) => state.caractersReducer);
    const { singleCaracter, singleCaracterloading } = state;

    useEffect(() => {
        //Need to put Abortcontroller here 
        if (singleCaracterId) {
            getSingleCaracterAction(singleCaracterId);
        }
    }, [singleCaracterId])

    return (
        <div className={css.container}>
            {singleCaracterloading ?
                <div className={css.loading}>Loading...</div>
                :
                singleCaracter &&
                <SingleCaracterItem
                    singleCaracter={singleCaracter}
                />
            }
        </div>
    )
}

export default SingleCaracter;