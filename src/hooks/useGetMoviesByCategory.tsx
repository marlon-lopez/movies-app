import { useEffect } from 'react';
import { fetchMovies } from '../features/moviesSlice';
import { useAppDispatch, useAppSelector } from '../features/store';
import { MoviesCategoryKey } from '../utils/types';

const useGetListByCategory = (category: MoviesCategoryKey, page: number) => {
  const dispatch = useAppDispatch();
  let { genres } = useAppSelector((state) => state.movies);
  const movieGenres = useAppSelector((state) => state.discover.genres.movie);
  genres = [...genres, ...movieGenres];
  const { listByPage, totalPages, loading } = useAppSelector(
    (state) => state.movies[category],
  );
  useEffect(() => {
    if (!listByPage[page]) {
      dispatch(fetchMovies({ category, page }));
    }
  }, [page, category, dispatch]);

  const data = listByPage[page];
  const isLoading = loading === 'pending';
  const isError = loading === 'failed';
  const isSuccess = listByPage[page] !== undefined ? true : false;
  return { data, totalPages, isLoading, isError, isSuccess, genres };
};

export default useGetListByCategory;
