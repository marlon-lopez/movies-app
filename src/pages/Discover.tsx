import React from 'react';
import { useLocation } from 'react-router-dom';
import Pagination from '../components/Pagination';
import usePagination from '../hooks/usePagination';
import GenreCards from '../components/GenreCards';
import Cards from '../components/Cards';
import useGetDataByGenre from '../hooks/useGetDataByGenre';
import NotResults from '../components/NotResults';
import CardsSkeleton from '../components/CardsSkeleton';

const Discover: React.FC = () => {
  const { pathname } = useLocation();
  const [_, type, category, genreId] = pathname.split('/');
  console.log('rendering discover page');
  const { page } = usePagination('discover');
  const { data, isSuccess, isLoading, isError, totalResults, returnGenre } =
    useGetDataByGenre({
      type,
      id: Number(genreId),
      page,
    });
  if (isLoading) {
    return <CardsSkeleton />;
  }
  if (isSuccess) {
    return (
      <div className='flex flex-col px-0 md:px-4'>
        <GenreCards genres={returnGenre} type={type} />
        {totalResults > 0 ? (
          <>
            <Cards items={data} />
            <Pagination page={page} />
          </>
        ) : (
          <NotResults
            text={`Sorry! There are no results for genre with id "${genreId}"`}
          />
        )}
      </div>
    );
  }
  return null;
};

export default Discover;
