import styled from "styled-components";
import { RadioBtn } from "./RadioBtn";
import { useDispatch, useSelector } from "react-redux";
import { findFilters } from "../../redux/filterSlice";
import { useEffect } from "react";
import { List } from "./List";

const StyledFilter = styled.div`
  display: flex;
`;

export const Filter = () => {
  const filtersList = useSelector((state) => state.filter.filtersList);

  return (
    <StyledFilter>
      <h2>Filter by:</h2>
      {filtersList.map((filterItem, key) => (
        <List key={key} filterItem={filterItem} index={key} />
      ))}
    </StyledFilter>
  );
};
