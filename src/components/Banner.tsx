import React from 'react';
import ListContainer from './ListContainer';
import Movie from './Movie';

const Banner: React.FC = () => {
  return (
    <ListContainer title='Upcoming movies' search='upcoming'>
      <Movie
        //cardWidth='min-w-full'
        cardWidth='min-w-full md:w-max'
        cardHeight='h-52 md:h-auto'
        //cardHeight='h-64'
        img={'https://image.tmdb.org/t/p/w500/8s4h9friP6Ci3adRGahHARVd76E.jpg'}
        date='Des 16,2020'
        title='Space-Jam'
      />
      <Movie
        cardWidth='min-w-full md:w-max'
        cardHeight='h-52 md:h-auto'
        img={'https://image.tmdb.org/t/p/w500/8s4h9friP6Ci3adRGahHARVd76E.jpg'}
        date='Des 16,2020'
        title='Space-Jam'
      />
      <Movie
        //cardWidth='min-w-full'
        cardWidth='min-w-full md:w-max'
        cardHeight='h-52 md:h-auto'
        //cardHeight='h-64'
        img={'https://image.tmdb.org/t/p/w500/8s4h9friP6Ci3adRGahHARVd76E.jpg'}
        date='Des 16,2020'
        title='Space-Jam'
      />
      <Movie
        cardWidth='min-w-full md:w-max'
        cardHeight='h-52 md:h-auto'
        img={'https://image.tmdb.org/t/p/w500/8s4h9friP6Ci3adRGahHARVd76E.jpg'}
        date='Des 16,2020'
        title='Space-Jam'
      />
      <Movie
        //cardWidth='min-w-full'
        cardWidth='min-w-full md:w-max'
        cardHeight='h-52 md:h-auto'
        //cardHeight='h-64'
        img={'https://image.tmdb.org/t/p/w500/8s4h9friP6Ci3adRGahHARVd76E.jpg'}
        date='Des 16,2020'
        title='Space-Jam'
      />
      <Movie
        cardWidth='min-w-full md:w-max'
        cardHeight='h-52 md:h-auto'
        img={'https://image.tmdb.org/t/p/w500/8s4h9friP6Ci3adRGahHARVd76E.jpg'}
        date='Des 16,2020'
        title='Space-Jam'
      />
    </ListContainer>
  );
};

export default Banner;
