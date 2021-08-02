import React, { useEffect, useState } from 'react';
import { Movies } from '../types/index';
import { getMovies } from '../api/index';

//Components
import Movie from '../components/Movie';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import Banner from '../components/Banner';
import ListContainer from '../components/ListContainer';

let arr = [1, 2, 3, 4];

const Home: React.FC = () => {
  /*   const getAll = async () => {
    const response = await getMovies();
    console.log(response);
  };
  useEffect(() => {
    getAll();
  }, []); */
  return (
    <main className='flex w-full overflow-hidden bg-gray-700'>
      <NavBar />
      <section className='w-full flex flex-col flex-1 bg-primary-blue overflow-hidden px-2 pb-10'>
        <SearchBar />
        <Banner
          image={
            'https://image.tmdb.org/t/p/w500/8s4h9friP6Ci3adRGahHARVd76E.jpg'
          }
        />

        <ListContainer title='Recomended'>
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

        <ListContainer title='Popular Movies'>
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
    </main>
  );
};

export default Home;
