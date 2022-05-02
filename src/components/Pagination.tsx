import React from 'react';
interface Props {
  page: {
    currentPage: number;
    pageNumbers: (number | string)[];
    isFirst: boolean;
    isLast: boolean;
    prev: () => void;
    next: () => void;
    goTo: (page: number) => void;
  };
}

const Pagination: React.FC<Props> = ({ page }) => {
  console.log('rendering pagination');
  return (
    <div className='mx-auto pb-6 mb-14'>
      <div className='flex gap-x-5'>
        {!page.isFirst && (
          <button
            className='border-none outline-none bg-transparent text-gray-500 text-lg hover:text-white '
            onClick={() => page.prev()}>
            {'<'}
          </button>
        )}
        {page.pageNumbers.map((num) => (
          <button
            key={num}
            className={`border-none outline-none bg-transparent  ${
              num === page.currentPage ? 'text-white' : 'text-gray-500'
            }  text-lg hover:text-white `}
            onClick={() => page.goTo(Number(num))}>
            {num}
          </button>
        ))}
        {!page.isLast && (
          <button
            className='border-none outline-none bg-transparent text-gray-500 text-lg hover:text-white '
            onClick={() => page.next()}>
            {'>'}
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
