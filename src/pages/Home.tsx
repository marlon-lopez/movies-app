import React, { useEffect } from 'react';
//Components
import Banner from '../components/Banner';
import DiscoverMovies from '../components/DiscorverMovies';

const Home: React.FC = () => {
  useEffect(() => {
    console.log('rendering homepage');
  });
  return (
    <section className='w-full flex flex-col bg-primary-blue  overflow-hidden px-2 pb-10 '>
      <Banner category='upcoming' />
      <DiscoverMovies title='popular Movies' category='popular' />
      <DiscoverMovies title='top Rated Movies' category='top_rated' />
    </section>
  );
};

export default Home;
