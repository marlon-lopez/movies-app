import React from 'react';
import { useLocation } from 'react-router-dom';
import SelectFilter from '../components/SelectFilter';
import MovieList from '../components/MovieList';
import useGetMoviesByCategory from '../hooks/useGetMoviesByCategory';
import Pagination from '../components/Pagination';
import usePagination from '../hooks/usePagination';
import { moviesCategoriesMap } from '../utils/CategoryMaps';
import GenreCards from '../components/GenreCards';
const Movies: React.FC = () => {
  const { pathname } = useLocation();
  //get popular category in case thre is no category in parameters
  const category = moviesCategoriesMap.get(pathname.split('/')[3]) || 'popular';
  const { page } = usePagination('movies', category, 5);
  const { data, isSuccess, isLoading, genres } = useGetMoviesByCategory(
    category,
    page.currentPage,
  );
  if (isLoading)
    return (
      <h1 className='text-white font-medium text-base '>Cargando........</h1>
    );

  if (isSuccess)
    return (
      <div className='flex flex-col px-0 md:px-4'>
        <SelectFilter />
        <GenreCards genres={genres} />
        <MovieList items={data} />
        <Pagination page={page} />
      </div>
    );
  return null;
};

export default Movies;
