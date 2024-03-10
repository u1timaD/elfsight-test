import styled from "styled-components";

const NotFoundStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
	margin: 0 auto;
`;
export const NotFound = () => {
  return (
    <NotFoundStyled>
      <span>НЕТ ТАКОГО ФИЛЬТРА</span>
    </NotFoundStyled>
  );
};
