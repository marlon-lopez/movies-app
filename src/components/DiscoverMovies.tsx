import React from 'react';
import ListContainer from './ListContainer';
import CardItem from './CardItem';
import useGetMoviesByCategory from '../hooks/useGetMoviesByCategory';
import { MoviesCategoryKey } from '../utils/types';
import CardSkeleton from './CardSkeleton';

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
      <ListContainer title={title}>
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </ListContainer>
    );

  if (isSuccess)
    return (
      <ListContainer title={title} search={category}>
        {data.map((movie) => (
          <CardItem data={movie} key={movie.id} />
        ))}
      </ListContainer>
    );
  return null;
};

export default DiscoverMovies;
