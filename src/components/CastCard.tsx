import React from 'react';
import { Cast } from '../utils/types';
interface Props {
  person: Cast;
}

const CastCard: React.FC<Props> = ({ person }) => {
  return (
    <figure className='flex-shrink-0 mx-2 w-28' key={person.id}>
      <img
        className='bg-gray-800 w-24 h-24 rounded-full border-solid border-2 border-transparent object-cover object-center m-auto'
        src={`https://image.tmdb.org/t/p/w342/${person.profile_path}`}
        alt=''
      />
      <figcaption className='text-center'>
        <p className='text-white text-xs '>{person.name}</p>
        <p className='text-gray-500 text-xs'>{person.character}</p>
      </figcaption>
    </figure>
  );
};

export default CastCard;
