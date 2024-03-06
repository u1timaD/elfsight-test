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

const StyledFieldset = styled.li`
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

export const Filter = () => {


  return (
    <StyledFilter>
      <h2>Filter by:</h2>
      <StyledList>
        <StyledItem>
          <span>Status:</span>
          <StyledFieldset className="radio-set">
            <RadioBtn />
            {/* <label>
              <input type="radio" name="status" />
              <span></span>
              <span>Alive</span>
            </label> */}
            {/* <label>
              <input type="radio" name="status" />
              <span></span>
              <span>Dead</span>
            </label>
            <label>
              <input type="radio" name="status" />
              <span></span>
              <span>Unknown</span>
            </label> */}
          </StyledFieldset>
        </StyledItem>
        {/* <li>
          <span>Gender:</span>
          <fieldset className="radio-set">
            <label>
              <input type="radio" name="gender" />
              <span>Male</span>
            </label>
            <label>
              <input type="radio" name="gender" />
              <span>Female</span>
            </label>
            <label>
              <input type="radio" name="gender" />
              <span>Genderless</span>
            </label>
            <label>
              <input type="radio" name="gender" />
              <span>Unknown</span>
            </label>
          </fieldset>
        </li> */}
      </StyledList>
    </StyledFilter>
  );
};
