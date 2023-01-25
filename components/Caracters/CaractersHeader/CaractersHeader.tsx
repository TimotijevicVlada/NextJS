import React, { useState, useRef, useEffect } from 'react';
import css from "./CaractersHeader.module.scss";
import { debounce } from "lodash";

//assets
import ArrowDown from "assets/arrow-down.svg";
import ArrowUp from "assets/arrow-up.svg";

//types
import { CaractersHeaderProps } from '@/types/components/caracters';

const CaractersHeader: React.FC<CaractersHeaderProps> = ({ info, setSearch, setPage, status, setStatus, gender, setGender }) => {

    //refs
    const currentValueRef = useRef() as React.RefObject<HTMLButtonElement>;

    //local state
    const [statusDropdown, setStatusDropdown] = useState(false);
    const [genderDropdown, setGenderDropdown] = useState(false);

    useEffect(() => {
        const handleCloseDropdown = (e: MouseEvent) => {
            if (!currentValueRef?.current?.contains(e.target as HTMLButtonElement)) {
                setStatusDropdown(false);
                setGenderDropdown(false);
            }
        };
        document.addEventListener("click", handleCloseDropdown);
        return () => document.removeEventListener("click", handleCloseDropdown);
    }, []);

    const updateQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPage(1);
        setSearch(e.target.value);
    }

    const debounceSearch = debounce(updateQuery, 500);

    const handleStatus = (status: string) => {
        setPage(1);
        setStatus(status);
        setStatusDropdown((prev) => !prev);
    }

    const handleGender = (gender: string) => {
        setPage(1);
        setGender(gender);
        setGenderDropdown((prev) => !prev);
    }

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
                <div className={css.gender}>
                    <button className={css.activeButton} ref={currentValueRef}
                        onClick={(e) => { setGenderDropdown((prev) => !prev); e.stopPropagation() }} >
                        {!gender ? "Gender" : gender}
                        {genderDropdown ? <ArrowUp /> : <ArrowDown />}
                    </button>
                    {genderDropdown &&
                        <div className={css.dropButtons}>
                            <button onClick={() => handleGender("male")}>Male</button>
                            <button onClick={() => handleGender("female")}>Female</button>
                            <button onClick={() => handleGender("genderless")}>Genderless</button>
                            <button onClick={() => handleGender("unknown")}>Unknown</button>
                            {gender &&
                                <button onClick={() => handleGender("")}>Reset Gender</button>
                            }
                        </div>
                    }
                </div>
                <div className={css.status}>
                    <button className={css.activeButton} ref={currentValueRef}
                        onClick={(e) => { setStatusDropdown((prev) => !prev); e.stopPropagation() }} >
                        {!status ? "Status" : status}
                        {statusDropdown ? <ArrowUp /> : <ArrowDown />}
                    </button>
                    {statusDropdown &&
                        <div className={css.dropButtons}>
                            <button onClick={() => handleStatus("alive")}>Alive</button>
                            <button onClick={() => handleStatus("dead")}>Dead</button>
                            <button onClick={() => handleStatus("unknown")}>Unknown</button>
                            {status &&
                                <button onClick={() => handleStatus("")}>Reset Status</button>
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default CaractersHeader;