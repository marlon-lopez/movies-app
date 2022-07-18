import React from 'react';
import ListContainer from './ListContainer';
import useGetMoviesByCategory from '../hooks/useGetMoviesByCategory';
import { MoviesCategoryKey } from '../utils/types';
import { Link } from 'react-router-dom';
import BanerSkeletonCard from './BanerSkeletonCard';

const Banner: React.FC<{ category: MoviesCategoryKey }> = ({ category }) => {
  const { data, isLoading, isSuccess } = useGetMoviesByCategory(category, 1);
  if (isLoading)
    return (
      <ListContainer title='Upcoming movies'>
        <BanerSkeletonCard />
        <BanerSkeletonCard />
        <BanerSkeletonCard />
        <BanerSkeletonCard />
        <BanerSkeletonCard />
        <BanerSkeletonCard />
      </ListContainer>
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
