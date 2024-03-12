import { useDispatch } from "react-redux";
import { resetFilters } from "../../redux/filterSlice";
import styled from "styled-components";
import { setCurrentPage } from "../../redux/personSlice";

const ResetBtnStyled = styled.button`
  width: 232px;
  height: 40px;
	margin: 0 auto;
	margin-top: 20px;
	margin-bottom: 20px;
	font-size: 18px;
  border-radius: 10px;
	cursor: pointer;
  color: #0B1215;
  text-transform: uppercase;
  font-weight: 600;

  @media (max-width: 700px) {
    font-size: 15px;
    width: 150px;
  }

	&:active {
		transform: scale(0.95);
	}
`;

export const ResetBtn = () => {
  const dispatch = useDispatch();

  const handleClickBtn = () => {
    dispatch(resetFilters());
    dispatch(setCurrentPage(1))
  };

  return (
    <ResetBtnStyled onClick={handleClickBtn}>Reset Filters</ResetBtnStyled>
  );
};
