import { Search } from "./Search";
import logo from "../assets/logo.jpg";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src={logo} />
        </div>
				<Search />
      </div>
    </header>
  );
};
