import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../redux/personSlice";
import {
  setFilterGender,
  setFilterStatus,
  setFilterType,
  setFilterSpecies,
  setResetFilters,
} from "../../redux/filterSlice";
import styled from "styled-components";

const RadioLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RadioInput = styled.input`
  display: none;

  & + span {
    position: relative;
    cursor: pointer;
    width: 20px;
    height: 20px;
    background-color: #d9d9d9;
    border-radius: 50%;
    margin-right: 15px;
  }

  &:checked + span::after {
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

const RadioName = styled.span`
  font-size: 18px;
  text-align: start;

  @media (max-width: 1100px) {
    font-size: 16px;
  }

  
`;

export const RadioBtn = ({ filterName, index, inputName }) => {
  const inputRef = useRef();
  const dispatch = useDispatch();

  const resetFilters = useSelector((state) => state.filter.reset);

  useEffect(() => {
    if (resetFilters) {
      inputRef.current.checked = false;
      dispatch(setResetFilters(true));
    }
  }, [resetFilters]);

  const handleClickInput = () => {
    const inputValue =
      inputRef.current.value.toLowerCase() === "all"
        ? ""
        : inputRef.current.value.toLowerCase();

    const inputName = inputRef.current.name;
    dispatch(setCurrentPage(1));
    if (inputName === "status") {
      dispatch(setFilterStatus(inputValue));
    }

    if (inputName === "gender") {
      dispatch(setFilterGender(inputValue));
    }

    if (inputName === "type") {
      dispatch(setFilterType(inputValue));
    }

    if (inputName === "species") {
      dispatch(setFilterSpecies(inputValue));
    }
  };

  return (
    <RadioLabel>
      <RadioInput
        ref={inputRef}
        onClick={handleClickInput}
        type="radio"
        name={inputName}
        value={filterName}
      />
      <span></span>
      <RadioName>{filterName}</RadioName>
    </RadioLabel>
  );
};
