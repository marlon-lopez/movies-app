import React from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/outline';

const Error = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-full'>
      <ExclamationCircleIcon className='h-24 w-24 text-white' />
      <p className='text-gray-300 text-3xl'>Something went wrong </p>
      <p className='text-gray-300 text-xl'>Please try again</p>
    </div>
  );
};

export default Error;
