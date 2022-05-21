import React from 'react';
import ListContainer from './ListContainer';
import CardItem from './CardItem';
import useGetMoviesByCategory from '../hooks/useGetMoviesByCategory';
import { MoviesCategoryKey, Movie } from '../utils/types';

interface Props {
  title: string;
  category: MoviesCategoryKey;
}
const DiscoverMovies: React.FC<Props> = ({ title, category }) => {
  const { data, isLoading, isSuccess } = useGetMoviesByCategory(
    category,

    1,
  );
  if (isLoading)
    return (
      <h1 className='text-white font-medium text-base '>Cargando........</h1>
    );

  if (isSuccess)
    return (
      <ListContainer title={title} search={category}>
        {data.map((movie) => (
          <CardItem
            img={movie.poster_path}
            key={movie.id}
            date={movie.release_date}
            title={movie.title}
            id={movie.id}
            type={'movie'}
          />
        ))}
      </ListContainer>
    );
  return null;
};

export default DiscoverMovies;
