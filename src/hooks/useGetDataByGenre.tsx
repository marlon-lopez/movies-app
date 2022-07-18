import { useEffect } from 'react';
import { fetchDataByGenre, fetchGenres } from '../features/discoverSlice';
import { useAppDispatch, useAppSelector } from '../features/store';

interface Props {
  type: string;
  id: number;
  page: {
    currentPage: number;
    pageNumbers: (string | number)[];
    isFirst: boolean;
    isLast: boolean;
    prev: () => void;
    next: () => void;
    goTo: (page: number) => void;
  };
}

const useGetDataByGenre = ({ type, id, page }: Props) => {
  const dispatch = useAppDispatch();

  const { results, loading, totalPages, genreId, genres, totalResults } =
    useAppSelector((state) => state.discover);
  useEffect(() => {
    if (!genres.movie.length) dispatch(fetchGenres());

    if (!results[page.currentPage]) {
      console.log('no existe esa data, fetching');
      dispatch(fetchDataByGenre({ type, genreId: id, page: page.currentPage }));
    }
    if (genreId && id !== genreId) {
      console.log('id es diferente, fetching');
      page.goTo(1);
      dispatch(fetchDataByGenre({ type, genreId: id, page: 1 }));
    }
  }, [page.currentPage, dispatch, id, type]);

  const data = results[page.currentPage];
  const isLoading = loading === 'pending';
  const isError = loading === 'failed';
  const isSuccess = results[page.currentPage] !== undefined ? true : false;
  const returnGenre = type !== 'tv' ? genres.tv : genres.movie;
  return {
    data,
    totalPages,
    totalResults,
    isLoading,
    isError,
    isSuccess,
    returnGenre,
  };
};

export default useGetDataByGenre;
