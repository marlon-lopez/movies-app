import React from 'react';
import { Movie } from '../utils/types';
import CardItem from './CardItem';

const MovieList: React.FC<{ items: Movie[] }> = ({ items }) => {
  return (
    <div className='grid grid-cols-auto-fit justify-items-center gap-y-6 gap-x-2 md:gap-x-6 pb-12 mt-4  '>
      {items.map((item) => (
        <CardItem data={item} />
      ))}
    </div>
  );
};

export default MovieList;
