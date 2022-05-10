import { useEffect } from 'react';
import { fetchMovies } from '../features/moviesSlice';
import { useAppDispatch, useAppSelector } from '../features/store';
import { MoviesCategoryKey } from '../utils/types';

const useGetListByCategory = (category: MoviesCategoryKey, page: number) => {
  const dispatch = useAppDispatch();
  const { listByPage, totalPages, loading } = useAppSelector(
    (state) => state.movies[category],
  );
  useEffect(() => {
    if (!listByPage[page]) {
      console.log('fetching page:', page, 'category', category);
      dispatch(fetchMovies({ category, page }));
    }
  }, [page, category, dispatch]);

  const data = listByPage[page];
  const isLoading = loading === 'pending';
  const isError = loading === 'failed';
  const isSuccess = listByPage[page] !== undefined ? true : false;
  return { data, totalPages, isLoading, isError, isSuccess };
};

export default useGetListByCategory;
