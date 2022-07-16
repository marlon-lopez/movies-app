import React from 'react';

const CardSkeleton = () => {
  return (
    <div className='flex-shrink-0 mx-2 overflow-hidden bg-secondary-blue md:mx-5 max-w-min animate-pulse rounded'>
      <div className='w-36 h-52'>
        <div className='rounded-lg object-cover max-w-full h-auto'></div>
      </div>
      <div className='h-10 px-4'>
        <div className='bg-tertiary-blue max-w-full h-2 rounded my-2'></div>
        <div className='bg-tertiary-blue w-20 h-2 rounded'></div>
      </div>
    </div>
  );
};

export default CardSkeleton;
