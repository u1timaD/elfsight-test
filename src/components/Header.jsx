import { Search } from "./Search";
import logo from "../assets/logo.jpg";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: #07131f;
  padding: 27px 120px;
  width: 100%;
  margin-bottom: 20px;

  @media (max-width: 700px) {
    padding-inline: 10px;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 830px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding-inline: 0;
  }
`;

export const Header = () => {
  return (
    <StyledHeader>
      <HeaderContainer>
        <div className="header__logo">
          <img src={logo} />
        </div>
        <Search />
      </HeaderContainer>
    </StyledHeader>
  );
};
