import React from 'react';
import { ProductionCompany } from '../utils/types';
interface Props {
  producer: ProductionCompany;
}

const ProducerCard: React.FC<Props> = ({ producer }) => {
  return (
    <div className='flex justify-center flex-col mx-4 flex-shrink-0 w-32 bg-gray-800 p-2 rounded-md'>
      <img
        src={`https://image.tmdb.org/t/p/w342/${producer.logo_path}`}
        alt={producer.name}
      />
      <p className='text-white text-center'>{producer.name}</p>
    </div>
  );
};

export default ProducerCard;
