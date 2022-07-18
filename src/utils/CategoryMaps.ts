import { MoviesCategoryKey, TvShowsCategoryKey } from './types';

const moviesCategoriesMap: Map<string, MoviesCategoryKey> = new Map();
moviesCategoriesMap.set('popular', 'popular');
moviesCategoriesMap.set('upcoming', 'upcoming');
moviesCategoriesMap.set('popular', 'popular');
moviesCategoriesMap.set('now_playing', 'now_playing');
moviesCategoriesMap.set('top_rated', 'top_rated');

const tvShowsCategoriesMap: Map<string, TvShowsCategoryKey> = new Map();
tvShowsCategoriesMap.set('popular', 'popular');
tvShowsCategoriesMap.set('top_rated', 'top_rated');
tvShowsCategoriesMap.set('on_the_air', 'on_the_air');

export { moviesCategoriesMap, tvShowsCategoriesMap };
