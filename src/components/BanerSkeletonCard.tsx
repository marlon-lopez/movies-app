import React from 'react';

function BanerSkeletonCard() {
  return (
    <div className='flex-shrink-0 mx-2 overflow-hidden bg-primary-blue-blue md:mx-5 animate-pulse rounded'>
      <div className='w-96 h-56 bg-secondary-blue xl:min-w-max'>
        <div></div>
      </div>
      <div className='h-10 pr-6'>
        <div className='bg-tertiary-blue max-w-full h-2 rounded my-2'></div>
        <div className='bg-tertiary-blue w-40 h-2 rounded my-2'></div>
      </div>
    </div>
  );
}

export default BanerSkeletonCard;
