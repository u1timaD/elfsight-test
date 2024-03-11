import styled from "styled-components";
import { RadioBtn } from "./RadioBtn";
import { useSelector } from "react-redux";

const StyledList = styled.ul`
  display: flex;
  margin-left: 30px;

  @media(max-width: 1100px) {
    max-height: 200px;
  }
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

  @media(max-width: 800px) {
    height: 87px;
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
