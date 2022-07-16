import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchDetails } from '../features/detailsSlice';
import { useAppDispatch, useAppSelector } from '../features/store';

import CastCard from '../components/CastCard';
import ListContainer from '../components/ListContainer';
import ProducerCard from '../components/ProducerCard';
import CardItem from '../components/CardItem';
import Overview from '../components/Overview';
import Trailers from '../components/Trailers';

const Details: React.FC = () => {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  let [_, type, id] = pathname.split('/');

  const { selected, loading } = useAppSelector((state) => state.details);
  useEffect(() => {
    if ('id' in selected && selected.id === Number(id)) {
      return;
    }
    dispatch(fetchDetails({ entry: type, id: Number(id) }));
  }, [id]);
  if ('poster_path' in selected) {
    return (
      <div className='mb-10 relative'>
        <Overview
          backdrop_path={selected.backdrop_path}
          poster_path={selected.poster_path}
          genres={selected.genres}
          overview={selected.overview}
          title={'title' in selected ? selected.title : selected.name}
          vote_average={selected.vote_average}
          type={type}
        />
        {/* Cast and Crew */}
        <ListContainer title={'Cast & Crew'} key='crew'>
          {selected.cast.map((item) => (
            <CastCard person={item} key={item.id} />
          ))}
        </ListContainer>

        {/* Trailers*/}
        <Trailers videos={selected.videos} />

        {/* Producers */}
        <ListContainer title='Producers Companies' key='producers'>
          {selected.production_companies.map((producer) => (
            <ProducerCard producer={producer} key={producer.id} />
          ))}
        </ListContainer>

        {/* Recomendations */}
        <ListContainer title='Recomendations' key='recomendations'>
          {selected.recomendations.map((recomendedItem) => (
            <CardItem
              img={recomendedItem.poster_path}
              key={recomendedItem.id}
              date={
                'first_air_date' in recomendedItem
                  ? recomendedItem.first_air_date
                  : recomendedItem.release_date
              }
              title={
                'name' in recomendedItem
                  ? recomendedItem.name
                  : recomendedItem.title
              }
              id={recomendedItem.id}
              type={'name' in recomendedItem ? 'tv' : 'movie'}
            />
          ))}
        </ListContainer>
      </div>
    );
  }
  return null;
};

export default Details;
