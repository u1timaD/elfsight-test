import { Search } from "./Search";
import logo from "../assets/logo.jpg";
import styled from "styled-components";

const StyledHeader = styled.header`
  /* background-color: #011314; */
  background-color: #123354;
  padding: 27px 120px;
  width: 100%;

  & > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`

export const Header = () => {
  return (
    <StyledHeader>
      <div className="header__container">
        <div className="header__logo">
          <img src={logo} />
        </div>
				<Search />
      </div>
    </StyledHeader>
  );
};
