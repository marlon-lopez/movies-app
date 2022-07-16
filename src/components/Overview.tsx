import React from 'react';
import { StarIcon } from '@heroicons/react/solid';
import { GenreId } from '../utils/types';
import GenreCards from './GenreCards';
interface Props {
  backdrop_path: string;
  poster_path: string;
  vote_average: number;
  genres: GenreId[];
  title: string;
  overview: string;
  type: string;
}

const Overview: React.FC<Props> = ({
  backdrop_path,
  genres,
  poster_path,
  title,
  vote_average,
  overview,
  type,
}) => {
  return (
    <>
      <div className=' w-auto max-h-96 hidden  lg:block absolute opacity-60 xl:relative 2xl:w-full '>
        <img
          className='w-max h-64 object-cover lg:h-96 2xl:w-full'
          src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
          alt='selected movie or tv show backdrop'
        />
      </div>

      <div className='description flex flex-col  mx-4 relative z-10 lg:mt-48 xl:flex-row xl:mt-6'>
        <div className='w-44 m-auto xl:w-52 '>
          <img
            src={`https://image.tmdb.org/t/p/w342/${poster_path}`}
            alt='selected movie or tv show poster'
          />
        </div>
        {/* description */}
        <div className='flex flex-col xl:flex-1  xl:px-12 xl:py-8 '>
          <div className='flex my-4 justify-center text-white xl:justify-start xl:order-2'>
            <div className='flex flex-wrap gap-3 justify-center'>
              <StarIcon className='h-6 w-6 ' /> {vote_average}
              <GenreCards genres={genres} type={type} />
            </div>
          </div>

          <div className='flex flex-col gap-4 xl:order-1 '>
            <h2 className='text-white font-semibold text-xl text-center lg:text-2xl xl:text-left'>
              {title}
            </h2>
            <p className='text-gray-500 lg:text-lg'>{overview}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
