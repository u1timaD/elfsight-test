import { useSelector } from "react-redux";
import { useMemo } from "react";
import styled from "styled-components";
import { List } from "./List";

const StyledFilter = styled.div`
  display: flex;

  & > div {
    display: flex;

    @media (max-width: 1100px) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 10px;
    }

    @media (max-width: 700px) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 10px;
    }

    @media (max-width: 540px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr;
      gap: 10px;
    }
  }

   
`;

export const Filter = () => {
  const filtersList = useSelector((state) => state.filter.filtersList);

  const memoizedFilterLists = useMemo(
    () =>
      filtersList.map((filterItem, key) => (
        <List key={key} filterItem={filterItem} index={key} />
      )),
    [filtersList]
  );

  return (
    <StyledFilter>
      {/* <h2>Filter by:</h2> */}
      <div>{memoizedFilterLists}</div>
    </StyledFilter>
  );
};
