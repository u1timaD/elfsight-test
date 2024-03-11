import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPersons, setCurrentPage } from "../../redux/personSlice";
import {
  setFilterGender,
  setFilterStatus,
  setFilterType,
  setFilterSpecies,
  setResetFilters,
} from "../../redux/filterSlice";

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
    <label>
      <input
        ref={inputRef}
        onClick={handleClickInput}
        type="radio"
        name={inputName}
        value={filterName}
      />
      <span></span>
      <span>{filterName}</span>
    </label>
  );
};
