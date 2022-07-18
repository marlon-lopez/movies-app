import React, { useEffect } from 'react';
//Components
import Banner from '../components/Banner';
import DiscoverMovies from '../components/DiscoverMovies';

const Home: React.FC = () => {
  return (
    <section className='w-full flex flex-col bg-primary-blue  overflow-hidden px-2 pb-10 '>
      <Banner category='upcoming' />
      <DiscoverMovies title='popular Movies' category='popular' />
      <DiscoverMovies title='top Rated Movies' category='top_rated' />
    </section>
  );
};

export default Home;
