import React from 'react';
import css from "./CaractersHeader.module.scss";
import { debounce } from "lodash";

//types
import { CaractersHeaderProps } from '@/types/components/caracters';

const CaractersHeader: React.FC<CaractersHeaderProps> = ({ info, setSearch }) => {

    const updateQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setSearch(`/?name=${e.target.value}`);
    }

    const debounceSearch = debounce(updateQuery, 500);

    return (
        <div className={css.caractersHeader}>
            <div className={css.headerInfo}>
                <h2>Scroll down to load more caracters</h2>
                <span>Total: {info?.count}</span>
            </div>
            <div className={css.caractersFilters}>
                <div className={css.search}>
                    <input
                        type="text"
                        placeholder='Search by name'
                        onChange={debounceSearch}
                    />
                </div>
            </div>
        </div>
    )
}

export default CaractersHeader;