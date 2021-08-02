import React from 'react';
import ListContainer from './ListContainer';
import Movie from './Movie';

const Banner: React.FC<{ image: string }> = ({ image }) => {
  return (
    <ListContainer title='Upcoming movies'>
      <Movie
        cardWidth='min-w-full'
        cardHeight='h-52'
        img={image}
        date='Des 16,2020'
        title='Space-Jam'
      />
      <Movie
        cardWidth='min-w-full'
        cardHeight='h-52'
        img={image}
        date='Des 16,2020'
        title='Space-Jam'
      />
    </ListContainer>
  );
};

export default Banner;
