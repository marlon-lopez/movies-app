import { retry } from '@reduxjs/toolkit/dist/query';
import { arch } from 'os';
import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../features/store';

const usePagination = (data: string, shownPageNumber: number = 7) => {
  console.log('usePagination');
  const [currentPage, setCurrentPage] = useState(1);

  let { totalPages } = useAppSelector(({ movies }) => movies[data]);
  totalPages = totalPages > 50 ? 50 : totalPages;

  let pageNumbers: (number | string)[] = [];

  //pageNumbers equal to the total pages
  if (totalPages <= shownPageNumber) {
    pageNumbers.push(
      ...Array.from({ length: shownPageNumber }, (val, index) => index + 1),
    );
  } else {
    if (totalPages <= shownPageNumber) {
      pageNumbers.push(...Array.from({ length: totalPages }, (_, i) => i + 1));
    } else {
      let startNumber = currentPage - Math.floor(shownPageNumber / 2) + 1;
      if (totalPages - Math.floor(shownPageNumber / 2) <= currentPage) {
        startNumber = totalPages - shownPageNumber + 1;
      }

      if (currentPage - Math.floor(shownPageNumber / 2) > 1) {
        pageNumbers.push(1);
        pageNumbers.push('...');
        if (totalPages - startNumber < 4) {
        }
        //once the current page approach the orevious 3 numbers to the last page it shows the last 4 pages else shows 3 and the dots
        pageNumbers.push(
          ...Array.from(
            {
              length:
                totalPages - currentPage < 3
                  ? shownPageNumber - 1
                  : shownPageNumber - 2,
            },
            () => startNumber++,
          ),
        );
      } else {
        pageNumbers.push(
          ...Array.from({ length: shownPageNumber }, (_, i) => i + 1),
        );
      }
      if (totalPages - currentPage > Math.floor(shownPageNumber / 2)) {
        pageNumbers.push('...');
      }
      pageNumbers.push(totalPages);
    }
  }

  const goTo = (page: number) => {
    if (!page) return;

    setCurrentPage(page);
  };

  const next = () => {
    if (currentPage < totalPages) goTo(currentPage + 1);
  };
  const prev = () => {
    if (currentPage > 1) goTo(currentPage - 1);
  };

  useEffect(() => {}, [currentPage, shownPageNumber]);

  //returns
  //a function called goTo() => will set the state to n page
  //method previous => go to the previous page
  //method next => go to the next page
  //isLast => return boolean
  //isFirst => return boolean
  return {
    page: {
      currentPage,
      pageNumbers,
      isFirst: currentPage === 1 ? true : false,
      isLast: currentPage === totalPages ? true : false,
      prev,
      next,
      goTo,
    },
  };
};

export default usePagination;
