import React from 'react';
import CardSkeleton from './CardSkeleton';

const CardsSkeleton: React.FC = () => {
  return (
    <div className='grid grid-cols-auto-fit justify-items-center gap-y-6 gap-x-2 md:gap-x-6 pb-12 mt-4'>
      {Array.from({ length: 20 }).map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </div>
  );
};

export default CardsSkeleton;
