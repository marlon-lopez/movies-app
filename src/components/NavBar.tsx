import React from 'react';

const NavBar: React.FC = () => {
  return (
    <div className='navBar w-full fixed bottom-0 bg-secondary-blue p-3  rounded-t-xl z-10 md:static md:w-40 lg:w-52'>
      <nav>
        <ul className='flex justify-around flex-row items-center md:flex-col md:gap-6 md:items-start md:px-4 md:mt-4'>
          <li className='hidden md:inline text-blue-500 text-xl font-medium md:mb-4 '>
            Cine-Plus
          </li>
          <li className='text-white md:flex md:items-center md:gap-3 '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
              />
            </svg>
            <p className='hidden md:inline'>Home</p>
          </li>
          <li className='text-white md:flex md:items-center md:gap-3'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
              />
            </svg>
            <p className='hidden md:inline'>Movies</p>
          </li>
          <li className='text-white md:flex md:items-center md:gap-3'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z'
              />
            </svg>
            <p className='hidden md:inline'>Series</p>
          </li>
          <li className='text-white md:flex md:items-center md:gap-3'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
            <p className='hidden md:inline'>User</p>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
