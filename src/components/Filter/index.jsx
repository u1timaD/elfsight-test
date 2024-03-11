import styled from "styled-components";
import { RadioBtn } from "./RadioBtn";
import { useDispatch, useSelector } from "react-redux";
import { findFilters } from "../../redux/filterSlice";
import { useEffect } from "react";
import { List } from "./List";

const StyledFilter = styled.div`
  display: flex;

  & > div {
    display: flex;

    @media (max-width: 1140px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      /* flex-direction: column; */
    }
  }
`;

export const Filter = () => {
  const filtersList = useSelector((state) => state.filter.filtersList);

  return (
    <StyledFilter>
      <h2>Filter by:</h2>
      <div>
        {filtersList.map((filterItem, key) => (
          <List key={key} filterItem={filterItem} index={key} />
        ))}
      </div>
    </StyledFilter>
  );
};
