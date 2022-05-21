import React from 'react';
import { Videos } from '../utils/types';

const Trailers: React.FC<{ videos: Videos }> = ({ videos }) => {
  return (
    <div className=''>
      <h3 className='text-white font-semibold mb-4 mx-2 capitalize md:mx-5'>
        Trailers
      </h3>
      <div className='px-4 xl:flex xl:gap-4 xl:flex-wrap xl:justify-center'>
        {videos.results.map((video) => (
          <iframe
            key={video.id}
            className='w-full h-60 my-6 md:h-72 xl:max-w-lg'
            src={`https://www.youtube.com/embed/${video.key}`}
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen></iframe>
        ))}
      </div>
    </div>
  );
};

export default Trailers;
