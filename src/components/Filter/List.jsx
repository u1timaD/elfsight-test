import styled from "styled-components";
import { RadioBtn } from "./RadioBtn";
import { useSelector } from "react-redux";

const StyledList = styled.ul`
  display: flex;
  margin-left: 30px;

  @media (max-width: 1100px) {
    max-height: 200px;
    margin-left: 0;

    &:last-child {
      grid-column: 1/-1;
    }
  }

  @media (max-width: 700px) {
    &:last-child {
      grid-column: -1/2;
    }
  }

  @media (max-width: 540px) {
    grid-column: 1/3;

    &:last-child {
      grid-column: 1/2;
    }
  }
`;

const StyledItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: start;
  border: 1px solid rgba(66, 180, 202, 0.5);
  padding: 10px;
  border-radius: 10px;

  @media (max-width: 1100px) {
    width: 100%;
  }

  & h2 {
    text-transform: uppercase;
    font-size: 18px;
    margin-inline: auto;
    margin-bottom: 10px;

    @media (max-width: 540px) {
      margin-bottom: 5px;
    }
  }
`;

const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: start;
  position: relative;
  height: 150px;
  overflow: auto;
  border: none;
  padding-inline: 10px;

  @media (max-width: 1100px) {
    width: 100%;
  }

  @media (max-width: 700px) {
    height: 97px;
  }
`;

export const List = ({ filterItem, index }) => {
  const filtersNameRtk = useSelector((state) => state.filter.filtersName);

  const inputName = filtersNameRtk[index];

  return (
    <StyledList>
      <StyledItem>
        <h2>{inputName}</h2>
        <StyledFieldset className="radio-set">
          {filterItem.map((filterName, index) => (
            <RadioBtn
              key={index}
              filterName={filterName || "All"}
              inputName={inputName}
            />
          ))}
        </StyledFieldset>
      </StyledItem>
    </StyledList>
  );
};
