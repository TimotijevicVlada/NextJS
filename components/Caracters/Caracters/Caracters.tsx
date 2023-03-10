import React, { useEffect, useState } from 'react';
import css from "./Caracters.module.scss";

//components
import InfiniteScroll from "react-infinite-scroll-component";
import CaractersHeader from '../CaractersHeader/CaractersHeader';
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
    const { info, results, allCaractersLoading, caractersPaginationLoader, isError, isPaginationError } = state;

    //local state
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("");
    const [gender, setGender] = useState("");

    useEffect(() => {
        //Here I need to add Abort Controler
        if (page > 1) return;
        getCaractersAction(search, status, gender);
    }, [search, status, gender]);

    useEffect(() => {
        //Here I need to add Abort Controler
        if (page === 1) return;
        getCaractersPaginationAction(page, search, status, gender);
    }, [page]);

    return (
        <div className={css.container}>
            <CaractersHeader
                info={info}
                setSearch={setSearch}
                setPage={setPage}
                status={status}
                setStatus={setStatus}
                gender={gender}
                setGender={setGender}
            />
            {allCaractersLoading ?
                <div className={css.loading}>
                    Loading...
                </div>
                :
                isError ?
                    <div className={css.errorMessage}>
                        <p>No results for</p>
                        <span className={css.word}>{`"${search}"`}</span>
                    </div>
                    :
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
                        {isPaginationError &&
                            <div className={css.noCaracters}>
                                There is no more caracters
                            </div>
                        }
                    </InfiniteScroll>
            }
        </div>
    )
}

export default Caracters;