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
    const { getCaractersAction, getCaractersPaginationAction } = bindActionCreators(caractersActions, dispatch);
    const state = useSelector((state: State) => state.caractersReducer);
    const { info, results, allCaractersLoading, caractersPaginationLoader } = state;

    //local state
    const [page, setPage] = useState(1);

    useEffect(() => {
        //Here I need to add Abort Controler
        if (page > 1) return;
        getCaractersAction();
    }, []);

    useEffect(() => {
        //Here I need to add Abort Controler
        if (page === 1) return;
        getCaractersPaginationAction(page);
    }, [page]);

    return (
        <div className={css.container}>
            {allCaractersLoading ?
                <div className={css.loading}>
                    Loading...
                </div>
                :
                <>
                    <div className={css.caractersHeader}>
                        <h2>Scroll down to load more caracters</h2>
                        <span>Total: {info?.count}</span>
                    </div>
                    <InfiniteScroll
                        className={css.infiniteScroll}
                        dataLength={results.length}
                        next={() => setPage(prev => prev + 1)}
                        hasMore={true}
                        loader={caractersPaginationLoader && <div className={css.loader}>Loading...</div>}
                    >
                        {results.map((caracter, index) => (
                            <CaracterItem
                                key={index}
                                caracter={caracter}
                            />
                        ))}
                    </InfiniteScroll>
                </>
            }
        </div>
    )
}

export default Caracters;