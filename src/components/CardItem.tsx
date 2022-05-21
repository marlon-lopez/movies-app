import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  img: string;
  title: string;
  date: string;
  id: number;
  type: string;
}

const CardItem: React.FC<Props> = ({ img, title, date, id, type }) => {
  return (
    <div className='flex-shrink-0 mx-2 overflow-hidden bg-primary-blue-blue md:mx-5 max-w-min'>
      <div className='w-36'>
        <Link to={{ pathname: `../../${type}/${id}` }}>
          <img
            className='rounded-lg object-cover max-w-full h-auto'
            src={`https://image.tmdb.org/t/p/w342/${img}`}
            alt={title}
          />
        </Link>
      </div>
      <div>
        <h4 className='text-white font-medium text-base'>{title}</h4>
        <p className='text-gray-500 text-xs '>{date}</p>
      </div>
    </div>
  );
};

export default React.memo(CardItem);
