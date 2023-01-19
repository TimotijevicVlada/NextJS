import React from 'react';
import css from "./CaracterItem.module.scss";

//types
import { CaracterItemProps } from '@/types/redux/caractersReducer';


const CaracterItem: React.FC<CaracterItemProps> = ({ caracter }) => {
  return (
    <div className={css.container}>
      <img src={caracter.image} alt={caracter.name} />
    </div>
  )
}

export default CaracterItem;