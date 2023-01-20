import React, { useEffect, useMemo } from 'react';
import css from "./SingleCaracter.module.scss";
import { useRouter } from 'next/router';

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
    const { singleCaracter } = state;

    useEffect(() => {
        //Need to put Abortcontroller here 
        if (singleCaracterId) {
            getSingleCaracterAction(singleCaracterId);
        }
    }, [singleCaracterId])

    return (
        <div className={css.container}>
            <div className={css.singleCaracter}>
                Caracter
            </div>
        </div>
    )
}

export default SingleCaracter;