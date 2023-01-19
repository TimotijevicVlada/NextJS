import React, { useEffect } from 'react';
import css from "./Caracters.module.scss";

//components
import CaracterItem from '../CaracterItem/CaracterItem';

//redux
import { getCaracters } from 'redux/actions/caractersActions';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

//types
import { State } from '@/redux/store';

const Caracters = () => {

    //redux
    const dispatch = useDispatch();
    const fetchCaracters = bindActionCreators(getCaracters, dispatch);
    const state = useSelector((state: State) => state.caractersReducer);
    const { info, results } = state;

    useEffect(() => {
        fetchCaracters();
    }, [])


    return (
        <div className={css.container}>
            <div className={css.caractersHeader}>
                Scroll down to load more caracters
            </div>
            <div className={css.caractersContainer}>
                {results.map((caracter, index) => (
                    <CaracterItem
                        key={index}
                        caracter={caracter}
                    />
                ))}
            </div>
        </div>
    )
}

export default Caracters;