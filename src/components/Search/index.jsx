import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { setCleanFilterName, setFilterName } from "../../redux/filterSlice";
import debounce from "lodash.debounce";

const StyledSearch = styled.div`
  display: flex;
  align-items: center;

  & input {
    height: 40px;
    width: 300px;
    border: 1px #42b4ca solid;
    border-radius: 40px;
    background-color: transparent;
    padding: 10px;
    padding-inline: 22px;
    font-size: 18px;
    color: #fff;

    &:hover {
      border-color: #bfde42;
    }

    &::placeholder {
      color: rgba(255, 255, 255, 0.2);
    }
  }

  & svg {
    margin-left: 10px;
    cursor: pointer;
  }
  & svg:hover path {
    fill: #bfde42;
  }
`;

const CrossSvgStyled = styled.svg`
  cursor: pointer;
  &:hover {
    & path {
      stroke: #bfde42;
    }
  }
`;

export const Search = () => {
  const [inputSearchValue, setInputSearchValue] = useState("");
  const crossRef = useRef(null);
  const dispatch = useDispatch();
  const reset = useSelector((state) => state.filter.reset);
  const filterName = useSelector((state) => state.filter.filterName);

  const updateSearchValue = useCallback(
    debounce((inputSearchValue) => {
      dispatch(setFilterName(inputSearchValue));
    }, 700),
    []
  );

  useEffect(() => {
    if (reset) {
      setInputSearchValue("");
    }
  }, [reset]);

  const handleClickCross = () => {
    setInputSearchValue("");
    dispatch(setCleanFilterName());
    crossRef.current.focus();
  };

  const onChangeInput = (evt) => {
    setInputSearchValue(evt.target.value);
    updateSearchValue(evt.target.value);
  };

  // const []
  return (
    <>
      <StyledSearch>
        <input
          type="text"
          ref={crossRef}
          onChange={onChangeInput}
          placeholder="Search"
          value={inputSearchValue}
        />
        {inputSearchValue ? (
          <CrossSvgStyled
            onClick={handleClickCross}
            width="25"
            height="25"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 5L5 19M5 5L9.5 9.5M12 12L19 19"
              stroke="#42B4CA"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </CrossSvgStyled>
        ) : (
          <svg
            onClick={() => crossRef.current.focus()}
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.2252 21.2744L18.3035 16.2379C17.6913 15.6869 17.0367 15.434 16.5077 15.4584C17.9057 13.8211 18.75 11.6968 18.75 9.37502C18.75 4.19732 14.5527 0 9.37502 0C4.19737 0 0 4.19732 0 9.37502C0 14.5527 4.19732 18.75 9.37502 18.75C11.6968 18.75 13.8211 17.9056 15.4584 16.5077C15.434 17.0366 15.6869 17.6912 16.2379 18.3034L21.2743 24.2251C22.1367 25.1833 23.5454 25.2641 24.4046 24.4047C25.264 23.5454 25.1834 22.1367 24.2252 21.2744ZM9.37502 15.625C5.92325 15.625 3.12501 12.8267 3.12501 9.37502C3.12501 5.92325 5.92325 3.12501 9.37502 3.12501C12.8267 3.12501 15.625 5.92325 15.625 9.37502C15.625 12.8267 12.8268 15.625 9.37502 15.625Z"
              fill="#42B4CA"
            />
          </svg>
        )}
      </StyledSearch>
    </>
  );
};
