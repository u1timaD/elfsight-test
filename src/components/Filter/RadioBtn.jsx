import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPersons } from "../../redux/personSlice";
import { setFilterGender, setFilterStatus } from "../../redux/filterSlice";

export const RadioBtn = ({ filterName, index, inputName }) => {
  const inputRef = useRef();
  const dispatch = useDispatch();


  const filterGender1 = useSelector((state) => state.filter.filterGender);
  const filterStatus1 = useSelector((state) => state.filter.filterStatus);

 const filterGender= `&gender=${filterGender1}`
 const filterStatus = `&status=${filterStatus1}`

// ?Фильтер ставиться только при втором нажатии. Пофиксить
  const handleClickInput = () => {
    const inputValue = inputRef.current.value.toLowerCase();
    const inputName = inputRef.current.name;

    if(inputName === 'status') {
      dispatch(setFilterStatus(inputValue))  
    }
    if(inputName === 'gender') {
      dispatch(setFilterGender(inputValue))  
    }

    dispatch(fetchPersons({ filterStatus, filterGender }));

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
