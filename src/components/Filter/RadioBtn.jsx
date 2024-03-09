import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPersons } from "../../redux/personSlice";
import { setFilterGender, setFilterStatus, setFilterType} from "../../redux/filterSlice";

export const RadioBtn = ({ filterName, index, inputName }) => {
  const inputRef = useRef();
  const dispatch = useDispatch();


  const filterGender1 = useSelector((state) => state.filter.filterGender);
  const filterStatus1 = useSelector((state) => state.filter.filterStatus);

  
  // useEffect(() => {
  //   dispatch(fetchPersons({ ...allTabs }));
  //   console.log(allTabs);
  // }, [allTabs, dispatch]);

  const handleClickInput = () => {
    const inputValue = inputRef.current.value.toLowerCase();
    const inputName = inputRef.current.name;

    if(inputName === 'status') {
      dispatch(setFilterStatus(`&status=${inputValue}`))
    }

    if(inputName === 'gender') {
      dispatch(setFilterGender(`&gender=${inputValue}`))
    }

    if(inputName === 'type') {
      dispatch(setFilterType(`&type=${inputValue}`))
    }

    if(inputName === 'species') {
      dispatch(setFilterType(`&species=${inputValue}`))
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
