import styled from "styled-components";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { setCurrentPage } from "../../redux/personSlice";

const PaginationStyled = styled.section`
  display: flex;
  justify-content: center;

  & ul {
    display: flex;
    align-items: center;
    gap: 20px;

    & li {
      color: #ffffff;
      font-size: 24px;
      font-weight: 700;
      cursor: pointer;
      
      @media (max-width: 800px) {
        font-size: 18px;
      }

      &:hover {
        color: #bfde42;
      }

      &.selected {
        color: #42b4ca;
      }
    }
  }
`;

export const Pagination = () => {
  const pages = useSelector((state) => state.person.pages);
  const currentPage = useSelector((state) => state.person.currentPage);
  const statusFetch = useSelector((state) => state.person.statusFetch);
  const dispatch = useDispatch();

  const clickCount = (evt) => {
    dispatch(setCurrentPage(evt.selected + 1));
  };

  return (
    <PaginationStyled>
      {statusFetch !== "error" && (
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={clickCount}
          pageRangeDisplayed={3}
          pageCount={Number(pages)}
          forcePage={currentPage - 1}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      )}
    </PaginationStyled>
  );
};
