import React, { useEffect, useState } from 'react';
import { Movies } from '../types/index';
import { getMovies } from '../api/index';

//Components
import Movie from '../components/Movie';
import Banner from '../components/Banner';
import ListContainer from '../components/ListContainer';

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Home: React.FC = () => {
  /*   const getAll = async () => {
    const response = await getMovies();
    console.log(response);
  };
  useEffect(() => {
    getAll();
  }, []); */
  return (
    <section className='w-full flex flex-col flex-1 bg-primary-blue  overflow-hidden px-2 pb-10'>
      <Banner />
      <ListContainer title='recomended' search='recomended'>
        {arr.map((r) => (
          <Movie
            img='https://image.tmdb.org/t/p/w500/5bFK5d3mVTAvBCXi5NPWH0tYjKl.jpg'
            key={r}
            date='Des 16,2020'
            title='Space-Jam'
          />
        ))}
      </ListContainer>

      {/*Popular Movies*/}

      <ListContainer title='popular' search='recomended'>
        {arr.map((r) => (
          <Movie
            img='https://image.tmdb.org/t/p/w500/uHA5COgDzcxjpYSHHulrKVl6ByL.jpg'
            key={r}
            date='Des 16,2020'
            title='Space-Jam'
          />
        ))}
      </ListContainer>
    </section>
  );
};

export default Home;
