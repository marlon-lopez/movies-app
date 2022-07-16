import React from 'react';
import { Link } from 'react-router-dom';
import { GenreId } from '../utils/types';

const GenreCards: React.FC<{ genres: GenreId[]; type: string }> = ({
  genres,
  type,
}) => {
  const parsePathName = (genre: GenreId, type?: string) => {
    //return to the category page or discover genre page
    if (genre.category) return `../../${type}/category/${genre.name}`;
    return `../../${type}/discover/${genre.id}`;
  };
  return (
    <div className='flex flex-wrap gap-x-3 gap-y-4 mx-8'>
      {genres.map((genre) => (
        <Link
          to={{
            pathname: parsePathName(genre, type),
          }}
          key={genre.id}>
          <span className='text-white bg-purple-500 rounded-xl px-3 py-0.5 cursor-pointer'>
            {genre.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default GenreCards;
