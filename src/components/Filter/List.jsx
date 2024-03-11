import styled from "styled-components";
import { RadioBtn } from "./RadioBtn";
import { useSelector } from "react-redux";

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
  height: 150px;
  overflow: auto;
  border: none;
  

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

export const List = ({ filterItem, index }) => {
  const filtersNameRtk = useSelector((state) => state.filter.filtersName);

  const inputName = filtersNameRtk[index];

  return (
    <StyledList>
      <StyledItem>
        <span>{inputName}</span>
        <StyledFieldset className="radio-set">
          {filterItem.map((filterName, index) => (
            <RadioBtn
              key={index}
              filterName={filterName || 'All'}
              inputName={inputName}
            />
          ))}
        </StyledFieldset>
      </StyledItem>
    </StyledList>
  );
};
