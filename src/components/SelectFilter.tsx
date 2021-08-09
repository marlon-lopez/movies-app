import React from 'react';

const SelectFilter: React.FC = () => {
  const filterBy = [
    'popularity',
    'release_date',
    'revenue',
    'primary_release_date',
    'original_title',
    'vote_average',
    'vote_count',
  ];
  const sortBy = ['asc', 'desc'];
  return (
    <div className='self-end'>
      <select className='bg-tertiary-blue text-base text-white p-1 border-0 mx-4'>
        {filterBy.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
      <select className='bg-tertiary-blue text-base text-white p-1 border-0 mx-4 '>
        {sortBy.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectFilter;
