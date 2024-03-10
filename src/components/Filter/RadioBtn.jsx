import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPersons } from "../../redux/personSlice";
import {
  setFilterGender,
  setFilterStatus,
  setFilterType,
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
  // useEffect(() => {
  //   dispatch(fetchPersons({ ...allTabs }));
  //   console.log(allTabs);
  // }, [allTabs, dispatch]);

  const handleClickInput = () => {
    const inputValue = inputRef.current.value.toLowerCase();
    const inputName = inputRef.current.name;

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
      dispatch(setFilterType(inputValue));
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
