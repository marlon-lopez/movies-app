import { MoviesSliceState } from '../../features/moviesSlice';
import { RootState } from '../../features/store';
import { TvShowSliceState } from '../../features/tvShowsSlice';

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  genders?: string[];
}

export interface TvShow {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

export interface GenreId {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface SpokenLanguages {
  english_name: string;
  iso_639_1: string;
  name: string;
}
interface ProductionCountries {
  iso_3166_1: string;
  name: string;
}
interface Video {
  id: string;
  iso_3166_1: string;
  iso_639_1: string;
  key: string;
  name: string;
  official: boolean;
  published_at: string;
  site: string;
  size: number;
  type: string;
}
export interface Videos {
  results: Video[];
}

export interface Cast {
  adult: boolean;
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  order: number;
  original_name: string;
  popularity: number;
  profile_path: string;
}

export interface MovieDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: boolean | null;
  budget: number;
  genres: GenreId[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountries[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguages[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  videos: Videos;
  cast: Cast[];
  recomendations: Movie[];
  vote_average: number;
  vote_count: number;
}
interface Netwok {
  id: number;
  name: string;
}
interface Season {
  air_date: string | null;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
}

interface Episode {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  runtime: number;
  season_number: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
}

interface Creator {
  credit_id: string;
  gender: number;
  id: number;
  name: string;
  profile_path: string;
}

export interface TvShowDetails {
  adult: false;
  backdrop_path: string;
  created_by: Creator[];
  episode_run_time: number[];
  first_air_date: string;
  genres: GenreId[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: Episode[];
  name: string;
  networks: Netwok[];
  next_episode_to_air: null | number;
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountries[];
  seasons: Season[];
  spoken_languages: SpokenLanguages[];
  status: string;
  tagline: string;
  cast: Cast[];
  recomendations: TvShow[];
  videos: Videos;
  type: string;
  vote_average: number;
  vote_count: number;
}

export type MoviesQueryResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};
export type TvShowsQueryResponse = {
  page: number;
  results: TvShow[];
  total_pages: number;
  total_results: number;
};

export type MovieCategory = {
  currentPage: number;
  totalPages: number;
  totalResults: number;
  listByPage: Record<string, Movie[]>;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
};
export type TvShowCategory = {
  currentPage: number;
  totalPages: number;
  totalResults: number;
  listByPage: Record<string, TvShow[]>;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
};
export type Category<List> = {
  currentPage: number;
  totalPages: number;
  totalResults: number;
  listByPage: Record<string, List[]>;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
};

export type MoviesCategoryKey = Exclude<keyof MoviesSliceState, 'genres'>;
export type TvShowsCategoryKey = Exclude<keyof TvShowSliceState, 'genres'>;
export type RootStateEntries = keyof RootState;
