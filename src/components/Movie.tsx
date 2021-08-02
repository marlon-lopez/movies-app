import React from 'react';

interface MovieCard {
  img: string;
  title: string;
  date: string;
  cardWidth?: string;
  cardHeight?: string;
}

const Movie: React.FC<MovieCard> = ({
  img,
  title,
  date,
  cardWidth = 'w-32',
  cardHeight = '',
}) => {
  return (
    <div className='min-w-max mx-2 overflow-hidden bg-primary-blue-blue'>
      <img
        className={`${cardWidth} ${cardHeight} rounded-lg`}
        src={img}
        alt={title}
      />
      <div>
        <h4 className='text-white font-medium text-base'>{title}</h4>
        <p className='text-gray-500 text-xs'>{date}</p>
      </div>
    </div>
  );
};

export default Movie;
