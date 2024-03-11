import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { setCurrentPage } from "../../redux/personSlice";

export const Pagination = () => {
  const pages = useSelector((state) => state.person.pages);
  const currentPage = useSelector((state) => state.person.currentPage);
  const statusFetch = useSelector((state) => state.person.statusFetch);
  const dispatch = useDispatch();

  const clickCount = (evt) => {
    dispatch(setCurrentPage(evt.selected + 1));
  };

  return (
    <>
      {statusFetch !== "error" && (
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={clickCount}
          pageRangeDisplayed={3}
          pageCount={Number(pages)}
          // forcePage={currentPage - 1}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />
      )}
    </>
  );
};
