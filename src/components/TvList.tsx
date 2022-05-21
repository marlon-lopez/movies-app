import React from 'react';
import { TvShow } from '../utils/types';
import CardItem from './CardItem';

const TvList: React.FC<{ items: TvShow[] }> = ({ items }) => {
  return (
    <div className='grid grid-cols-auto-fit justify-items-center gap-y-6 gap-x-2 md:gap-x-6 pb-12 mt-4  '>
      {items.map((item) => (
        <CardItem
          img={item.poster_path}
          key={item.id}
          date={item.first_air_date}
          title={item.original_name}
          id={item.id}
          type={'tv'}
        />
      ))}
    </div>
  );
};

export default TvList;
