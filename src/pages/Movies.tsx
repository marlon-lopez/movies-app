import React from 'react';
import { RouteComponentProps, useLocation } from 'react-router-dom';
import Movie from '../components/Movie';
import SelectFilter from '../components/SelectFilter';
type RouteProps = RouteComponentProps;

const Movies: React.FC<RouteProps> = () => {
  const location = useLocation();
  console.log(location);
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className='flex flex-col px-0 md:px-4'>
      <SelectFilter />
      <div className='grid grid-cols-auto-fit justify-items-center gap-y-6 gap-x-2 md:gap-x-6 pb-12 my-4  '>
        {arr.map((r) => (
          <Movie
            img='https://image.tmdb.org/t/p/w500/5bFK5d3mVTAvBCXi5NPWH0tYjKl.jpg'
            key={r}
            date='Des 16,2020'
            title='Space-Jam'
            cardWidth='w-36'
          />
        ))}
      </div>
      <div className='pagination'></div>
    </div>
  );
};

export default Movies;
