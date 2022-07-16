import React from 'react';
import { Movie, TvShow } from '../utils/types';
import CardItem from './CardItem';

const Cards: React.FC<{ items: (Movie | TvShow)[] }> = ({ items }) => {
  return (
    <div className='grid grid-cols-auto-fit justify-items-center gap-y-6 gap-x-2 md:gap-x-6 pb-12 mt-4  '>
      {items.map((item) => {
        return <CardItem data={item} key={item.id} />;
      })}
    </div>
  );
};

export default Cards;
