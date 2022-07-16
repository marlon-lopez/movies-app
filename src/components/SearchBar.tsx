import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');
  const history = useHistory();
  const handleSearchEvent = () => {
    history.push({
      pathname: `../../search/${query}`,
    });
  };
  return (
    <div className='w-full flex items-center px-5 py-3 mb-6 mt-2 justify-center bg-primary-blue md:mb-0'>
      <div className='flex justify-center w-full md:w-96'>
        <input
          type='text'
          placeholder='Search'
          className='text-base h-10 p-2 w-5/6 bg-tertiary-blue rounded-l-lg text-white'
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => (e.key === 'Enter' ? handleSearchEvent() : null)}
        />
        <button
          className='bg-pink-600 text-base h-10 text-white p-2 rounded-r-lg'
          onClick={() => handleSearchEvent()}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
