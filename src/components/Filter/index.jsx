import styled from "styled-components";
import { RadioBtn } from "./RadioBtn";

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

export const Filter = ({ status, typePerson }) => {
  return (
    <StyledFilter>
      <h2>Filter by:</h2>
      <StyledList>
        <StyledItem>
          <span>Status:</span>
          <StyledFieldset className="radio-set">
            {status.map((item, i) => (
              <RadioBtn key={i} item={item} />
            ))}
          </StyledFieldset>
        </StyledItem>
        <StyledItem>
          <span>Type:</span>
          <StyledFieldset className="radio-set">
            {typePerson.map((item, i) => (
              <RadioBtn key={i} item={item} />
            ))}
          </StyledFieldset>
        </StyledItem>
      </StyledList>
    </StyledFilter>
  );
};
