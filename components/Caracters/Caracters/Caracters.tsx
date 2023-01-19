import React, { useEffect, useState } from 'react';
import css from "./Caracters.module.scss";

//components
import InfiniteScroll from "react-infinite-scroll-component";
import CaracterItem from '../CaracterItem/CaracterItem';

//redux
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import * as caractersActions from "redux/actions/caractersActions";

//types
import { State } from 'redux/store';

const Caracters = () => {

    //redux
    const dispatch = useDispatch();
    const { getCaracters, getCaractersPagination } = bindActionCreators(caractersActions, dispatch);
    const state = useSelector((state: State) => state.caractersReducer);
    const { info, results } = state;

    //local state
    const [page, setPage] = useState(1);

    useEffect(() => {
        //Here I need to add Abort Controler
        if (page > 1) return;
        getCaracters();
    }, []);

    useEffect(() => {
        //Here I need to add Abort Controler
        if (page === 1) return;
        getCaractersPagination(page);
    }, [page]);

    return (
        <div className={css.container}>
            <div className={css.caractersHeader}>
                Scroll down to load more caracters
            </div>
            <InfiniteScroll
                className={css.infiniteScroll}
                dataLength={results.length}
                next={() => setPage(prev => prev + 1)}
                hasMore={true}
                loader={null}
            >
                {results.map((caracter, index) => (
                    <CaracterItem
                        key={index}
                        caracter={caracter}
                    />
                ))}
            </InfiniteScroll>
        </div>
    )
}

export default Caracters;