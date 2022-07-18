import React from 'react';
import { useLocation } from 'react-router-dom';
import useGetMoviesByCategory from '../hooks/useGetMoviesByCategory';

import Pagination from '../components/Pagination';
import usePagination from '../hooks/usePagination';
import { moviesCategoriesMap } from '../utils/CategoryMaps';
import GenreCards from '../components/GenreCards';
import Cards from '../components/Cards';
import CardsSkeleton from '../components/CardsSkeleton';
import Error from '../components/Error';
const Movies: React.FC = () => {
  const { pathname } = useLocation();
  //get popular category in case thre is no category in parameters
  const category = moviesCategoriesMap.get(pathname.split('/')[3]) || 'popular';
  const { page } = usePagination('movies', category, 5);
  const { data, isSuccess, isLoading, isError, genres } =
    useGetMoviesByCategory(category, page.currentPage);
  if (isLoading) return <CardsSkeleton />;

  if (isSuccess)
    return (
      <div className='flex flex-col px-0 md:px-4'>
        <GenreCards genres={genres} type='movie' />
        <Cards items={data} />
        <Pagination page={page} />
      </div>
    );
  if (isError) {
    return <Error />;
  }
  return null;
};

export default Movies;
