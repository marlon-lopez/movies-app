import React from 'react';

const DetailsSkeleton = () => {
  return (
    <div>
      <div className='background h-96 bg-secondary-blue xl:min-w-max animate-pulse'></div>
      <div className='description flex flex-col mx-4 relative z-10 lg:mt-48 xl:flex-row xl:mt-6 animate-pulse'>
        <div className='poster bg-tertiary-blue  h-80 w-44 m-auto xl:w-52 rounded-md '></div>
        <div className='overview flex flex-col xl:flex-1  xl:px-12 xl:py-8'>
          <div className='bg-tertiary-blue flex my-4 h-5 rounded-md'></div>
          <div className='bg-tertiary-blue flex my-3 h-3 max-w-2xl rounded'></div>
          <div className='bg-tertiary-blue flex my-3 h-3 max-w-2xl rounded'></div>
          <div className='bg-tertiary-blue flex my-3 h-3 max-w-2xl rounded'></div>
          <div className='bg-tertiary-blue flex my-3 h-3 max-w-2xl rounded'></div>
        </div>
      </div>
    </div>
  );
};

export default DetailsSkeleton;
