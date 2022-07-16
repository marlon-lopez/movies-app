import axios, { Method, AxiosError } from 'axios';
import { Movie, MovieDetails, TvShow, TvShowDetails } from './types';

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

//type would be movie or tv
export const getDetails = (
  type: string,
  id: number,
): Promise<MovieDetails | TvShowDetails> => {
  return createRequest(`${type}/${id}?&append_to_response=videos`, 'GET');
};

export const getCredits = (type: string, id: number) => {
  return createRequest(`${type}/${id}/credits`, 'GET');
};

export const getRecomendations = (
  type: string,
  id: number,
): Promise<{
  page: number;
  results: Movie[] | TvShow[];
  total_pages: number;
  total_results: number;
}> => {
  return createRequest(`${type}/${id}/recommendations?limit=10`, 'GET');
};

export const getGenres = (type: string) => {
  return createRequest(`genre/${type}/list`, 'GET');
};
export const getQuery = (query: string, page: number) => {
  return createRequest(`search/multi?query=${query}&page=${page}`, 'GET');
};

export const getDataByGenre = (type: string, genreId: number, page: number) => {
  return createRequest(
    `discover/${type}?with_genres=${genreId}&page=${page}`,
    'GET',
  );
};
