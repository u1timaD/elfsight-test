import { useSelector } from "react-redux";

export const RadioBtn = ({ filterName, index, inputName }) => {
  return (
    <label>
      <input type="radio" name={inputName} />
      <span></span>
      <span>{filterName}</span>
    </label>
  );
};
