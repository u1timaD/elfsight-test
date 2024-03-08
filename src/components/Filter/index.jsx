import styled from "styled-components";
import { RadioBtn } from "./RadioBtn";
import { useDispatch, useSelector } from "react-redux";
import { findFilters } from "../../redux/filterSlice";
import { useEffect } from "react";
import { List } from "./List";

const StyledFilter = styled.div`
  display: flex;
`;

const StyledList = styled.ul`
  display: flex;
  margin-left: 78px;
`;

const StyledItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: start;
  position: relative;

  & label {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & input {
    display: none;
  }

  & input + span {
    position: relative;
    cursor: pointer;
    width: 20px;
    height: 20px;
    background-color: #d9d9d9;
    border-radius: 50%;
    margin-right: 15px;
  }

  & input:checked + span::after {
    content: "";
    position: absolute;
    left: 5px;
    top: 5px;
    width: 10px;
    height: 10px;
    background-color: #021415;
    border-radius: 50%;
  }
`;

export const Filter = () => {
  const dispatch = useDispatch();

  // const personsData = useSelector((state) => state.filter.persons);
  const filtersList = useSelector((state) => state.filter.filtersList);

  // console.log(filtersList);

  return (
    <StyledFilter>
      <h2>Filter by:</h2>
      {filtersList.map((filterItem, key) => (
        <List key={key} filterItem={filterItem} index={key} />
      ))}
    </StyledFilter>
  );
};
