import { Sort } from "./Sort";
import { Filter } from "./Filter";
import { PersonCard } from "./PersonCard";

import Rick from "../assets/image2.jpg";

export const Main = () => {
  return (
    <>
      <Sort />
      <Filter />
      <section className="cards">
        <ul className="card__list">
          <li className="card__item">
            <div className="card__wrapper">
              <div className="card__img-wrapper">
                <img
                  className="card__img"
                  src={Rick}
                  width={100}
                  height={100}
                />
                <span>Alive</span>
              </div>
              <span>Rick Sanches</span>

              <span>Male</span>
              <button className="card__btn">Details</button>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};
