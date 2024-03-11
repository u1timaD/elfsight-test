import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../redux/personSlice";
import ReactPaginate from "react-paginate";
import styled from "styled-components";

const PaginationStyled = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

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
  const dispatch = useDispatch();

  const clickCount = (evt) => {
    dispatch(setCurrentPage(evt.selected + 1));
  };

  return (
    <PaginationStyled>
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
    </PaginationStyled>
  );
};
