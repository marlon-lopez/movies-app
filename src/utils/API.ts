import axios, { Method, AxiosError } from 'axios';
import { MoviesQueryResponse } from './types';

const createRequest = async (url: string, method: Method) => {
  try {
    const response = await axios.request({
      baseURL: 'https://api.themoviedb.org/3',
      url,
      method,
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
        'Content-Type': 'application/json;charset=utf-8',
      },
    });
    return response.data;
  } catch (error) {
    function isAxiosError(err: any): err is AxiosError {
      return err.isAxiosError === true;
    }
    if (isAxiosError(error)) {
      throw new Error(error.message);
    }
  }
};

export const fetchMoviesByCategory = (category: string, page: number) => {
  return createRequest(`/movie/${category}?language=en-US&page=${page}`, 'GET');
};

export const fetchTvShowsByCategory = (category: string, page: number = 1) => {
  return createRequest(`/tv/${category}?language=en-US&page=${page}`, 'GET');
};
export const fetchGenreList = () => {
  return createRequest(`/genre/movie/list`, 'GET');
};

export const fetchMovieDetails = (id: number) => {
  return createRequest(`movie/${id}`, 'GET');
};

export const fetchTvShowDetails = (id: number) => {
  return createRequest(`tv/${id}`, 'GET');
};

export const fetchTvShowVideo = (id: number) => {
  return createRequest(`tv/${id}/videos`, 'GET');
};
