import React from 'react';
import { useLocation } from 'react-router-dom';
import useGetTvShowsByCategory from '../hooks/useGetTvShowsByCategory';
import TvList from '../components/TvList';
import SelectFilter from '../components/SelectFilter';
import Pagination from '../components/Pagination';
import usePagination from '../hooks/usePagination';
import { tvShowsCategoriesMap } from '../utils/CategoryMaps';
import GenreCards from '../components/GenreCards';
import ListContainer from '../components/ListContainer';

const TvShows: React.FC = () => {
  console.log('rendered');
  const { pathname } = useLocation();
  const category =
    tvShowsCategoriesMap.get(pathname.split('/')[3]) || 'popular';
  const { page } = usePagination('tvShows', category, 5);
  const { data, isError, isLoading, isSuccess, genres } =
    useGetTvShowsByCategory(category, page.currentPage);

  if (isLoading) return <h1>Loading ........</h1>;
  if (isError) return <h1>An error ocurred</h1>;
  if (isSuccess) {
    return (
      <div className='flex flex-col px-0 md:px-4'>
        <SelectFilter />
        <GenreCards genres={genres} />
        <TvList items={data} />
        <Pagination page={page} />
      </div>
    );
  }
  return null;
};

export default TvShows;
