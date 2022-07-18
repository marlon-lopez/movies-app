import { useEffect } from 'react';
import { fetchQuery, resetState } from '../features/searchSlice';
import { useAppDispatch, useAppSelector } from '../features/store';

interface Props {
  searchQuery: string;
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

const useGetQuery = ({ searchQuery, page }: Props) => {
  const dispatch = useAppDispatch();
  const { results, loading, query, totalResults } = useAppSelector(
    (state) => state.search,
  );

  useEffect(() => {
    if (!query) {
      dispatch(fetchQuery({ query: searchQuery, page: 1 }));
    }
    if (searchQuery != query) {
      page.goTo(1);
      dispatch(fetchQuery({ query: searchQuery, page: 1 }));
    }
    if (!results[page.currentPage]) {
      dispatch(fetchQuery({ query: searchQuery, page: page.currentPage }));
    }
  }, [page.currentPage, dispatch, searchQuery, resetState]);
  const data = results[page.currentPage];
  const isLoading = loading === 'pending';
  const isError = loading === 'failed';
  const isSuccess = results[page.currentPage] !== undefined ? true : false;
  return { data, isLoading, isError, isSuccess, totalResults };
};

export default useGetQuery;
