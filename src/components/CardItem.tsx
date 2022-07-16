import React from 'react';
import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../features/store';

import {
  addToFavorites,
  removeFromFavorites,
} from '../features/favoritesSlice';
import { Movie, TvShow } from '../utils/types';
import FavButton from './FavButton';

const CardItem: React.FC<{ data: Movie | TvShow }> = ({ data }) => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.favorites);

  const date = 'release_date' in data ? data.release_date : data.first_air_date;

  const title = 'title' in data ? data.title : data.name;
  const type = 'title' in data ? 'movie' : 'tv';

  const favAction = (id: number) => {
    if (favorites)
      return !favorites.find((obj) => obj.id === id)
        ? dispatch(addToFavorites(data))
        : dispatch(removeFromFavorites(id));
  };

  return (
    <div className='flex-shrink-0 mx-2 overflow-hidden bg-primary-blue-blue md:mx-5 max-w-min'>
      <div className='w-36'>
        <Link to={{ pathname: `../../${type}/${data.id}` }}>
          <img
            className='rounded-lg object-cover max-w-full h-auto'
            src={`https://image.tmdb.org/t/p/w342/${data.poster_path}`}
            alt={title}
          />
        </Link>
      </div>
      <div>
        <h4 className='text-white font-medium text-base'>{title}</h4>
        <div className='flex justify-between items-center'>
          <p className='text-gray-500 text-xs '>{date}</p>
          <FavButton
            action={() => favAction(data.id)}
            isFavorite={
              favorites.find((obj) => obj.id === data.id) ? true : false
            }
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(CardItem);
