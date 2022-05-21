import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../features/store';
import { fetchTvShows, fetchTvShowsGenres } from '../features/tvShowsSlice';
import { TvShowsCategoryKey } from '../utils/types';

const useGetTvShowsByCategory = (
  category: TvShowsCategoryKey,
  page: number,
) => {
  const dispatch = useAppDispatch();
  const { genres } = useAppSelector((state) => state.tvShows);
  const { listByPage, loading, totalPages } = useAppSelector(
    (state) => state.tvShows[category],
  );

  useEffect(() => {
    if (genres.length === 0) {
      dispatch(fetchTvShowsGenres());
    }
    return;
  }, []);
  useEffect(() => {
    if (!listByPage[page]) {
      dispatch(fetchTvShows({ category, page }));
    }
  }, [page, dispatch, category]);

  const data = listByPage[page];
  const isLoading = loading === 'pending';
  const isError = loading === 'failed';
  const isSuccess = listByPage[page] !== undefined ? true : false;
  return { data, totalPages, isLoading, isError, isSuccess, genres };
};

export default useGetTvShowsByCategory;
