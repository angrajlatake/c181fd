export const DOTS = "...";

function usePagination({ currentPage, totalCount, pageSize }) {
  /*
    Rewrite the logic here to map out the pagination to be displayed

    !!!!!! ATTENTION !!!!!!
    Please replace this comment here with a description of this hook.
    
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
