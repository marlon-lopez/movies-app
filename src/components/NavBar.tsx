import React from 'react';
import { HomeIcon, CollectionIcon, FilmIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
const LINKS = [
  {
    path: '/',
    name: 'Home',
    icon: <HomeIcon className='h-6 w-7' />,
  },
  {
    path: '/movie',
    name: 'Movies',
    icon: <CollectionIcon className='h-6 w-6' />,
  },
  {
    path: '/tv',
    name: 'Series',
    icon: <FilmIcon className='h-6 w-6' />,
  },
];

const NavBar: React.FC = () => {
  return (
    <div className='navBar block flex-shrink-0 w-full fixed bottom-0 bg-secondary-blue p-3  rounded-t-xl z-10 md:static md:w-40 lg:w-52'>
      <nav>
        <ul className='flex justify-around flex-row items-center md:flex-col md:gap-6 md:items-start md:px-4 md:mt-4'>
          <li className='hidden md:inline text-blue-500 text-xl font-medium md:mb-4 '>
            Cine-Plus
          </li>
          {LINKS.map((link) => (
            <Link to={link.path} key={link.name}>
              <li className='text-white md:flex md:items-center md:gap-3 '>
                {link.icon}
                <p className='hidden md:inline'>{link.name}</p>
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default React.memo(NavBar);
