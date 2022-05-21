import React from 'react';
import { GenreId } from '../utils/types';

const GenreCards: React.FC<{ genres: GenreId[] }> = ({ genres }) => {
  return (
    <div className='flex flex-wrap gap-x-3 gap-y-4'>
      {genres.map((genre) => (
        <span
          className='text-white bg-purple-500 rounded-xl px-3 py-0.5 cursor-pointer'
          key={genre.id}>
          {genre.name}
        </span>
      ))}
    </div>
  );
};

export default GenreCards;
