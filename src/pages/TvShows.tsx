import React from 'react';
import { useLocation } from 'react-router-dom';
import useGetTvShowsByCategory from '../hooks/useGetTvShowsByCategory';
import Pagination from '../components/Pagination';
import usePagination from '../hooks/usePagination';
import { tvShowsCategoriesMap } from '../utils/CategoryMaps';
import GenreCards from '../components/GenreCards';
import Cards from '../components/Cards';
import CardsSkeleton from '../components/CardsSkeleton';
import Error from '../components/Error';

const TvShows: React.FC = () => {
  const { pathname } = useLocation();
  const category =
    tvShowsCategoriesMap.get(pathname.split('/')[3]) || 'popular';
  const { page } = usePagination('tvShows', category, 5);
  const { data, isError, isLoading, isSuccess, genres } =
    useGetTvShowsByCategory(category, page.currentPage);

  if (isLoading) return <CardsSkeleton />;
  if (isSuccess) {
    return (
      <div className='flex flex-col px-0 md:px-4'>
        <GenreCards genres={genres} type='tv' />
        <Cards items={data} />
        <Pagination page={page} />
      </div>
    );
  }
  if (isError) {
    return <Error />;
  }
  return null;
};

export default TvShows;
