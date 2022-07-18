import React from 'react';
import { EmojiSadIcon } from '@heroicons/react/outline';

const NotResults: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className='flex justify-center items-center min-h-full'>
      <EmojiSadIcon className='h-24 w-24 text-white' />
      <p className='text-white text-2xl'>{text}</p>
    </div>
  );
};

export default NotResults;
