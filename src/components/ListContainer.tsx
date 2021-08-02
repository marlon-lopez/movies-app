import React from 'react';
interface Props {
  title: string;
  children: JSX.Element[] | JSX.Element;
}
const ListContainer: React.FC<Props> = ({ title, children }) => {
  return (
    <div className='w-full flex flex-col px-0.5 py-5 my-4'>
      <h3 className='text-white font-semibold mb-4 mx-2'>{title}</h3>
      <div className='min-w-full flex overflow-x-auto'>{children}</div>
    </div>
  );
};

export default ListContainer;
