import React from 'react';

import { HeartIcon } from '@heroicons/react/outline';
import { HeartIcon as SolidHeartIcon } from '@heroicons/react/solid';

const FavButton: React.FC<{
  action: () => void;
  isFavorite: boolean;
}> = ({ action, isFavorite }) => {
  let result;
  if (!isFavorite) {
    return (
      <HeartIcon
        className='h-6 w-6 cursor-pointer text-white'
        onClick={action}
      />
    );
  } else {
    return (
      <SolidHeartIcon
        className='h-6 w-6 cursor-pointer text-white'
        onClick={action}
      />
    );
  }
};

export default FavButton;
