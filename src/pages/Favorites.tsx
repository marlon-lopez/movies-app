import React from 'react';
import { useAppSelector } from '../features/store';

import Cards from '../components/Cards';

const Favorites = () => {
  const favorites = useAppSelector((state) => state.favorites);
  if (favorites.length) {
    return <Cards items={favorites} />;
  }
  if (!favorites.length) {
    return (
      <h1 className='text-white text-2xl text-center '>
        Seems like you haven't added any movie or tv show to your favorites
      </h1>
    );
  }

  return null;
};

export default Favorites;
