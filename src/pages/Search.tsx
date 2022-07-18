import React from 'react';
import { useLocation } from 'react-router-dom';
import Cards from '../components/Cards';
import NotResults from '../components/NotResults';
import Pagination from '../components/Pagination';
import useGetQuery from '../hooks/useGetQuery';
import usePagination from '../hooks/usePagination';

const Search = () => {
  const query = useLocation().pathname.split('/')[2];
  const { page } = usePagination('search', undefined, 5);
  const { data, isSuccess, isError, isLoading, totalResults } = useGetQuery({
    searchQuery: query,
    page,
  });
  if (isLoading) return <h1>Loading....</h1>;
  if (isSuccess) {
    return (
      <div className='flex flex-col px-0 md:px-4'>
        <h2 className='text-white text-2xl font-bold'>Results for: {query}</h2>
        {totalResults > 0 ? (
          <>
            <Cards items={data} />
            <Pagination page={page} />
          </>
        ) : (
          <NotResults text={`Sorry! There are no results for "${query}"`} />
        )}
      </div>
    );
  }
  return null;
};

export default Search;
