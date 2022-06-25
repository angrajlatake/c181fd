export const DOTS = "...";

function usePagination({ currentPage, totalCount, pageSize }) {
  /*
    This hook takes in total number of blogs and divides number of blogs per page chosen by the user or default set at 15 to get total number of pages.
    and returns an array according to the current page selected.
    
  */
  const lastPage = Number(Math.ceil(totalCount / pageSize));

  if (lastPage === 1) {
    return [1];
  } else if (currentPage < 3) {
    return [1, 2, 3, DOTS, lastPage];
  } else if (currentPage > 2 && currentPage < lastPage - 1) {
    return [
      1,
      DOTS,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      DOTS,
      lastPage,
    ];
  } else if (currentPage >= lastPage - 1) {
    return [1, DOTS, lastPage - 2, lastPage - 1, lastPage];
  }
}

export default usePagination;
