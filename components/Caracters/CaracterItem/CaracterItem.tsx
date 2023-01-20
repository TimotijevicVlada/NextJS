import React from 'react';
import css from "./CaracterItem.module.scss";
import { useRouter } from 'next/router';

//types
import { CaracterItemProps } from '@/types/redux/caractersReducer';

const CaracterItem: React.FC<CaracterItemProps> = ({ caracter }) => {

  const router = useRouter();

  return (
    <div className={css.container} onClick={() => router.push(`single-caracter/${caracter.id}`)}>
      <img src={caracter.image} alt={caracter.name} />
    </div>
  )
}

export default CaracterItem;