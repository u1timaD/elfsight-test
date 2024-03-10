import { useDispatch } from "react-redux";
import { resetFilters } from "../../redux/filterSlice";
import styled from "styled-components";

const ResetBtnStyled = styled.button`
  width: 250px;
  height: 50px;
	margin: 0 auto;
	margin-top: 20px;
	margin-bottom: 20px;
	font-size: 24px;
	cursor: pointer;

	&:active {
		transform: scale(0.95);
	}
`;

export const ResetBtn = () => {
  const dispatch = useDispatch();

  const handleClickBtn = () => {
    dispatch(resetFilters());
  };

  return (
    <ResetBtnStyled onClick={handleClickBtn}>Сбросить фильтры</ResetBtnStyled>
  );
};
