import React from 'react';
import { useLocation } from 'react-router-dom';
import Pagination from '../components/Pagination';
import usePagination from '../hooks/usePagination';
import GenreCards from '../components/GenreCards';
import Cards from '../components/Cards';
import useGetDataByGenre from '../hooks/useGetDataByGenre';

const Discover: React.FC = () => {
  const { pathname } = useLocation();
  const [_, type, category, genreId] = pathname.split('/');
  console.log('rendering discover page');
  const { page } = usePagination('discover');
  const { data, isSuccess, isLoading, returnGenre } = useGetDataByGenre({
    type,
    id: Number(genreId),
    page,
  });
  if (isLoading)
    return (
      <h1 className='text-white font-medium text-base '>Cargando........</h1>
    );

  if (isSuccess)
    return (
      <div className='flex flex-col px-0 md:px-4'>
        <GenreCards genres={returnGenre} type={type} />
        <Cards items={data} />
        <Pagination page={page} />
      </div>
    );

  return null;
};

export default Discover;
