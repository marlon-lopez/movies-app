import React from 'react';
import { Link } from 'react-router-dom';
interface Props {
  title: string;
  search: string;
  children: JSX.Element[] | JSX.Element;
}
const ListContainer: React.FC<Props> = ({ title, children, search }) => {
  return (
    <div className='w-full flex flex-col px-0.5 py-5 my-4 md:my-2'>
      <div className='flex justify-between'>
        <h3 className='text-white font-semibold mb-4 mx-2 capitalize'>
          {title}
        </h3>
        <Link
          to={{
            pathname: `movies`,
            search,
          }}
          className='text-white font-semibold mb-4 mx-2 '>
          <div className='flex items-center text-blue-400'>
            <p className='text-xs'>See All</p>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 5l7 7-7 7'
              />
            </svg>
          </div>
        </Link>
      </div>
      <div className='min-w-full flex overflow-x-auto '>{children}</div>
    </div>
  );
};

export default ListContainer;
