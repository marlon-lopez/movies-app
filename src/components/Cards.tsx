import React from 'react';
import { Movie, TvShow } from '../utils/types';
import CardItem from './CardItem';

const Cards: React.FC<{ items: (Movie | TvShow)[] }> = ({ items }) => {
  return (
    <div className='grid grid-cols-auto-fit justify-items-center gap-y-6 gap-x-2 md:gap-x-6 pb-12 mt-4  '>
      {items.map((item) => {
        return (
          <CardItem
            img={item.poster_path}
            key={item.id}
            date={
              'release_date' in item ? item.release_date : item.first_air_date
            }
            title={'title' in item ? item.title : item.name}
            id={item.id}
            type={'title' in item ? 'movie' : 'tv'}
          />
        );
      })}
    </div>
  );
};

export default Cards;
