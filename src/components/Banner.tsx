import React, { useEffect } from 'react';
import ListContainer from './ListContainer';
import useGetMoviesByCategory from '../hooks/useGetMoviesByCategory';
import { MoviesCategoryKey } from '../utils/types';
import { Link } from 'react-router-dom';

const Banner: React.FC<{ category: MoviesCategoryKey }> = ({ category }) => {
  const { data, isLoading, isSuccess } = useGetMoviesByCategory(category, 1);
  console.log('banner rendered');
  if (isLoading)
    return (
      <h1 className='text-white font-medium text-base '>Cargando........</h1>
    );
  if (isSuccess)
    return (
      <ListContainer title='Upcoming movies' search='upcoming'>
        {data.map((movie) => (
          <div
            className='flex-shrink-0 mx-2 overflow-hidden bg-primary-blue-blue md:mx-5'
            key={movie.id}>
            <Link to={{ pathname: `movie/${movie.id}` }}>
              <div className='w-96 bg-secondary-blue xl:min-w-max'>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                  alt={movie.title}
                />
              </div>
            </Link>
            <div>
              <h4 className='text-white font-medium text-base '>
                {movie.title}
              </h4>
              <p className='text-gray-500 text-xs '>{movie.release_date}</p>
            </div>
          </div>
        ))}
      </ListContainer>
    );
  return null;
};

export default Banner;
